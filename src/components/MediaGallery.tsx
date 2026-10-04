import { useState } from 'react';

import { cn } from '../lib/utils';
import type { Media } from '../types';

type MediaGalleryProps = {
  items: Media[];
  aspect: string;
};

export const MediaGallery = ({ items, aspect }: MediaGalleryProps) => {
  const [selected, setSelected] = useState(0);
  const current = items[selected];

  if (!current) return null;

  return (
    <div>
      <div
        className={cn(
          'bg-surface-container overflow-hidden rounded-2xl',
          aspect,
        )}
      >
        <img
          src={current.src}
          alt={current.alt}
          decoding='async'
          className='size-full object-cover'
        />
      </div>

      {items.length > 1 && (
        <ul className='mx-auto mt-3 flex w-fit max-w-full gap-2 overflow-x-auto'>
          {items.map((item, index) => (
            <li
              key={item.src}
              className='shrink-0'
            >
              <button
                type='button'
                onClick={() => setSelected(index)}
                aria-label={`Show image ${index + 1} of ${items.length}`}
                aria-current={index === selected}
                className={cn(
                  'block h-14 overflow-hidden rounded-lg border-2 transition-opacity',
                  index === selected
                    ? 'border-primary'
                    : 'border-transparent opacity-60 hover:opacity-100',
                )}
              >
                <img
                  src={item.src}
                  alt=''
                  loading='lazy'
                  decoding='async'
                  className='h-full w-auto'
                />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};