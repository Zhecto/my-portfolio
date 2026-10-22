import { EXPERIENCES } from '../constants';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';
import { TagList } from './TagList';

export const Experience = () => {
  if (EXPERIENCES.length === 0) return null;

  return (
    <section
      id='experience'
      className='relative mx-auto max-w-6xl scroll-mt-20 px-6 py-24 sm:py-32'
    >
      <Reveal>
        <SectionHeading
          title='Experience'
          subtitle="Where I've worked and what I've done there."
        />
      </Reveal>

      {/* revealed as one block so the <ol> keeps its <li> children intact */}
      <Reveal>
        <ol className='border-outline-variant relative mt-14 space-y-6 border-l pl-7 lg:border-0 lg:pl-0 lg:before:absolute lg:before:inset-y-0 lg:before:left-1/2 lg:before:w-px lg:before:bg-outline-variant'>
          {EXPERIENCES.map((job, index) => (
            <li
              key={`${job.company}-${job.joinDate}`}
              className={`bg-surface-container-low border-outline-variant hover:border-tertiary/60 relative rounded-2xl border p-6 shadow-lg shadow-black/5 duration-300 motion-safe:transition-[scale,border-color] motion-safe:hover:scale-[1.015] sm:p-8 lg:w-[calc(50%-2rem)] ${index % 2 ? 'lg:ml-auto' : ''}`}
            >
              <span
                aria-hidden='true'
                className={`bg-tertiary border-surface absolute top-8 -left-[2.2rem] size-4 rounded-full border-[3px] shadow-[0_0_15px_var(--tertiary)] ${index % 2 ? 'lg:-left-[2.65rem]' : 'lg:left-auto lg:-right-[2.65rem]'}`}
              />

              <p className='text-primary font-mono text-xs font-semibold tracking-wider uppercase'>
                {job.joinDate} – {job.resignDate ?? 'Present'}
              </p>
              <h3 className='text-on-surface mt-3 text-2xl font-bold tracking-tight'>
                {job.position}
              </h3>
              <p className='text-on-surface-variant'>{job.company}</p>

              <ul className='text-on-surface-variant mt-4 list-disc space-y-2 pl-5 leading-relaxed'>
                {job.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>

              <TagList
                tags={job.skills}
                className='mt-4'
              />
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
};
