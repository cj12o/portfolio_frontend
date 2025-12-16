import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/index";
import { ViewTransition } from "react";
import { Footer } from "@/components/navbar/footer";


const inter = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Porfolio_chitransh",
  description: "A portfolio website of Chitransh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransition>
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-neutral-100 dark:bg-neutral-700`}
      >
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
    </ViewTransition>
  );
}
