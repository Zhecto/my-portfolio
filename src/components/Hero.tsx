import { PROFILE, PROFILE_TAGS } from '../constants';

export const Hero = () => {
  return (
    <section className='mx-auto max-w-5xl px-6 py-24 sm:py-32'>
      <p className='text-primary mb-4 font-medium'>Hi, I'm</p>

      <h1 className='text-on-surface text-4xl font-bold sm:text-6xl'>
        {PROFILE.name}
      </h1>

      <h2 className='text-on-surface-variant mt-3 text-xl sm:text-2xl'>
        {PROFILE.title}
      </h2>

      <p className='text-on-surface-variant mt-6 max-w-2xl text-lg'>
        {PROFILE.intro}
      </p>

      <ul className='mt-8 flex flex-wrap gap-2'>
        {PROFILE_TAGS.map((tag) => (
          <li
            key={tag}
            className='bg-secondary-container text-on-secondary-container rounded-full px-4 py-1 text-sm'
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className='mt-10 flex flex-wrap gap-4'>
        <a
          href='#projects'
          className='bg-primary text-on-primary rounded-full px-6 py-3 font-medium transition-opacity hover:opacity-90'
        >
          View projects
        </a>
        <a
          href='#contact'
          className='border-outline text-primary hover:bg-primary-container/40 rounded-full border px-6 py-3 font-medium transition-colors'
        >
          Contact me
        </a>
      </div>
    </section>
  );
};