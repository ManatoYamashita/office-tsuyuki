import { notFound } from 'next/navigation';
import { getBlogsList } from '@/app/_libs/microcms';
import BlogsList from '@/app/_components/BlogsList';
import Pagination from '@/app/_components/Pagination';
import { BLOGS_LIST_LIMIT } from '@/app/_constants';

// 60 秒ごとに再生成する静的ページにする（以前は可変の経路のため毎回動的に描かれていた）
export const revalidate = 60;

// 事前には生成せず、初回アクセス時に生成してキャッシュする（generateStaticParams が無いと、Next.js 15 では revalidate を付けても動的に描かれる）
export async function generateStaticParams() {
  return [];
}

// パラメータの型定義
type Params = {
  current: string;
};

type Props = {
  params: Promise<Params>;
  searchParams?: Promise<Record<string, string>>;
};

export default async function Page({ params }: Props) {
  // パラメータを解決
  const resolvedParams = await params;
  const current = parseInt(resolvedParams.current, 10);

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
