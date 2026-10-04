import { PROFILE } from '../constants';

const STEPS = [0, 80, 160, 240, 320];

export const Hero = () => {
  return (
    <section className='mx-auto max-w-5xl px-6 py-24 sm:py-32'>
      <p
        className='text-primary rise-in mb-4 font-medium'
        style={{ animationDelay: `${STEPS[0]}ms` }}
      >
        Hi, I'm
      </p>

      <h1
        className='text-sweep name-enter text-5xl font-bold tracking-tight leading-[1.05] sm:text-7xl'
        style={{ animationDelay: `${STEPS[1]}ms` }}
      >
        {PROFILE.name}
      </h1>

      <h2
        className='text-on-surface-variant rise-in mt-3 text-xl sm:text-2xl'
        style={{ animationDelay: `${STEPS[2]}ms` }}
      >
        {PROFILE.title}
      </h2>

      <p
        className='text-on-surface-variant rise-in mt-6 max-w-2xl text-lg leading-relaxed'
        style={{ animationDelay: `${STEPS[3]}ms` }}
      >
        {PROFILE.intro}
      </p>

      <div
        className='rise-in mt-10 flex flex-wrap gap-4'
        style={{ animationDelay: `${STEPS[4]}ms` }}
      >
        <a
          href='#projects'
          className='bg-primary text-on-primary rounded-full px-6 py-3 font-medium transition-[opacity,transform] hover:opacity-90 active:scale-[0.97]'
        >
          View projects
        </a>
        <a
          href='#contact'
          className='border-outline text-primary hover:bg-primary-container/40 rounded-full border px-6 py-3 font-medium transition-[color,background-color,transform] active:scale-[0.97]'
        >
          Contact me
        </a>
      </div>
    </section>
  );
};