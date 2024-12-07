import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.scss';
import Menu from '../Menu';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link href="/" className={styles.logoLink}>
          {/* <Image
            src="/logo.svg"
            alt="SIMPLE"
            className={styles.logo}
            width={348}
            height={133}
            priority
          /> */}
          <h1 className={styles.logoText}>Office-TSUYUKI</h1>
        </Link>
        <Menu />
      </div>
    </header>
  );
}
