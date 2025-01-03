import Hero from '@/app/_components/Hero';
import Sheet from '@/app/_components/Sheet';

export const metadata = {
  title: '事例・実績',
};

type Props = {
  children: React.ReactNode;
};

export const revalidate = 60;

export default function WorksLayout({ children }: Props) {
  return (
    <>
      {/* <Hero title="Works" sub="オフィス露木が手がけたこれまでのお仕事を紹介します。" imageUrl="/images/placeholder.webp" /> */}
      <main className='max-w-4xl mx-auto mb-12'>{children}</main>
    </>
  );
}
