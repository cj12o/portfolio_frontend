import type { Metadata } from "next";
// import "@/app/globals.css";
import { Inter } from "next/font/google";
import Container from "../../../components/container";

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
  return <Container>{children}</Container>;
}
