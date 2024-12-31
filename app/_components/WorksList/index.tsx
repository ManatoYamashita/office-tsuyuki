import Image from 'next/image';
import Link from 'next/link';

import styles from './index.module.scss';
import Category from '../Category';
import Date from '../Date';
import { Works } from '@/app/_libs/microcms';

type Props = {
  works: Works[];
};

export default function WorksList({ works }: Props) {
  if (works.length === 0) {
    return <p>事例・実績が取得できませんでした。</p>;
  }
  return (
    <ul>
      {works.map((article) => (
        <li key={article.id} className={styles.list}>
          <Link href={`/works/${article.id}`} className={styles.link}>
            {article.thumbnail ? (
              <Image
                src={article.thumbnail.url}
                alt="thumbnail"
                className={styles.image}
                width={article.thumbnail.width}
                height={article.thumbnail.height}
              />
            ) : (
              <Image
                className={styles.image}
                src="/placeholder.webp"
                alt="No Image"
                width={1200}
                height={630}
              />
            )}
            <dl className={styles.content}>
              <dt className={styles.title}>{article.title}</dt>
              <dd className={styles.meta}>
                <Category category={article.category} />
                <Date date={article.publishedAt ?? article.createdAt} />
              </dd>
            </dl>
          </Link>
        </li>
      ))}
    </ul>
  );
}
