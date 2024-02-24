import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PDFriend",
  description: "AI-powered PDF Document Reader",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={cn("min-h-screen font-sans antialiased grainy", inter.className)}>
          <Navbar />
          {children}
      </body>
    </html>
  );
}
