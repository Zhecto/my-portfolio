import { NAV_LINKS } from '../constants';
import { ThemeToggle } from './ThemeToggle';

export const Navbar = () => {
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
          <nav className='hidden gap-6 sm:flex'>
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
        </div>
      </div>
    </header>
  );
};