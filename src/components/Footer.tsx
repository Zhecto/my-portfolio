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
                  ) : label === 'LinkedIn' ? (
                    <svg aria-hidden='true' viewBox='0 0 16 16' className='size-5 fill-current'>
                      <path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z' />
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
