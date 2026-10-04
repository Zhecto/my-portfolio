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
      className='mx-auto max-w-5xl scroll-mt-16 px-6 py-16'
    >
      <Reveal>
        <SectionHeading
          title='Technologies & Tools'
          subtitle='What I build with, and what I build alongside.'
        />
      </Reveal>

      <div className='mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {TOOL_CATEGORIES.map(({ title, Icon, items }, index) => (
          <Reveal
            key={title}
            delay={index * 60}
          >
            <article className='bg-surface-container-low border-outline-variant hover:shadow-on-surface/10 h-full rounded-3xl border p-6 transition-[translate,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-lg'>
              <div className='flex items-center gap-3'>
                <div
                  aria-hidden='true'
                  className={`flex size-10 items-center justify-center rounded-xl ${ACCENTS[index % ACCENTS.length]}`}
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