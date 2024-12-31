// BlogsList.tsx
'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Date from '../Date';
import { Blogs } from '@/app/_libs/microcms';
import styles from './index.module.scss';

type Props = {
  blogs: Blogs[];
};

export default function BlogsList({ blogs }: Props) {
  const [visibleBlogs, setVisibleBlogs] = useState(6);
  const containerRef = useRef<HTMLDivElement>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

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

    if (loadMoreRef.current) {
      gsap.to(loadMoreRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
      });
    }
  }, [visibleBlogs]);

  if (blogs.length === 0) {
    return (
      <div className="flex items-center justify-center h-40">
        <p className="text-gray-500 font-medium">記事が見つかりませんでした</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4">
      <div ref={containerRef} className="space-y-3">
        {blogs.slice(0, visibleBlogs).map((article) => (
          <div
            key={article.id}
            className={`${styles.blogItem} bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300`}
          >
            <Link href={`/blogs/${article.id}`}>
              <div className="flex items-center gap-3 p-2">
                <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                  <Image
                    src={article.thumbnail?.url || "/placeholder.webp"}
                    alt={article.title}
                    className="object-cover"
                    fill
                    sizes="64px"
                    quality={85}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h2 className="text-base font-medium text-gray-900 truncate pr-2">
                      {article.title}
                    </h2>
                    <div className="flex items-center gap-1 text-xs text-gray-500 flex-shrink-0">
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <Date date={article.publishedAt ?? article.createdAt} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      
      {visibleBlogs < blogs.length && (
        <div
          ref={loadMoreRef}
          className={`${styles.loadMore} text-center mt-6`}
        >
          <button
            onClick={() => setVisibleBlogs(prev => prev + 6)}
            className="inline-flex items-center px-4 py-1.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            もっと見る
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}