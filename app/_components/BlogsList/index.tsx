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

// ブログタイプのラベルコンポーネント
const BlogTypeLabel = ({ type }: { type: string }) => (
  <span className="inline-block bg-primary text-white text-xs px-2 py-1 rounded">
    {type}
  </span>
);

export default function BlogsList({ blogs }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (containerRef.current) {
      const items = containerRef.current.querySelectorAll(`.${styles.blogCard}`);
      
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

  // ブログタイプを安定した方法で生成する関数
  const getBlogType = (blogId: string) => {
    // ランダム値ではなく、blogIdを使って決定論的に値を生成
    return 'ブログ・お知らせ';
  };

  return (
    <div className="w-full mx-auto">
      <div 
        ref={containerRef}
        className={`${styles.blogGrid} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6`}
      >
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className={`${styles.blogCard} bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-all duration-300`}
          >
            <Link href={`/blogs/${blog.id}`} className="block h-full">
              <div className={`${styles.imageContainer} relative w-full pt-[60%]`}>
                <Image
                  src={blog.thumbnail?.url || "/placeholder.webp"}
                  alt={blog.title}
                  className="object-cover"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={75}
                />
                <div className={`${styles.blogTypeWrapper} absolute top-3 left-3`}>
                  <BlogTypeLabel type={getBlogType(blog.id)} />
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-900 line-clamp-2 mb-2">
                  {blog.title}
                </h2>
                <p className="text-sm text-gray-600 line-clamp-3 mb-3">
                  {blog.description}
                </p>
                <div className="flex items-center text-xs text-gray-500">
                  <Date date={blog.publishedAt ?? blog.createdAt} />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
