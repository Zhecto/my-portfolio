import { cn } from '../lib/utils';

type TagListProps = {
  tags: string[];
  className?: string;
};

export const TagList = ({ tags, className }: TagListProps) => {
  return (
    <ul className={cn('flex flex-wrap gap-2', className)}>
      {tags.map((tag) => (
        <li
          key={tag}
          className='bg-secondary-container text-on-secondary-container rounded-full px-3 py-1 text-xs'
        >
          {tag}
        </li>
      ))}
    </ul>
  );
};