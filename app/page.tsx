import Image from "next/image";
import styles from "./page.module.scss";

import { getWorksList } from '@/app/_libs/microcms'
import { TOP_WORKS_LIMIT } from '@/app/_constants'
import WorksList from '@/app/_components/WorksList'
import Link from "next/link";

export const revalidate = 60

export default async function Home() {

  const data = await getWorksList({
    limit: TOP_WORKS_LIMIT,
  })

  return (
    <main className={styles.main}>
      <section className={`${styles.section} ${styles.banner} ${styles['banner-section']}`}>
        <div className={`${styles.container} ${styles['banner-column']}`}>
          <Image
            className={styles['banner-image']}
            src="/images/placeholder.webp"
            alt="banner"
            width={500}
            height={500}

          />
          <div className={styles['banner-inner']}>
            <h1 className={styles['heading-xl']}>
              Office <br />
              TSUYUKI
            </h1>
            <p className={styles.paragraph}>
            建築に関するあらゆることをデジタルツールで解決する。
            <small>Solving everything related to architecture using digital tools.</small>
            </p>
            <button type="button" className={`${styles.btn} ${styles['btn-darken']} ${styles['btn-inline']}`}>
              詳しくみる<i className="bx bx-right-arrow-alt"></i>
            </button>
          </div>
          <div className={styles['banner-links']}>
            <Link className={styles.links} href="#" title="">
              <i className="bx bxl-facebook"></i>
            </Link>
            <Link className={styles.links} href="#" title="">
              <i className="bx bxl-instagram"></i>
            </Link>
            <Link className={styles.links} href="#" title="">
              <i className="bx bxl-twitter"></i>
            </Link>
            <Link className={styles.links} href="#" title="">
              <i className="bx bxl-youtube"></i>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
