import { FOOTER_LINKS, PROFILE } from '../constants';

export const Footer = () => {
  return (
    <footer className='border-outline-variant bg-surface-container-low border-t'>
      <div className='mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row'>
        <p className='text-on-surface-variant text-sm'>
          © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
        </p>

        <ul className='flex items-center gap-2'>
          {FOOTER_LINKS.map(({ url, label }) => {
            const isExternal = url !== '#';

            return (
              <li key={label}>
                <a
                  href={url}
                  {...(isExternal && {
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  })}
                  aria-label={label}
                  title={label}
                  className='border-outline-variant text-on-surface-variant hover:border-tertiary hover:text-primary inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border px-3 text-sm font-semibold transition-colors motion-safe:transition-transform motion-safe:hover:-translate-y-1'
                >
                  {label === 'GitHub' ? (
                    <svg aria-hidden='true' viewBox='0 0 24 24' className='size-5 fill-current'>
                      <path d='M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.3 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3Z' />
                    </svg>
                  ) : label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};
