import { notFound } from 'next/navigation';
import { getWorksList } from '@/app/_libs/microcms';
import WorksList from '@/app/_components/WorksList';
import Pagination from '@/app/_components/Pagination';
import { WORKS_LIST_LIMIT } from '@/app/_constants';

// パラメータの型定義
type Params = {
  current: string;
};

// Promiseを含むProps型定義
type Props = {
  params: Promise<Params>;
  searchParams?: Promise<Record<string, string>>;
};

export default async function Page({ params }: Props) {
  // paramsを解決
  const resolvedParams = await params;
  const current = parseInt(resolvedParams.current, 10);

  if (Number.isNaN(current) || current < 1) {
    notFound();
  }

  const { contents: works, totalCount } = await getWorksList({
    limit: WORKS_LIST_LIMIT,
    offset: WORKS_LIST_LIMIT * (current - 1),
  });

  if (works.length === 0) {
    notFound();
  }

  return (
    <>
      <WorksList works={works} />
      <Pagination totalCount={totalCount} current={current} />
    </>
  );
}