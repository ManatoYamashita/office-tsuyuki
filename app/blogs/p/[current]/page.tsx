import { notFound } from 'next/navigation';
import { getBlogsList } from '@/app/_libs/microcms';
import BlogsList from '@/app/_components/BlogsList';
import Pagination from '@/app/_components/Pagination';
import { BLOGS_LIST_LIMIT } from '@/app/_constants';

type Props = {
  params: {
    current: string;
  };
};

export default async function Page({ params }: Props) {
  const current = parseInt(params.current as string, 10);

  if (Number.isNaN(current) || current < 1) {
    notFound();
  }

  const { contents: Blogs, totalCount } = await getBlogsList({
    limit: BLOGS_LIST_LIMIT,
    offset: BLOGS_LIST_LIMIT * (current - 1),
  });

  if (Blogs.length === 0) {
    notFound();
  }

  return (
    <>
      <BlogsList blogs={Blogs} />
      <Pagination totalCount={totalCount} current={current} />
    </>
  );
}
