import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google"
import Navbar from "@/components/navbar/index";

const inter=Inter({
  weight:['400','500','600','700','800','900'],
  subsets: ['latin']
})

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
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-neutral-100`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
