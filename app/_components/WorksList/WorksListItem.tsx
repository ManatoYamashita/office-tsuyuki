"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { Works } from '@/app/_libs/microcms';
import Category from '../Category';
import Date from '../Date';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type Props = {
  work: Works;
  index: number;
};

export function WorksListItem({ work, index }: Props) {
  const itemRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (itemRef.current) {
      gsap.fromTo(
        itemRef.current,
        { 
          y: 30,
          opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: itemRef.current,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [index]);

  return (
    <li
      ref={itemRef}
      className="opacity-0 group"
    >
      <Link 
        href={`/works/${work.id}`} 
        className="block bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
      >
        <article className="overflow-hidden">
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] overflow-hidden">
            <Image
              src={work.thumbnail?.url ?? "/placeholder.webp"}
              alt={work.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={index < 2}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <div className="p-6">

            <Date date={work.publishedAt ?? work.createdAt} />

            <h3 className="text-xl font-medium leading-tight mb-2 group-hover:text-blue-600 transition-colors duration-300">
              {work.title}
            </h3>

            <p className="text-gray-600 line-clamp-2 text-sm">
              {work.description}
            </p>
            <div className="flex flex-wrap gap-3 my-3">
              {work.category.map((cat) => (
                <Category key={cat.id} category={cat} />
              ))}
            </div>
          </div>
        </article>
      </Link>
    </li>
  );
}
