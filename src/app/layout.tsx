'use client';

import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import './globals.css'; // Your custom styles
import Header from '../components/client/header';
import { SessionProvider } from 'next-auth/react'; // ✅ This is required

// Optional: Load Bootstrap JS on the client
if (typeof window !== 'undefined') {
  import('bootstrap/dist/js/bootstrap.bundle.min.js');
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <SessionProvider>
          <div>
            <Header />
            {children}
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
