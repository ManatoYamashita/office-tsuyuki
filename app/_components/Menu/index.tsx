'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Menu() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
      <nav className="py-4">
        <ul className={`flex flex-row items-center justify-center
          opacity-0 transform translate-y-4
          transition-all duration-700 ease-out
          ${isVisible ? 'opacity-100 translate-y-0' : ''}`}
        >
          <li className="relative group">
            <Link 
              href="/works" 
              className="inline-block px-6 text-gray-700 transition-colors duration-300
              hover:text-primary after:absolute after:bottom-0 after:left-0 
              after:h-0.5 after:w-0 after:bg-primary 
              after:transition-all after:duration-300 
              group-hover:after:w-full"
            >
              事例・実績
            </Link>
          </li>
          {/* 区切り線 */}
          <div className="block h-6 w-px bg-gray-300 mx-2" />
          <li className="relative group">
            <Link 
              href="/blogs" 
              className="inline-block px-6 text-gray-700 transition-colors duration-300
              hover:text-primary after:absolute after:bottom-0 after:left-0 
              after:h-0.5 after:w-0 after:bg-primary 
              after:transition-all after:duration-300 
              group-hover:after:w-full"
            >
              お知らせ・ブログ
            </Link>
          </li>
          {/* 区切り線 */}
          <div className="block h-6 w-px bg-gray-300 mx-2" />
          <li className="relative group">
            <Link 
              href="http://www.pom.jp/hotbiz/hotbiz.cgi" 
              className="inline-block px-6 text-gray-700 transition-colors duration-300
              hover:text-primary after:absolute after:bottom-0 after:left-0 
              after:h-0.5 after:w-0 after:bg-primary 
              after:transition-all after:duration-300 
              group-hover:after:w-full"
            >
              社内連絡
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
