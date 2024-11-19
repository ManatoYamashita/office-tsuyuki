import { getBlogsList } from '@/app/_libs/microcms';
import { BLOGS_LIST_LIMIT } from '@/app/_constants';
import BlogsList from '@/app/_components/BlogsList';
import SearchField from '@/app/_components/SearchField';

type Props = {
  searchParams: {
    q?: string;
  };
};

export default async function Page({ searchParams }: Props) {
  const { contents: Blogs } = await getBlogsList({
    limit: BLOGS_LIST_LIMIT,
    q: searchParams.q,
  });

  return (
    <>
      <SearchField />
      <BlogsList blogs={Blogs} />
    </>
  );
}
