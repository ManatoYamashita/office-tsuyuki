"use client";

import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.scss';
import Menu from '../Menu';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link href="/" className={styles.logoAnime}>
        <video title='オフィス露木' muted playsInline autoPlay poster="/logo.webp">
          {/* <source src="/images/logo.mov" type="video/quicktime" /> */}
          {/* Safariでは動画は再生されません */}
          <source src='/images/logo.webm' type='video/webm' />
        </video>
        </Link>
        <Menu />
      </div>
    </header>
  );
}
