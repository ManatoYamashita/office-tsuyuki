import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getBlogsDetail, getAllBlogsList } from '@/app/_libs/microcms';
import { getDraftKey } from '@/app/_libs/draft';
import Article from '@/app/_components/Article';
import { ResolvingMetadata } from 'next';

// パラメータの型定義
type Params = {
  slug: string;
};

type SearchParams = {
  dk?: string;
};

// 静的に生成し、60 秒ごとに再生成する（下書きのプレビューは Draft Mode のときだけ動的に描く）
export const revalidate = 60;

// 公開中の記事はビルド時にすべて生成する（新しい記事は初回アクセス時に生成される）
export async function generateStaticParams() {
  const contents = await getAllBlogsList();
  return contents.map((content) => ({ slug: content.id }));
}

// ページコンポーネントのProps型
type Props = {
  params: Promise<Params>;
  searchParams?: Promise<SearchParams>;
};

export async function generateMetadata(
  props: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const params = await props.params;
  const draftKey = await getDraftKey(props.searchParams);
  
  const data = await getBlogsDetail(params.slug, {
    draftKey,
  });

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: [data?.thumbnail?.url ?? ''],
    },
  };
}

export default async function Page(props: Props) {
  const params = await props.params;
  const draftKey = await getDraftKey(props.searchParams);

  const data = await getBlogsDetail(params.slug, {
    draftKey,
  }).catch(notFound);

  return (
    <>
      <Article data={data} contentType='blogs' />
    </>
  );
}
