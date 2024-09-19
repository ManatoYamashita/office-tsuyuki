import Image from "next/image";
import styles from "./page.module.css";

import { getWorksList } from '@/app/_libs/microcms'
import { TOP_WORKS_LIMIT } from '@/app/_constants'
import WorksList from '@/app/_components/WorksList'

export const revalidate = 60

export default async function Home() {

  const data = await getWorksList({
    limit: TOP_WORKS_LIMIT,
  })

  return (
    <div className={styles.page}>
      <h1>app/page.tsx</h1>
      <WorksList works={data.contents} />
    </div>
  );
}
