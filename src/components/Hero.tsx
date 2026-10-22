import { ArrowDownRightIcon, ArrowUpRightIcon } from 'lucide-react';

import { PROFILE } from '../constants';

export const Hero = () => {
  return (
    <section className='relative mx-auto grid max-w-6xl items-center gap-14 overflow-hidden px-6 py-20 sm:py-28 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[1.15fr_0.85fr] lg:gap-6'>
      <div className='relative z-10'>
        <p className='text-on-surface-variant rise-in mb-8 flex items-center gap-3 font-mono text-xs font-semibold tracking-[0.24em] uppercase'>
          <span className='bg-tertiary size-2.5 rounded-full shadow-[0_0_20px_var(--tertiary)]' />
          Full-stack developer // portfolio
        </p>
        <h1 className='text-on-surface rise-in max-w-3xl text-[clamp(3.4rem,8vw,7.8rem)] leading-[0.93] font-black tracking-[-0.075em]' style={{ animationDelay: '100ms' }}>
          {PROFILE.name}
          <span className='text-tertiary'>.</span>
        </h1>
        <div className='border-tertiary rise-in mt-9 max-w-xl border-l-4 pl-5' style={{ animationDelay: '180ms' }}>
          <h2 className='text-on-surface text-xl font-semibold sm:text-2xl'>{PROFILE.title}</h2>
          <p className='text-on-surface-variant mt-3 text-base leading-relaxed sm:text-lg'>{PROFILE.intro}</p>
        </div>
        <div className='rise-in mt-10 flex flex-wrap gap-3' style={{ animationDelay: '260ms' }}>
          <a href='#projects' className='bg-tertiary text-on-tertiary inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-bold shadow-[0_12px_32px_-14px_var(--tertiary)] motion-safe:transition-transform motion-safe:hover:-translate-y-1'>
            View projects <ArrowUpRightIcon size={18} />
          </a>
          <a href='#contact' className='border-outline text-on-surface hover:bg-surface-container inline-flex items-center gap-2 rounded-xl border px-6 py-3.5 font-semibold transition-colors'>
            Contact me <ArrowDownRightIcon size={18} />
          </a>
        </div>
      </div>

      <div aria-hidden='true' className='relative mx-auto aspect-square w-full max-w-[31rem]'>
        <div className='bg-tertiary/10 absolute inset-[5%] rounded-full blur-3xl' />
        <div className='signal-grid signal-float border-outline-variant bg-surface-container-low absolute inset-0 rotate-[-8deg] overflow-hidden rounded-[3rem] border shadow-2xl'>
          <div className='border-outline-variant absolute inset-[10%] rounded-full border' />
          <div className='signal-orbit border-outline-variant absolute inset-[22%] rounded-full border' />
          <div className='border-tertiary/70 absolute inset-[35%] rounded-full border-2' />
          <div className='bg-tertiary absolute top-[16%] left-[18%] size-3 rounded-full shadow-[0_0_22px_var(--tertiary)]' />
          <div className='bg-tertiary absolute right-[16%] bottom-[24%] size-2 rounded-full shadow-[0_0_22px_var(--tertiary)]' />
          <svg viewBox='0 0 500 500' className='absolute inset-0 size-full fill-none stroke-[2]' preserveAspectRatio='none'>
            <path className='circuit-trace' pathLength='1' d='M0 110 H118 L190 182 H295 L360 117 H500' stroke='var(--tertiary)' style={{ animationDelay: '250ms' }} />
            <path className='circuit-trace' pathLength='1' d='M0 365 H105 L180 290 H310 L382 362 H500' stroke='var(--tertiary)' style={{ animationDelay: '400ms' }} />
            <path className='circuit-trace' pathLength='1' d='M248 0 V112 L310 174' stroke='var(--tertiary)' style={{ animationDelay: '550ms' }} />
            <path className='circuit-trace' pathLength='1' d='M250 500 V394 L185 328' stroke='var(--tertiary)' style={{ animationDelay: '700ms' }} />
            <path d='M0 250 H125 M375 250 H500 M250 0 V95 M250 405 V500' stroke='var(--outline)' />
          </svg>
          <div className='bg-tertiary/30 absolute inset-[32%] rounded-full blur-2xl' />
          <div className='lightning-core border-tertiary/70 absolute inset-[37%] overflow-hidden rounded-full border-2'>
            <svg viewBox='0 0 120 120' className='absolute inset-0 size-full fill-none'>
              <circle cx='60' cy='60' r='13' className='plasma-electrode-halo' />
              <path className='plasma-stream' d='M59 58 51 48 49 42 40 36 44 30 31 22 25 8' />
              <path className='plasma-stream' d='M62 58 68 48 64 39 73 32 69 25 81 17 86 5' style={{ animationDelay: '-1.2s' }} />
              <path className='plasma-stream' d='M64 61 75 65 79 74 90 73 94 84 108 90 118 88' style={{ animationDelay: '-2.1s' }} />
              <path className='plasma-stream' d='M58 63 49 68 47 78 37 83 40 94 28 101 22 116' style={{ animationDelay: '-.8s' }} />
              <path className='plasma-stream' d='M60 57 57 42 64 36 61 22 64 7' style={{ animationDelay: '-2.8s' }} />
              <path className='plasma-stream' d='M64 60 78 54 87 58 99 49 114 52' style={{ animationDelay: '-1.7s' }} />
              <path className='plasma-branch' d='M40 36 29 40 22 35 M73 32 87 31 94 23 M79 74 80 89 74 101 M47 78 53 92 49 104' />
              <circle cx='60' cy='60' r='6' className='plasma-electrode' />
            </svg>
          </div>
        </div>
        <div className='bg-surface text-on-surface border-outline-variant absolute -right-2 -bottom-5 rounded-xl border px-4 py-2 font-mono text-xs tracking-[0.2em] uppercase shadow-lg sm:right-1'>
          Web / Mobile / Apps
        </div>
      </div>
    </section>
  );
};
