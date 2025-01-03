import { Suspense } from 'react';
import { getWorksList } from '@/app/_libs/microcms';
import WorksList from '@/app/_components/WorksList';
import Pagination from '@/app/_components/Pagination';
import SearchField from '@/app/_components/SearchField';
import { WORKS_LIST_LIMIT } from '@/app/_constants';
import BusinessContent from '../_components/BusinessContent';

export default async function Page() {
  const { contents: works, totalCount } = await getWorksList({
    limit: WORKS_LIST_LIMIT,
  });

  return (
    <>
      <section className='max-w-4xl mx-auto mb-8'>
        <BusinessContent title='事例・実績' subtitle='/Works' />
      </section>
      <SearchField />
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">事例・実績</h1>
          <p className="text-gray-600">これまでに手がけた主な事例をご紹介します。</p>
        </div>
        
        <Suspense fallback={<div>Loading...</div>}>
          <WorksList works={works} />
        </Suspense>
      </div>
      <Pagination totalCount={totalCount} />
    </>
  );
}
