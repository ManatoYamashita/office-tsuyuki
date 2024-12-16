import type { Category as CategoryType } from '@/app/_libs/microcms';
import styles from './index.module.css';

type Props = {
  category?: CategoryType[] | CategoryType; // 配列または単体のカテゴリーに対応
};

export default function Category({ category }: Props) {
  if (!category) {
    return null;
  }

  // 配列の場合
  if (Array.isArray(category)) {
    return (
      <div className={styles.categories}>
        {category.map((cat) => (
          <span key={cat.id} className={styles.tag}>
            {cat.name}
          </span>
        ))}
      </div>
    );
  }

  // 単体のカテゴリーの場合（後方互換性のため）
  return <span className={styles.tag}>{category.name}</span>;
}
