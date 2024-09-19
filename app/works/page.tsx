import { getWorksList } from '@/app/_libs/microcms';
import WorksList from '@/app/_components/WorksList';
import Pagination from '@/app/_components/Pagination';
import SearchField from '@/app/_components/SearchField';
import { WORKS_LIST_LIMIT } from '@/app/_constants';

export default async function Page() {
  const { contents: works, totalCount } = await getWorksList({
    limit: WORKS_LIST_LIMIT,
  });

  return (
    <>
      <SearchField />
      <WorksList works={works} />
      <Pagination totalCount={totalCount} />
    </>
  );
}
