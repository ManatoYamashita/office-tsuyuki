'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import type { ArticleContent, Category } from '@/app/_libs/microcms';
import Date from '../Date';
import SecoundryBtn from '@/app/_components/SecoundaryBtn';
import { cn } from '@/app/_libs/utils';

type Props = {
  data: ArticleContent;
  contentType: 'works' | 'blogs';
};

const proseStyles = {
  headings: `
    [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:mt-12 [&>h1]:mb-6
    [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-10 [&>h2]:mb-4
    [&>h3]:text-xl [&>h3]:font-bold [&>h3]:mt-8 [&>h3]:mb-4
    [&>h4]:text-lg [&>h4]:font-bold [&>h4]:mt-6 [&>h4]:mb-3
  `,
  content: `
    [&>p]:text-gray-600 [&>p]:leading-relaxed [&>p]:my-6
    [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:my-6
    [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:my-6
    [&>li]:text-gray-600 [&>li]:mb-2
    [&>figure>img]:rounded-lg [&>figure>img]:my-12 [&>figure>img]:mx-auto [&>figure>img]:block [&>figure>img]:max-w-full [&>figure>img]:w-full [&>figure>img]:max-h-[480px] [&>figure>img]:object-contain
    [&>blockquote]:border-l-4 [&>blockquote]:border-gray-300 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:my-6
    [&>pre]:bg-gray-100 [&>pre]:p-4 [&>pre]:rounded-lg [&>pre]:my-6
    [&>code]:bg-gray-100 [&>code]:px-1 [&>code]:rounded
  `,
  links: `
    [&>a]:text-primary [&>a]:no-underline hover:[&>a]:underline
  `,
};

const CategoryLabel = ({ category }: { category: Category }) => (
  <span className="inline-block px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 
                   rounded-full transition-all duration-300 hover:bg-gray-200">
    {category.name}
  </span>
);

export default function Article({ data, contentType }: Props) {
  const articleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.fromTo('.article-title',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      )
      .fromTo('.article-description',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.4'
      )
      .fromTo('.article-meta',
        { opacity: 0 },
        { opacity: 1, duration: 0.4 },
        '-=0.2'
      )
      .fromTo('.article-thumbnail',
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out' },
        '-=0.2'
      )
      .fromTo('.article-content',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.4'
      );
    }, articleRef);

    return () => ctx.revert();
  }, []);

  return (
    <main 
      ref={articleRef}
      className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12"
    >
      <article className="bg-white rounded-2xl shadow-sm overflow-hidden">
        {/* ヒーローセクション */}
        <div className="px-6 pt-8 pb-6 sm:px-8 sm:pt-10">
          <h1 className="article-title text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {data.title}
          </h1>
          <p className="article-description text-lg text-gray-600 mb-6">
            {data.description}
          </p>
          
          {/* メタ情報 */}
          <div className="article-meta flex flex-wrap items-center gap-4 mb-8">
            {'category' in data && data.category && data.category.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {data.category.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/${contentType}/category/${cat.id}`}
                    className="hover:transform hover:scale-105 transition-transform"
                    aria-label='カテゴリー'
                  >
                    <CategoryLabel category={cat} />
                  </Link>
                ))}
              </div>
            )}
            <div className="text-gray-500">
              <Date date={data.publishedAt ?? data.createdAt} />
            </div>
          </div>
        </div>

        {/* サムネイル画像 */}
        {data.thumbnail && (
          <div className="article-thumbnail relative w-full aspect-video mb-12 overflow-hidden">
            <Image
              src={data.thumbnail.url}
              alt={data.title}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              priority
            />
          </div>
        )}

        {/* 本文コンテンツ */}
        <div className="px-6 sm:px-8 pb-8">
          <div
            className={cn(
              "article-content",
              proseStyles.headings,
              proseStyles.content,
              proseStyles.links
            )}
            dangerouslySetInnerHTML={{
              __html: data.content,
            }}
          />
        </div>
      </article>

      {/* 戻るボタン */}
      <div className="mt-8 text-center">
        <SecoundryBtn 
          label="記事一覧に戻る" 
          url={`/${contentType}`} 
        />
      </div>
    </main>
  );
}
