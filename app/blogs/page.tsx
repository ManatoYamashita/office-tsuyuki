import { getBlogsList } from '@/app/_libs/microcms';
import BlogsList from '@/app/_components/BlogsList';
import Pagination from '@/app/_components/Pagination';
import { BLOGS_LIST_LIMIT } from '@/app/_constants';

export default async function Page() {
  const { contents: Blogs, totalCount } = await getBlogsList({
    limit: BLOGS_LIST_LIMIT,
  });

  return (
    <>
      <BlogsList
        blogs={Blogs}
        // 実測: sm 未満 1 列、lg 未満 2 列、lg 以上 3 列で 258px
        sizes="(max-width: 639px) calc(100vw - 100px), (max-width: 1023px) calc(50vw - 62px), 258px"
      />
      <Pagination totalCount={totalCount} />
    </>
  );
}
