import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar"
import Footer from "./Footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shea Durgin",
  description: "Shea Durgin's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-900 text-slate-300`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
