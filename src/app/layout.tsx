// app/layout.tsx

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './globals.css'; // Your custom global styles (if any)
import Header from '../components/client/header'
// Dynamically import Bootstrap JS (only on client side)
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
        <div>
          <Header/>
          {children}
          </div>
      </body>
    </html>
  );
}

