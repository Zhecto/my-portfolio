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
          className='bg-secondary-container text-on-secondary-container border-outline-variant rounded-md border px-3 py-1 font-mono text-[11px] font-medium tracking-wide'
        >
          {tag}
        </li>
      ))}
    </ul>
  );
};
