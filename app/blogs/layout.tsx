import Hero from '@/app/_components/Hero';
import Sheet from '@/app/_components/Sheet';

export const metadata = {
  title: '記事',
};

type Props = {
  children: React.ReactNode;
};

export const revalidate = 60;

export default function BlogsLayout({ children }: Props) {
  return (
    <>
      <Hero title="Blogs" sub="お知らせやブログ記事を一覧表示しています。" imageUrl='/images/architect.webp' />
      <Sheet>{children}</Sheet>
    </>
  );
}
