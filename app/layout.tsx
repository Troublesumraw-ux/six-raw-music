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
      <body>{children}</body>
    </html>
  );
}
