// lib/metadata.ts
import { Metadata } from 'next'
export interface OpenGraphImage {
    url: string;
    width?: number;
    height?: number;
    alt?: string;
}

export interface OpenGraph {
    title: string;
    description: string;
    url: string;
    images: OpenGraphImage[];
    siteName?: string;
    locale?: string;
    type?: string;
}

export interface JsonLD {
    "@context": string;
    "@type": string;
    name?: string;
    description?: string;
    url?: string;
    image?: string;
    author?: string;
    publisher?: string;
    datePublished?: string;
    dateModified?: string;
    headline?: string;
    articleBody?: string;
    keywords?: string[];
    inLanguage?: string;
    license?: string;
    mainEntityOfPage?: string;
    dateCreated?: string;
}

export interface Metadatas extends Metadata {
    metadataBase?: URL; 
    title: string;
    description: string;
    icons: {
        icon: string,
        apple: string,
      }
    openGraph?: OpenGraph;
    twitter?: {
        card?: string;
        title?: string;
        description?: string;
        images?: string[];
    };
    jsonLD?: JsonLD;
    author?: string;
    keywords?: string[];
    robots?: string;
    canonicalUrl?: string;
    publisher?: string;
    modifiedTime?: string;
    publishedTime?: string;
    section?: string;
    tags?: string[];
}

export function generateCommonMetadata(metadata: Metadatas): Metadatas {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    
    return {
        ...metadata,
        metadataBase: new URL(baseUrl || 'https://pomjp-tsuyuki.vercel.app'),
    };
}
