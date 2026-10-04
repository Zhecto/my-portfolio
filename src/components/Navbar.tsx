import { MenuIcon, XIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

import { NAV_LINKS } from '../constants';
import { ThemeToggle } from './ThemeToggle';

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

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