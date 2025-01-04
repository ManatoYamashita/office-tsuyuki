import { Suspense } from 'react';
import { getWorksList } from '@/app/_libs/microcms';
import WorksList from '@/app/_components/WorksList';
import Pagination from '@/app/_components/Pagination';
import SearchField from '@/app/_components/SearchField';
import { WORKS_LIST_LIMIT } from '@/app/_constants';
import BusinessContent from '../_components/BusinessContent';
import HightLight from '../_components/Highlight';
import Hero from '../_components/Hero';

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
    description: "校友会で活躍する役員や卒業生のインタビューを掲載しています。",
    href: "https://note.com/tcu_alumni/m/m729119dab099"
  }
];

export default async function Page() {
  const { contents: works, totalCount } = await getWorksList({
    limit: WORKS_LIST_LIMIT,
  });

  return (
    <>
      <Hero title="Works" sub="オフィス露木の幅広い仕事内容についてご紹介します。" imageUrl="/images/architect.webp" />
      <section className='max-w-4xl mx-auto my-12'>
        <BusinessContent title='事例・実績' subtitle='/Works' />
        <div className="container mx-auto px-4 py-12">

          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">事例・実績</h1>
            <p className="text-gray-600">これまでに手がけた主な事例をご紹介します。</p>
          </div>
          <SearchField />
          <Suspense fallback={<div>Loading...</div>}>
            <WorksList works={works} />
          </Suspense>
        </div>
        <Pagination totalCount={totalCount} />
        <section className="space-y-3 container mx-auto px-4 py-12 md:py-24">
          <div className="space-y-3 container mx-auto px-4 max-w-4xl">
            <h1 className="text-3xl md:text-3xl font-bold tracking-tighter">事例紹介</h1>
            <h2 className="text-2xl md:text-2xl text-muted-foreground">現在は、『除去法コンサルティング』と、『Matterport 3Dスキャン』に対して特に力を入れております。</h2>
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
      </section>
    </>
  );
}
