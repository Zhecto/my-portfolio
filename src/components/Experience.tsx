import { EXPERIENCES } from '../constants';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';
import { TagList } from './TagList';

export const Experience = () => {
  if (EXPERIENCES.length === 0) return null;

  return (
    <section
      id='experience'
      className='mx-auto max-w-5xl scroll-mt-16 px-6 py-16'
    >
      <Reveal>
        <SectionHeading
          title='Experience'
          subtitle="Where I've worked and what I've done there."
        />
      </Reveal>

      {/* revealed as one block so the <ol> keeps its <li> children intact */}
      <Reveal>
        <ol className='border-outline-variant mt-10 ml-2 border-l'>
          {EXPERIENCES.map((job) => (
            <li
              key={`${job.company}-${job.joinDate}`}
              className='relative pb-12 pl-8 last:pb-0'
            >
              <span
                aria-hidden='true'
                className='bg-primary border-surface absolute top-1.5 -left-1.5 size-3 rounded-full border-2'
              />

              <p className='text-primary text-sm font-medium'>
                {job.joinDate} – {job.resignDate ?? 'Present'}
              </p>
              <h3 className='text-on-surface mt-1 text-xl font-semibold'>
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