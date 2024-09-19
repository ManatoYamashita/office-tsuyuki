import { notFound } from 'next/navigation';
import { getCategoryDetail, getWorksList } from '@/app/_libs/microcms';
import WorksList from '@/app/_components/WorksList';
import Pagination from '@/app/_components/Pagination';
import { WORKS_LIST_LIMIT } from '@/app/_constants';

type Props = {
  params: {
    current: string;
    id: string;
  };
};

export default async function Page({ params }: Props) {
  const current = parseInt(params.current as string, 10);

  if (Number.isNaN(current) || current < 1) {
    notFound();
  }

  const category = await getCategoryDetail(params.id).catch(notFound);

  const { contents: works, totalCount } = await getWorksList({
    filters: `category[equals]${category.id}`,
    limit: WORKS_LIST_LIMIT,
    offset: WORKS_LIST_LIMIT * (current - 1),
  });

  if (works.length === 0) {
    notFound();
  }

  return (
    <>
      <WorksList works={works} />
      <Pagination
        totalCount={totalCount}
        current={current}
        basePath={`/works/category/${category.id}`}
      />
    </>
  );
}
