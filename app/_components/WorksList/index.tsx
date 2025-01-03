import { Works } from '@/app/_libs/microcms';
import { WorksListItem } from './WorksListItem';

type Props = {
  works: Works[];
};

export default function WorksList({ works }: Props) {
  if (!works?.length) {
    return (
      <div className="text-center py-24 text-gray-500">
        <p className="text-lg">事例・実績が取得できませんでした。</p>
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {works.map((work, index) => (
        <WorksListItem 
          key={work.id} 
          work={work} 
          index={index}
        />
      ))}
    </ul>
  );
}
