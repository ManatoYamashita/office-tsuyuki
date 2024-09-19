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
      <Hero title="Works" sub="事例。実績" />
      <Sheet>{children}</Sheet>
    </>
  );
}
