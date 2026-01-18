import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google"; // Import fonts
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Premium Cuts | Quality Meat Delivery",
  description: "Farm-to-table premium meats delivered to your door.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.variable, playfair.variable, "font-sans antialiased bg-stone-950 text-stone-100")}>
        {children}
      </body>
    </html>
  );
}
