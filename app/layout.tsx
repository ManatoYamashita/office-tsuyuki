import localFont from "next/font/local";
import './globals.css';

import Header from '@/app/_components/Header';
import Footer from '@/app/_components/Footer';
import NeumorphicSidebar from "@/app/_components/NeumorphicSidebar";
import { Metadatas, generateCommonMetadata } from '@/app/_libs/metadata';

export function generateMetadata(): Metadatas {
  return generateCommonMetadata({
    title: 'オフィス露木 - officeTSUYUKI',
    description: '株式会社オフィス露木は新宿区に位置し、建築DX, 建築設計デザイン, 建築研究開発コンサルなどを行う会社です。',
    icons: {
      icon: '/favicon.ico',
      apple: '/apple-touch-icon.png',
    },
    openGraph: {
      title: 'オフィス露木',
      description: '株式会社オフィス露木は新宿区に位置し、建築DX, 建築設計デザイン, 建築研究開発コンサルなどを行う会社です。',
      url: 'https://pom.jp/o_tsuyuki',
      siteName: 'オフィス露木 | 露木博視',
      locale: 'ja_JP',
      type: 'website',
      images: [
        {
          url: '/ogp.jpg',
          width: 1200,
          height: 600,
          alt: 'オフィス露木'
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'オフィス露木',
      description: '株式会社オフィス露木は新宿区に位置し、建築DX, 建築設計デザイン, 建築研究開発コンサルなどを行う会社です。',
      images: ['/ogp.jpg'],
    },
    jsonLD: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "オフィス露木 | 露木博視",
      description: "株式会社オフィス露木は新宿区に位置し、建築DX, 建築設計デザイン, 建築研究開発コンサルなどを行う会社です。",
      url: "https://pom.jp/o_tsuyuki",
      image: "/ogp.jpg",
      author: "露木博視, 山下マナト(東京都市大学)",
      publisher: "オフィス露木",
      datePublished: "2024-12-31",
      dateModified: "2024-12-31",
      headline: "オフィス露木",
      articleBody: "株式会社オフィス露木は新宿区に位置し、建築DX, 建築設計デザイン, 建築研究開発コンサルなどを行う会社です。",
      keywords: ["建築DX", "建築設計デザイン", "建築研究開発コンサル"],
      inLanguage: "ja",
      license: "https://www.pom.jp/o_tsuyuki",
      mainEntityOfPage: "https://pom.jp/o_tsuyuki",
      dateCreated: "2024-12-31",
    },
    author: '露木博視, 山下マナト(東京都市大学)',
    keywords: ['建築DX', '建築設計デザイン', '建築研究開発コンサル'],
    robots: 'index, follow',
    canonicalUrl: 'https://pom.jp/o_tsuyuki',
    publisher: 'オフィス露木',
    modifiedTime: '2024-12-31',
    publishedTime: '2024-12-31',
    section: 'オフィス露木',
    tags: ['建築DX', '建築設計デザイン', '建築研究開発コンサル'],
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
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable} max-w-[100vw] min-w-[330px] overflow-x-hidden`}>
        <Header />
        <section className="sidebarContainer">
          <NeumorphicSidebar />
        </section>
        {children}
        <Footer />
      </body>
    </html>
  );
}
