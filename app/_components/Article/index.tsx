import Image from 'next/image';
import Link from 'next/link';
import type { ArticleContent, Category } from '@/app/_libs/microcms';
import Date from '../Date';
import styles from './index.module.scss';
import SecoundryBtn from '@/app/_components/SecoundaryBtn';

type Props = {
  data: ArticleContent;
  contentType: 'works' | 'blogs';
};

const CategoryLabel = ({ category }: { category: Category }) => (
  <span className={styles.category}>{category.name}</span>
);

export default function Article({ data, contentType }: Props) {
  return (
    <main className='max-w-5xl px-6 mx-auto'>
      <h1 className={styles.title}>{data.title}</h1>
      <p className={styles.description}>{data.description}</p>
      <div className={styles.meta}>
        {'category' in data && data.category && data.category.length > 0 && (
          <div className={styles.categories}>
            {data.category.map((cat) => (
              <Link
                key={cat.id}
                href={`/${contentType}/category/${cat.id}`}
                className={styles.categoryLink}
              >
                <CategoryLabel category={cat} />
              </Link>
            ))}
          </div>
        )}
        <Date date={data.publishedAt ?? data.createdAt} />
      </div>
      {data.thumbnail && (
        <Image
          src={data.thumbnail.url}
          alt=""
          className={styles.thumbnail}
          width={data.thumbnail.width}
          height={data.thumbnail.height}
        />
      )}
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{
          __html: data.content,
        }}
      />
      <SecoundryBtn label="記事一覧に戻る" url="/works" />
    </main>
  );
}