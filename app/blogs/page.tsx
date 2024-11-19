import { getBlogsList } from '@/app/_libs/microcms';
import BlogsList from '@/app/_components/BlogsList';
import Pagination from '@/app/_components/Pagination';
import SearchField from '@/app/_components/SearchField';
import { BLOGS_LIST_LIMIT } from '@/app/_constants';

export default async function Page() {
  const { contents: Blogs, totalCount } = await getBlogsList({
    limit: BLOGS_LIST_LIMIT,
  });

  return (
    <>
      <SearchField />
      <BlogsList blogs={Blogs} />
      <Pagination totalCount={totalCount} />
    </>
  );
}
