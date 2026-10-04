import { MenuIcon, XIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { NAV_LINKS } from '../constants';
import { ThemeToggle } from './ThemeToggle';

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const progressBar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const bar = progressBar.current;
      if (!bar) return;

      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;

      bar.style.transform = `scaleX(${Math.min(Math.max(progress, 0), 1)})`;
    };

    // write to the ref directly so scrolling never re-renders the navbar
    const onScroll = () => {
      if (frame) return;

      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      if (frame) cancelAnimationFrame(frame);

      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <header className='bg-surface/80 border-outline-variant sticky top-0 z-10 border-b backdrop-blur'>
      <div className='mx-auto flex h-16 max-w-5xl items-center justify-between px-6'>
        <a
          href='#'
          className='text-on-surface text-lg font-semibold'
        >
          Zhecto
        </a>

        <div className='flex items-center gap-2'>
          <nav
            aria-label='Primary'
            className='hidden gap-6 sm:flex'
          >
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className='text-on-surface-variant hover:text-primary transition-colors'
              >
                {label}
              </a>
            ))}
          </nav>

          <ThemeToggle />

          <button
            type='button'
            onClick={() => setOpen((current) => !current)}
            aria-expanded={open}
            aria-controls='mobile-nav'
            aria-label={open ? 'Close menu' : 'Open menu'}
            className='text-on-surface-variant hover:bg-surface-container-high rounded-full p-2 transition-colors sm:hidden'
          >
            {open ? <XIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </div>

      <div
        ref={progressBar}
        aria-hidden='true'
        className='bg-primary absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0'
      />

      {open && (
        <nav
          id='mobile-nav'
          aria-label='Mobile'
          className='border-outline-variant bg-surface mx-auto flex max-w-5xl flex-col gap-1 border-t px-6 py-4 sm:hidden'
        >
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className='text-on-surface-variant hover:bg-surface-container-high hover:text-primary rounded-lg px-3 py-2 transition-colors'
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};