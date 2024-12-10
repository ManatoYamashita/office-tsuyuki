import localFont from "next/font/local";
import './globals.css';

import Header from './_components/Header';
import Footer from './_components/Footer';
import Sidebar from "./_components/Sidebar";
import { NeumorphicSidebar } from "./_components/nuemorphicSidebar";
import { Metadata, generateCommonMetadata } from '@/app/_libs/metadata';

export function generateMetadata(): Metadata {
  return generateCommonMetadata({
    title: 'オフィス露木 - officeTSUYUKI',
    description: '株式会社オフィス露木は建築設計、ディスプレイデザイン、建築における工法、部品・構成材料の研究などを行う会社。建築設計では戸建住宅の設計・施工監理を行います。',
    openGraph: {
      title: 'お問い合わせ',
      description: 'お問い合わせページの説明。',
      url: 'https://example.com/contact',
      images: [
        {
          url: 'https://example.com/contact-og.jpg',
          width: 800,
          height: 600,
        },
      ],
    },
  });
}
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <section className="sidebarContainer">
          {/* <Sidebar /> */}
          <NeumorphicSidebar />
        </section>
        {children}
        <Footer />
      </body>
    </html>
  );
}
