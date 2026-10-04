import { EDUCATIONS } from '../constants';
import { TagList } from './TagList';

export const Education = () => {
  if (EDUCATIONS.length === 0) return null;

  return (
    <section
      id='education'
      className='mx-auto max-w-5xl scroll-mt-16 px-6 py-16'
    >
      <h2 className='text-on-surface text-3xl font-bold'>
        Education & Certifications
      </h2>
      <p className='text-on-surface-variant mt-2'>
        Formal learning and credentials.
      </p>

      <div className='mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {EDUCATIONS.map(
          ({ Icon, title, academy, year, certificate, skills }) => (
            <article
              key={title}
              className='bg-surface-container-low border-outline-variant flex flex-col rounded-3xl border p-6'
            >
              <div className='bg-primary-container text-on-primary-container flex size-12 items-center justify-center rounded-2xl'>
                <Icon size={24} />
              </div>

              <h3 className='text-on-surface mt-5 text-xl font-semibold'>
                {title}
              </h3>
              <p className='text-on-surface-variant mt-1'>
                {academy} · {year}
              </p>
              <p className='text-primary mt-2 text-sm font-medium'>
                {certificate}
              </p>

              <TagList
                tags={skills}
                className='mt-auto pt-5'
              />
            </article>
          ),
        )}
      </div>
    </section>
  );
};