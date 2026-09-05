import React from 'react';
import "./globals.css";

export const metadata = {
  title: "Sixraw Home Decor | Unboring your space",
  description: "Handcrafted, customizable home decor designed for modern urban living.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Injecting Playfair Display Google Font natively for editorial headers */}
        <link rel="preconnect" href="https://googleapis.com" />
        <link rel="preconnect" href="https://gstatic.com" crossOrigin="anonymous" />
        <link href="https://googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
        <style>{`
          .font-serif {
            font-family: 'Playfair Display', Georgia, serif !important;
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
