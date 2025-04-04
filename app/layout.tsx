import './globals.css';
import { StrictMode } from 'react';
import { Metadatas, generateCommonMetadata } from '@/app/_libs/metadata';
import PageTransition from '@/app/components/PageTransition';
import dynamic from 'next/dynamic';

const NeumorphicSidebar = dynamic(() => import('@/app/_components/NeumorphicSidebar'));
const Header = dynamic(() => import('@/app/_components/Header'), { loading: () => <div className="h-40" /> });
const Footer = dynamic(() => import('@/app/_components/Footer'), { loading: () => <div className="h-40" />});

export function generateMetadata(): Metadatas {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://pomjp-beta.vercel.app';

  const jsonLD = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: "株式会社オフィス露木",
    alternateName: "officeTSUYUKI",
    description: "露木博視の『株式会社オフィス露木』は新宿区に位置し、建築DX, 建築設計デザイン, 建築研究開発コンサルなどを行う会社です。",
    url: baseUrl,
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/logo.webp`,
      width: 512,
      height: 512
    },
    image: `${baseUrl}/ogp.webp`,
    address: {
      "@type": "PostalAddress",
      addressCountry: "JP",
      addressRegion: "東京都",
      addressLocality: "新宿区",
      postalCode: "160-0022"
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "info@officetsuyuki.com"
    },
    founder: {
      "@type": "Person",
      name: "露木博視",
      jobTitle: "代表取締役",
      sameAs: ["https://www.linkedin.com/in/hiroshi-tsuyuki/"]
    },
    sameAs: [
      "https://twitter.com/officeTSUYUKI",
      "https://www.facebook.com/officeTSUYUKI"
    ],
    keywords: ["建築DX", "建築設計デザイン", "建築研究開発コンサル"],
    offers: {
      "@type": "Offer",
      serviceType: ["建築DX", "建築設計デザイン", "建築研究開発コンサル"]
    }
  };

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
          url: `${baseUrl}/ogp.webp`,
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
      images: [`${baseUrl}/ogp.webp`],
    },
    other: {
      'format-detection': 'telephone=no',
    },
    jsonLD,
    author: '露木博視',
    keywords: ['建築DX', '建築設計デザイン', '建築研究開発コンサル'],
    robots: 'index, follow',
    canonicalUrl: baseUrl,
    publisher: '株式会社オフィス露木',
    modifiedTime: '2025-03-31T00:00:00+09:00',
    publishedTime: '2024-01-01T00:00:00+09:00',
    section: 'オフィス露木',
    tags: ['建築DX', '建築設計デザイン', '建築研究開発コンサル'],
  });
}

export const revalidate = 360;

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
              <aside className="sidebarContainer" id="sidebar">
                <NeumorphicSidebar />
              </aside>
              <main className="flex-1 transition-all duration-300" id="main-content" role="main">
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
