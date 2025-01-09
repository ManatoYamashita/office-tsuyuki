// BlogsList.tsx
'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Date from '../Date';
import { Blogs } from '@/app/_libs/microcms';
import styles from './index.module.scss';

type Props = {
  blogs: Blogs[];
};

export default function BlogsList({ blogs }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (containerRef.current) {
      const items = containerRef.current.querySelectorAll(`.${styles.blogItem}`);
      
      gsap.fromTo(items, 
        {
          opacity: 0,
          y: 20
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom-=100',
            toggleActions: 'play none none none'
          }
        }
      );
    }
  }, []);

  if (blogs.length === 0) {
    return (
      <div className="flex items-center justify-center h-40">
        <p className="text-gray-500 font-medium">記事が見つかりませんでした</p>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto"> {/* max-w-3xlとpx-4を削除 */}
        <div ref={containerRef} className="space-y-4"> {/* space-yを少し広げる */}
            {blogs.map((article) => (
                <div
                    key={article.id}
                    className={`${styles.blogItem} bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300`}
                >
                    <Link href={`/blogs/${article.id}`} aria-label={article.title}>
                        <div className="flex items-center gap-3 p-3 sm:p-4">
                            <div className="relative h-16 sm:h-20 w-24 sm:w-32 flex-shrink-0 overflow-hidden rounded-md">
                                <Image
                                    src={article.thumbnail?.url || "/placeholder.webp"}
                                    alt={article.title}
                                    className="object-cover"
                                    fill
                                    sizes="(max-width: 640px) 96px, 128px"
                                    quality={70}
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex flex-col gap-2">
                                    <h2 className="text-base sm:text-lg font-semibold text-gray-900 line-clamp-2 sm:line-clamp-1">
                                        {article.title}
                                    </h2>
                                    <div className="flex items-center gap-1 text-xs text-gray-500">
                                        <Date date={article.publishedAt ?? article.createdAt} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    </div>
  );
}
