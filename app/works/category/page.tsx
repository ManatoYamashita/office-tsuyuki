import BusinessContent from '@/app/_components/BusinessContent';

export const metadata = {
  title: 'カテゴリ一覧',
  description: 'Works のカテゴリ一覧ページです。',
  imageUrl: '/images/architect.webp',
  url: '/works/category',
  type: 'website',
  keywords: ['Works', 'カテゴリ一覧'],
};

export default async function Page() {
  return (
    <div className='max-w-4xl mx-auto mb-24'>
      <BusinessContent title='カテゴリ一覧' subtitle='Category' />
    </div>
  )
}