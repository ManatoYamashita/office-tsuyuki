import './globals.css';
import { StrictMode } from 'react';
import Header from '@/app/_components/Header';
import Footer from '@/app/_components/Footer';
import NeumorphicSidebar from "@/app/_components/NeumorphicSidebar";
import { Metadatas, generateCommonMetadata } from '@/app/_libs/metadata';
import PageTransition from '@/app/components/PageTransition';

export function generateMetadata(): Metadatas {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://pomjp-beta.vercel.app';

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
      url: baseUrl,
      siteName: 'オフィス露木 | 露木博視',
      locale: 'ja_JP',
      type: 'website',
      images: [
        {
          url: `${baseUrl}/ogp.jpg`,
          width: 1200,
          height: 600,
          alt: 'オフィス露木'
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'オフィス露木',
      description: "露木博視の『株式会社オフィス露木』は新宿区に位置し、建築DX, 建築設計デザイン, 建築研究開発コンサルなどを行う会社です。",
      images: [`${baseUrl}/ogp.jpg`],
    },
    other: {
      'format-detection': 'telephone=no',
    },
    jsonLD: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "オフィス露木 | 露木博視",
      description: "露木博視の『株式会社オフィス露木』は新宿区に位置し、建築DX, 建築設計デザイン, 建築研究開発コンサルなどを行う会社です。",
      url: baseUrl,
      image: "/ogp.jpg",
      author: "露木博視, 山下マナト(東京都市大学)",
      publisher: "オフィス露木",
      datePublished: "2024-12-31",
      dateModified: "2024-12-31",
      headline: "オフィス露木",
      articleBody: "露木博視の『株式会社オフィス露木』は新宿区に位置し、建築DX, 建築設計デザイン, 建築研究開発コンサルなどを行う会社です。",
      keywords: ["建築DX", "建築設計デザイン", "建築研究開発コンサル"],
      inLanguage: "ja",
      license: baseUrl,
      mainEntityOfPage: baseUrl,
      dateCreated: "2024-12-31",
    },
    author: '露木博視, 山下マナト(東京都市大学)',
    keywords: ['建築DX', '建築設計デザイン', '建築研究開発コンサル'],
    robots: 'index, follow',
    canonicalUrl: baseUrl,
    publisher: 'オフィス露木',
    modifiedTime: '2024-12-31',
    publishedTime: '2024-12-31',
    section: 'オフィス露木',
    tags: ['建築DX', '建築設計デザイン', '建築研究開発コンサル'],
  });
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="max-w-[100vw] min-w-[330px] overflow-x-hidden">
        <StrictMode>
          <div className="flex min-h-screen flex-col">
            <Header />
            <div className="flex flex-1">
              <aside className="sidebarContainer">
                <NeumorphicSidebar />
              </aside>
              <main className="flex-1 transition-all duration-300">
                <PageTransition>
                  {children}
                </PageTransition>
              </main>
            </div>
            <Footer />
          </div>
        </StrictMode>
      </body>
    </html>
  );
}
