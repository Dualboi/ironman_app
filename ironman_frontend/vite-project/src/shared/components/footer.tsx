// src/shared/components/footer.tsx
import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full p-4 text-center text-zinc-500 border-t border-zinc-800">
      &copy; {new Date().getFullYear()} Ironman Buddy. All rights reserved.
    </footer>
  );
};