'use client';
import React, { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

// use this in layout.tsx
const AuthProvider = ({ children }: { children: ReactNode }) => {
  // Coming from the Client

  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
