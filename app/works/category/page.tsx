// /app/works/category/page.tsx
// import { getAllCategoryList } from '@/app/_libs/microcms';
// import Link from 'next/link';
// import styles from './page.module.scss';
import BusinessContent from '@/app/_components/BusinessContent';

export const metadata = {
  title: 'カテゴリ一覧',
  description: 'Works のカテゴリ一覧ページです。',
};

export default async function Page() {
  // const categories = await getAllCategoryList();

  // return (
  //   <div>
  //     <h1>カテゴリー一覧</h1>
  //     <ul className={styles.list}>
  //       {categories.map((category) => (
  //         <li key={category.id}>
  //           <Link href={`/works/category/${category.id}`}>
  //             {category.name}
  //           </Link>
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );

  return (
    <BusinessContent title='カテゴリ一覧' subtitle='Category' />
  )
}