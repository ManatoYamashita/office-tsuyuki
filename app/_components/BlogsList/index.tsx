import Image from 'next/image';
import Link from 'next/link';

import styles from './index.module.scss';
import Date from '../Date';
import { Blogs } from '@/app/_libs/microcms';
// import Category from '../Category';

type Props = {
  blogs: Blogs[];
};

export default function BlogsList({ blogs }: Props) {
  if (blogs.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <ul>
      {blogs.map((article) => (
        <li key={article.id} className={styles.list}>
          <Link href={`/blogs/${article.id}`} className={styles.link}>
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
                src="/no-image.png"
                alt="No Image"
                width={1200}
                height={630}
              />
            )}
            <dl className={styles.content}>
              <dt className={styles.title}>{article.title}</dt>
              <dd className={styles.meta}>
                {/* <Category category={article.category} /> */}
                <Date date={article.publishedAt ?? article.createdAt} />
              </dd>
            </dl>
          </Link>
        </li>
      ))}
    </ul>
  );
}
