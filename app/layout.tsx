import type { Metadata } from "next";
import localFont from "next/font/local";
import './globals.css';

import Header from './_components/Header';
import Footer from './_components/Footer';

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

export const metadata: Metadata = {
  // metadataBase: new URL('url'),
  // title: {
  //   template: '%s | subtitle',
  //   default: 'default title',
  // },
  // description:
  //   'description',
  // openGraph: {
  //   title: 'title',
  //   description:
  //     'description',
  //   images: ['/ogp.png'],
  // },
  // alternates: {
  //   canonical: 'url',
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
