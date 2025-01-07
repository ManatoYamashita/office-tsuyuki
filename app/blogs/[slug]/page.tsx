import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getBlogsDetail } from '@/app/_libs/microcms';
import Article from '@/app/_components/Article';
import { ResolvingMetadata } from 'next';

// パラメータの型定義
type Params = {
  slug: string;
};

type SearchParams = {
  dk?: string;
};

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
  const searchParams = props.searchParams ? await props.searchParams : {};
  
  const data = await getBlogsDetail(params.slug, {
    draftKey: searchParams.dk,
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
  const searchParams = props.searchParams ? await props.searchParams : {};

  const data = await getBlogsDetail(params.slug, {
    draftKey: searchParams.dk,
  }).catch(notFound);

  return (
    <>
      <Article data={data} contentType='blogs' />
    </>
  );
}
