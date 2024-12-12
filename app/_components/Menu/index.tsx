'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import cx from 'classnames';
import styles from './index.module.scss';

export default function Menu() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const open = () => setOpen(true);
  const close = () => setOpen(false);

  return (
    <div>
      <nav className={cx(styles.nav, isOpen && styles.open)}>
        <ul className={styles.items}>
          <li>
            <Link href="/works">事例・実績</Link>
          </li>
          <li>
            <Link href="/about">オフィス露木について</Link>
          </li>
          <li>
            <Link href="http://www.pom.jp/hotbiz/hotbiz.cgi">社内連絡</Link>
          </li>
        </ul>
        <button type='button' className={cx(styles.button, styles.close)} onClick={close} aria-label="Close">
          {/* <Image
            src="/close.svg"
            alt="閉じる"
            width={24}
            height={24}
            priority
          /> */}
        </button>
      </nav>
      <button type='button' className={styles.button} onClick={open} aria-label="Open">
        {/* <Image src="/menu.svg" alt="メニュー" width={24} height={24} /> */}
      </button>
    </div>
  );
}
