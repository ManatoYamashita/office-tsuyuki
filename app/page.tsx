import styles from "./page.module.scss";

import { getWorksList } from '@/app/_libs/microcms'
import { TOP_WORKS_LIMIT } from '@/app/_constants'
import WorksList from '@/app/_components/WorksList'
import Link from "next/link";
import Firstview from "./_components/Firstview";
import CEOProfile from "./_components/CEOprofile";
import BusinessContent from "./_components/BusinessContent";
import Book from "./_components/Book";

export const revalidate = 60

export default async function Home() {

  const data = await getWorksList({
    limit: TOP_WORKS_LIMIT,
  })

  return (
    <main className={`${styles.main} flex flex-col items-center`}>
      <Firstview/>
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
    <section className="bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <section className="space-y-6 container mx-auto px-4 py-12 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            関連書籍
        </h1>
        <h2 className="text-2xl md:text-3xl text-muted-foreground">
            弊社代表取締役が執筆に携わった書籍です。
        </h2>
        <div className="flex-1 w-full relative">
        <Book
          imageUrl="/images/book-1.webp"
          title="建築士・会計士・税理士の災害FAQ"
          author="大沢幸雄, 小笠原直, 露木博視, 天野俊裕, 土屋清人"
          description="建築士として共著しています。"
          price={1980}
          publisher="中央経済社"
          isbn="978-4-502-04540-0"
          releaseDate="2011-07-26"
          link="https://www.google.com/search?q=%E5%BB%BA%E7%AF%89%E5%A3%AB%E3%83%BB%E4%BC%9A%E8%A8%88%E5%A3%AB%E3%83%BB%E7%A8%8E%E7%90%86%E5%A3%AB%E3%81%AE%E7%81%BD%E5%AE%B3FAQ&sca_esv=61ba496ce5dbe72c&sxsrf=ADLYWIJDotjCf0jmld1SqxhW87PLWkclYA:1733990781920&ei=fZlaZ__oN-6-vr0PopXVyAw&ved=0ahUKEwi_m-aE46GKAxVun68BHaJKFckQ4dUDCBA&uact=5&oq=%E5%BB%BA%E7%AF%89%E5%A3%AB%E3%83%BB%E4%BC%9A%E8%A8%88%E5%A3%AB%E3%83%BB%E7%A8%8E%E7%90%86%E5%A3%AB%E3%81%AE%E7%81%BD%E5%AE%B3FAQ&gs_lp=Egxnd3Mtd2l6LXNlcnAiLeW7uuevieWjq-ODu-S8muioiOWjq-ODu-eojueQhuWjq-OBrueBveWus0ZBUTIEECMYJzIFEAAY7wUyCBAAGIAEGKIEMggQABiABBiiBDIFEAAY7wUyBRAAGO8FSIAOUABYAHAAeACQAQCYAdQCoAHUAqoBAzMtMbgBA8gBAPgBAvgBAZgCAaAC2wKYAwCSBwMzLTGgB8gF&sclient=gws-wiz-serp"
        />
        </div>
        <div className="flex-1 w-full relative">
        <Book
          imageUrl="/images/book-2.webp"
          title="IFRS対応 建物の耐用年数ハンドブック"
          author="公益社団法人ロングライフビル推進協会"
          description="編集執筆委員として執筆に携わっています。"
          price={3520}
          publisher="中央経済社"
          isbn="978-4-502-45390-8"
          releaseDate="2012-04-06"
          link="https://www.google.com/search?q=%EF%BC%A9%EF%BC%A6%EF%BC%B2%EF%BC%B3%E5%AF%BE%E5%BF%9C+%E5%BB%BA%E7%89%A9%E3%81%AE%E8%80%90%E7%94%A8%E5%B9%B4%E6%95%B0+%E3%83%8F%E3%83%B3%E3%83%89%E3%83%96%E3%83%83%E3%82%AF&sourceid=chrome&ie=UTF-8"
        />
        </div>
        </section>
      </div>
    </section>
    </main>
  );
}
