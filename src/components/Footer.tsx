import { FOOTER_LINKS, PROFILE } from '../constants';

export const Footer = () => {
  return (
    <footer className='border-outline-variant border-t'>
      <div className='mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row'>
        <p className='text-on-surface-variant text-sm'>
          © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
        </p>

        <ul className='flex gap-6'>
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
                  className='text-on-surface-variant hover:text-primary text-sm transition-colors'
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};