import { TECH_STACKS } from '../constants';

export const TechStack = () => {
  if (TECH_STACKS.length === 0) return null;

  return (
    <section
      id='tech-stack'
      className='mx-auto max-w-5xl scroll-mt-16 px-6 py-16'
    >
      <h2 className='text-on-surface text-3xl font-bold'>Tech stack</h2>
      <p className='text-on-surface-variant mt-2'>
        The tools I use to build and ship.
      </p>

      <ul className='mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4'>
        {TECH_STACKS.map(({ name, Icon }) => (
          <li
            key={name}
            className='bg-surface-container-low border-outline-variant flex flex-col items-center gap-3 rounded-2xl border px-4 py-6'
          >
            <div aria-hidden='true'>
              <Icon className='size-10' />
            </div>
            <span className='text-on-surface text-sm font-medium'>{name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};