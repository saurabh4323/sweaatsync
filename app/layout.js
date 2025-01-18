import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatbaseScript from "./Chatbubble";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sweat Sync",
  description: "Fitness Tracker",
};

export default function RootLayout({ children, pageProps }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ClerkProvider {...pageProps}>
          <Header></Header>
          {children}
          <Footer></Footer>
          <ChatbaseScript></ChatbaseScript>
        </ClerkProvider>
      </body>
    </html>
  );
}
