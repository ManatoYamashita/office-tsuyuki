import Image from 'next/image';
import styles from './index.module.scss';

type Props = {
  title: string;
  sub: string;
  imageUrl: string;
};

export default function Hero({ title, sub, imageUrl }: Props) {
  return (
    <section className={styles.container}>
      <div>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.sub}>{sub}</p>
      </div>
      {imageUrl ? 
      <Image 
        className={styles.bgimg} 
        src={imageUrl} 
        alt="heroImage" 
        width={4000} 
        height={1200} 
      />
      :
      <Image
        className={styles.bgimg}
        src="/images/placeholder.webp"
        alt="backgground"
        width={4000}
        height={1200}
      />
      }
    </section>
  );
}
