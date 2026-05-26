import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@fancyapps/ui/dist/fancybox/fancybox.css";





export const metadata: Metadata = {
  title: "SIT | Home Page",
  description: "SIT Pune is one of the best engineering colleges in Pune for B Tech programs. Explore top B Tech colleges in Pune, courses, infrastructure, and career growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">
       <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
