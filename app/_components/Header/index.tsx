'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import styles from './index.module.scss';
import Menu from '../Menu';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const AutoPlayVideo = dynamic(() => import('../AutoPlayVideo'), {
  ssr: false,
  loading: () => <div className={styles.logoPlaceholder} />
});

export default function Header() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className={`${styles.header} bg-white`}>
      <div className={styles.headerInner}>
        <Link href="/" className={styles.logoAnime} aria-label='オフィス露木のロゴアニメーション'>
          {mounted ? (
            <AutoPlayVideo
              videoSrcWebM="/images/logo.webm"
              videoSrcMp4="/images/logo.mp4"
              imgSrc="/logo.webp"
              alt="オフィス露木"
              width={640}
              height={360}
            />
          ) : (
            <div className={styles.logoPlaceholder}>
              <Image 
                src="/logo.webp" 
                alt="オフィス露木" 
                width={640} 
                height={360} 
                priority 
              />
            </div>
          )}
        </Link>
        <Menu />
      </div>
    </header>
  );
}
