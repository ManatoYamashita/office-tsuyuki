"use client";

import Link from 'next/link';
import styles from './index.module.scss';
import Menu from '../Menu';
import AutoPlayVideo from '../AutoPlayVideo';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link href="/" className={styles.logoAnime}>
        <AutoPlayVideo
          videoSrcWebM="/images/logo.webm"
          videoSrcMp4="/images/logo.mp4"
          imgSrc="/logo.webp"
          alt="オフィス露木"
          width={640}
          height={360}
        />
        </Link>
        <Menu />
      </div>
    </header>
  );
}
