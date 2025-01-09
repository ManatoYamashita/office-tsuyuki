import styles from "./page.module.scss";
import Firstview from "./_components/Firstview";
import { Suspense } from 'react';
import TopBlogsSection from "./_components/TopBlogsSection";
import CEOProfile from "./_components/CEOprofile";
import BusinessContent from "./_components/BusinessContent";
import Book from "./_components/Book";
import CompanyInfo from "./_components/CompanyInfo";
import HightLight from "./_components/Highlight";

const HightLightWorks = [
  {
    imageUrl: "/images/matterport.webp",
    avatarUrl: "/images/mp.webp",
    name: "建築DX - Matterport",
    subName: "2025/01/02",
    title: "Matterport 不動産3Dキャプチャサービス",
    description: "Matterportというシステムと特殊なカメラを用いて、不動産の3Dキャプチャを作成できます。事例はこちらをご覧ください。",
    href: "/works/matterport"
  },
  {
    imageUrl: "/images/fm-consul.webp",
    avatarUrl: "/favicon.ico",
    name: "建築研究開発コンサル - 除去法",
    subName: "note.com",
    title: "除去法コンサルティング",
    description: "建物のリノベーションの際に、除去法に関するコンサルティングを行い税金による損益を減らします。",
    href: "https://note.com/tcu_alumni/m/m729119dab099"
  }
];

export default async function Home() {

  return (
    <main className={`${styles.main} relative flex flex-col items-center gap-12`}>
      
      <Firstview />

      <Suspense fallback={<div>Loading...</div>}>
        <TopBlogsSection />
      </Suspense>

      <section className="relative h-full max-w-4xl mx-auto bg-background py-12 sm:pl-12">
        <div className="flex items-center justify-center">
          <CompanyInfo
            name="株式会社オフィス露木"
            logo="/images/tsuyuki-hiromi.webp"
            foundedYear={2010}
            employees={250}
            website="https://www.pom.jp/o-tsuyuki"
            ceo="露木博視"
            address="〒160-0023 東京都新宿区西新宿3-7-26 ハイネスロワイヤル-501号室"
          />
        </div>
      </section>

      <section className="bg-background py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <BusinessContent title='お仕事領域' subtitle='興味あることはなんでも徹底的に' />
        </div>
      </section>

      <section className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <CEOProfile/>
        </div>
      </section>

      <section className="space-y-6 container mx-auto px-4 py-12 md:py-24">
        <div className="space-y-6 container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">事例紹介</h1>
        <h2 className="text-2xl md:text-3xl text-muted-foreground">現在は、『除去法コンサルティング』と、『Matterport 3Dスキャン』に対して特に力を入れております。</h2>
        </div>
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="grid lg:grid-cols-2 gap-6">
            {HightLightWorks.map((post, index) => (
              <HightLight
                key={index}
                {...post}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto">
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
