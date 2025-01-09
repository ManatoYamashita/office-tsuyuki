import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getWorksList, getCategoryDetail } from '@/app/_libs/microcms';
import Link from 'next/link';
import WorksList from '@/app/_components/WorksList';
import styles from './page.module.scss';
import { ResolvingMetadata } from 'next';

// パラメータの型定義
type Params = {
  categoryId: string;
};

type Props = {
  params: Promise<Params>;
  searchParams?: Promise<Record<string, string>>;
};

export async function generateMetadata(
  props: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const params = await props.params;
  const category = await getCategoryDetail(params.categoryId);

  return {
    title: `${category.name}の記事一覧`,
    description: `${category.name}に関する記事の一覧です。`,
  };
}

export default async function Page({ params }: Props) {
  const resolvedParams = await params;
  const category = await getCategoryDetail(resolvedParams.categoryId).catch(notFound);
  const { contents: works } = await getWorksList({
    filters: `category[contains]${resolvedParams.categoryId}`,
  });

  if (works.length === 0) {
    return <div className={styles.err}>記事がありません。</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{category.name}の記事一覧</h1>
      <WorksList works={works} />
      <div className={styles.foot}>
        <Link href="/works/category" aria-label='カテゴリー一覧'>カテゴリーの一覧へ</Link>
      </div>
    </div>
  );
}