import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import { cn } from "@/lib/utils";

const inter = Roboto({ subsets: ["latin"], weight:"500" });

export const metadata: Metadata = {
  title: "Food",
  description: "Food ordering app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'bg-black text-white')}>
        <NavBar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
