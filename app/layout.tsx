import React from 'react';
import { Playfair_Display } from 'next/font/google';
import "./globals.css";

// Safely optimize and host Playfair Display without external network requests
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

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
    <html lang="en" className={playfair.variable}>
      <body>{children}</body>
    </html>
  );
}
