# Database (Supabase + prisma)

## Environment setup
Create a .env file in the project root:
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@db.fwghmbgkylgaakpqjpya.supabase.co:5432/postgres"

The database schema is created in the Schema.prisma file

## Prisma Commands
### Generate Prisma Client
```bash
npx prisma generate
```

### Pull latest database schema (Supabase → Prisma)
```bash
npx prisma db pull
```

### Push Prisma schema changes (Prisma → Supabase)
```bash
npx prisma db push
```

### Open database GUI (recommended for debugging)
```bash
npx prisma studio
```

## Typical Workflow
### When database changes are made in Supabase:
```bash
npx prisma db pull
npx prisma generate
```

### When schema is changed in Prisma:
```bash
npx prisma db push
npx prisma generate
```

## Notes
* Prisma Studio reads directly from the database (no generation needed)
* db pull = sync existing Supabase tables into Prisma schema
* db push = apply Prisma schema changes to Supabase
* Always run generate after schema changes