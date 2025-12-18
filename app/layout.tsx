import type { Metadata } from "next";
import "./globals.css";
import { Inter,Space_Grotesk } from "next/font/google";
import Navbar from "@/components/navbar/index";
import { ViewTransition } from "react";
import { Footer } from "@/components/navbar/footer";
import { ThemeProvider } from "next-themes";
import "highlight.js/styles/github-dark.css";


const inter = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});


const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
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
        className={`${inter.className} ${space.className}antialiased bg-neutral-100 [--pattern-fg:var(--color-gray-950)]/5 `}
      >
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        >
            <Navbar />
            {children}
            <Footer/>
        </ThemeProvider>
      </body>
    </html>
    </ViewTransition>
  );
}
