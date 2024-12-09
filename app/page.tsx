import Image from "next/image";
import styles from "./page.module.scss";

import { getWorksList } from '@/app/_libs/microcms'
import { TOP_WORKS_LIMIT } from '@/app/_constants'
import WorksList from '@/app/_components/WorksList'
import Link from "next/link";
import ButtonNeumorfism from "./_components/NeumorficButton";
import HeaderCard from "@/app/_components/HeaderCard";
import CEOProfile from "./_components/CEOprofile";
import BusinessContent from "./_components/BusinessContent";

export const revalidate = 60

export default async function Home() {

  const data = await getWorksList({
    limit: TOP_WORKS_LIMIT,
  })

  return (
    <main className={`${styles.main} flex flex-col items-center`}>
      <section className={`${styles.heroSection} ${styles.banner} ${styles['banner-section']} max-w-4xl`}>
        <div className={`${styles.container} ${styles['banner-column']}`}>
          {/* <Image
            className={styles['banner-image']}
            src="/images/placeholder.webp"
            alt="banner"
            width={500}
            height={500}

          /> */}
          <section className={styles['banner-image']}>
            <HeaderCard />
          </section>
          <div className={styles['banner-inner']}>
            <h1 className={styles['heading-xl']}>
              オフィス露木
            </h1>
            <p className={styles.paragraph}>
            建築に関するあらゆることをデジタルツールで解決する。
            <small>Solving everything related to architecture using digital tools.</small>
            </p>
            <ButtonNeumorfism label="詳しくみる" url="/about" />
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <CEOProfile/>
      </div>
    </section>
    <section className="bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <BusinessContent/>
      </div>
    </section>
    </main>
  );
}
