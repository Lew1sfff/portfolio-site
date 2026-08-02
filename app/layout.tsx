import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import ClientProviders from "@/components/ClientProviders";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "林弋普 - 视觉设计师作品集",
    template: "%s | 林弋普",
  },
  description:
    "林弋普个人作品集，展示商业摄影、产品拍摄、视觉设计等创意作品。",
  metadataBase: new URL("https://www.lew1s.online"),
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName: "Lew1s' works",
    title: "林弋普 - 视觉设计师作品集",
    description: "林弋普个人作品集，展示商业摄影、产品拍摄、视觉设计等创意作品。",
    images: [
      {
        url: "/images/projects/menswear/1000048998.jpg",
        width: 1200,
        height: 630,
        alt: "林弋普作品集",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${geistSans.variable} h-full antialiased`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light')document.documentElement.classList.add('light')}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-dark-900 text-text-primary font-sans">
        <ClientProviders>
          <SmoothScroll />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
