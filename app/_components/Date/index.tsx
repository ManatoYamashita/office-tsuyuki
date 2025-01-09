import Image from 'next/image';
import styles from './index.module.scss';
import { formatDate } from '@/app/_libs/utils';

type Props = {
  date: string;
};

export default function Date({ date }: Props) {
  return (
    <span className={styles.date}>
      <Image src="/images/clock.svg" alt="published date" width={16} height={16} loading="eager" className={styles.clock} quality={50} />
      {formatDate(date)}
    </span>
  );
}
