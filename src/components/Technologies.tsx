import { TOOL_CATEGORIES } from '../constants';
import { TagList } from './TagList';

const ACCENTS = [
  'bg-primary-container text-on-primary-container',
  'bg-secondary-container text-on-secondary-container',
  'bg-tertiary-container text-on-tertiary-container',
];

export const Technologies = () => {
  if (TOOL_CATEGORIES.length === 0) return null;

  return (
    <section
      id='technologies'
      className='mx-auto max-w-5xl scroll-mt-16 px-6 py-16'
    >
      <h2 className='text-on-surface text-3xl font-bold'>
        Technologies & Tools
      </h2>
      <p className='text-on-surface-variant mt-2'>
        What I build with, and what I build alongside.
      </p>

      <div className='mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {TOOL_CATEGORIES.map(({ title, Icon, items }, index) => (
          <article
            key={title}
            className='bg-surface-container-low border-outline-variant rounded-3xl border p-6'
          >
            <div className='flex items-center gap-3'>
              <div
                aria-hidden='true'
                className={`flex size-10 items-center justify-center rounded-xl ${ACCENTS[index % ACCENTS.length]}`}
              >
                <Icon size={20} />
              </div>
              <h3 className='text-on-surface text-lg font-semibold'>{title}</h3>
            </div>

            <TagList
              tags={items}
              className='mt-5'
            />
          </article>
        ))}
      </div>
    </section>
  );
};
