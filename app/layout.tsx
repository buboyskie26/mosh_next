import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from './NavBar';
import { Suspense } from 'react';
import LoadingPage from './loading';
import AuthProvider from './api/auth/Provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} data-theme="winter">
        <AuthProvider>
          <NavBar />
          <Suspense fallback={<LoadingPage />}>
            <main>{children}</main>
          </Suspense>
        </AuthProvider>
      </body>
    </html>
  );
}
