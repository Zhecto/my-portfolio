import { TOOL_CATEGORIES } from '../constants';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';
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
      className='relative mx-auto max-w-6xl scroll-mt-20 px-6 py-24 sm:py-32'
    >
      <Reveal>
        <SectionHeading
          title='Technologies & Tools'
          subtitle='What I build with, and what I build alongside.'
        />
      </Reveal>

      <div className='mt-14 grid gap-5 pb-0 sm:grid-cols-2 lg:grid-cols-3 lg:pb-12'>
        {TOOL_CATEGORIES.map(({ title, Icon, items }, index) => (
          <Reveal
            key={title}
            delay={index * 60}
          >
            <article className={`bg-surface-container-low border-outline-variant hover:border-tertiary/60 relative h-full overflow-hidden rounded-2xl border p-7 shadow-lg shadow-black/5 duration-300 hover:shadow-xl motion-safe:transition-[scale,box-shadow,border-color] motion-safe:hover:scale-[1.02] ${index % 3 === 1 ? 'lg:translate-y-6' : index % 3 === 2 ? 'lg:translate-y-12' : ''}`}>
              <div aria-hidden='true' className='bg-tertiary absolute inset-x-0 top-0 h-1' />
              <div className='flex items-center gap-3'>
                <div
                  aria-hidden='true'
                  className={`flex size-12 items-center justify-center rounded-xl ${ACCENTS[index % ACCENTS.length]}`}
                >
                  <Icon size={20} />
                </div>
                <h3 className='text-on-surface text-lg font-semibold'>
                  {title}
                </h3>
              </div>

              <TagList
                tags={items}
                className='mt-5'
              />
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
