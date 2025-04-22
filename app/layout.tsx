import "@styles/globals.css";
import Nav from "@components/Nav";
import { Inter } from 'next/font/google';

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={`${inter.className}`}><Nav />{children}</body>
    </html>
  );
}
