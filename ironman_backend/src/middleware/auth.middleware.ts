// backend/src/middleware/auth.middleware.ts

import jwt, { JwtHeader, SigningKeyCallback } from 'jsonwebtoken';
import JwksClient from "jwks-rsa"
import { Request, Response, NextFunction } from 'express'

// Extend Express Request to include user
export interface AuthenticatedRequest extends Request {
    user?: any;
    userId?: string;
}

// Replace with your actaul Supabase project URL in the env file,
// its done this way to avoid hardcoding sensitive info in the codebase
const SUPABASE_URL = process.env.SUPABASE_URL;

if (!SUPABASE_URL) {
    throw new Error("Missing SUPABASE_URL in environnebt  variables")
}

// Create JWKS client
const client = JwksClient({
    jwksUri: `${SUPABASE_URL}/auth/v1/keys`,
    cache: true,
    cacheMaxEntries: 5,
    cacheMaxAge: 10 * 60 * 10000, // 10 minutes
})

// Function to get signing key
const getKey = (
    header: JwtHeader,
    callback: SigningKeyCallback
) => {
    if (!header.kid) {
        return callback(new Error("Missing kid in token header"))
    }

    client.getSigningKey(header.kid, (err, key) => {
        if (err) {
            return callback(err)
        }

        const signingKey = key?.getPublicKey()
        callback(null, signingKey)
    })
}

// Middleware to verify JWT
export const authMiddleware = (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
) => {
    try {
        const authHeader = req.headers.authorization

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                error: "Unauthorized",
                message: "Missing or invalid Authorization header"
            })
        }

        const token = authHeader.split(" ")[1]

        jwt.verify(
            token,
            getKey,
            {
                algorithms: ["RS256"],
            },
            (err, decoded) => {
                if (err || !decoded) {
                    return res.status(401).json({
                        error: "Unauthorized",
                        message: "Invalid or expired token"
                    })
                }
                // Attach decoded token to request
                req.user = decoded

                // Supabase user ID is in `sub`
                req.userId = (decoded as any).sub

                next()
            }
        )
    } catch (error) {
        console.error("Auth middleware error:", error)

        return res.status(500).json({
            error: "Internal Server Error",
            message: "Authentication failed",
        })
    }
}