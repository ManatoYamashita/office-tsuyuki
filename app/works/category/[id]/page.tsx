import { getCategoryDetail, getWorksList } from '@/app/_libs/microcms';
import { notFound } from 'next/navigation';
import WorksList from '@/app/_components/WorksList';
import Pagination from '@/app/_components/Pagination';
import Category from '@/app/_components/Category';
import { WORKS_LIST_LIMIT } from '@/app/_constants';

type Props = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Props) {
  const category = await getCategoryDetail(params.id).catch(notFound);

  const { contents: works, totalCount } = await getWorksList({
    limit: WORKS_LIST_LIMIT,
    filters: `category[equals]${category.id}`,
  });

  return (
    <>
      <p>
        <Category category={category} /> の一覧
      </p>
      <WorksList works={works} />
      <Pagination
        totalCount={totalCount}
        basePath={`/works/category/${category.id}`}
      />
    </>
  );
}
