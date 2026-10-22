import { CheckIcon, CopyIcon, MailIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

import { PROFILE } from '../constants';

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);
  const [emailUser, emailDomain] = PROFILE.email.split('@');

  useEffect(() => {
    if (!copied) return;

    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopyFailed(false);
      setCopied(true);
    } catch {
      setCopyFailed(true);
    }
  };

  return (
    <section
      id='contact'
      className='relative mx-auto max-w-6xl scroll-mt-20 px-6 py-24 sm:py-32'
    >
      <div className='bg-primary-container text-on-primary-container border-outline-variant relative overflow-hidden rounded-[2rem] border px-6 py-16 text-center shadow-2xl shadow-black/10 sm:px-12 sm:py-24'>
        <div
          aria-hidden='true'
          className='signal-grid absolute inset-0 opacity-45'
        />
        <div
          aria-hidden='true'
          className='border-tertiary/60 absolute top-1/2 left-1/2 size-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full border'
        />
        <div className='relative'>
          <p className='mb-5 font-mono text-xs font-bold tracking-[0.2em] uppercase'>
            Open channel // contact
          </p>
          <h2 className='text-[clamp(2.8rem,6vw,5.5rem)] leading-[1.02] font-black tracking-[-0.06em]'>
            Let's work together
          </h2>
          <p className='mx-auto mt-5 max-w-xl text-lg'>
            Have a project in mind, a question, or just want to say hi? My
            inbox is open.
          </p>

          <div className='mt-8 flex flex-wrap items-center justify-center gap-4'>
            <a
              href={`mailto:${PROFILE.email}`}
              aria-label={PROFILE.email}
              className='bg-tertiary text-on-tertiary inline-flex max-w-full items-center gap-2 rounded-xl px-4 py-3.5 text-sm font-bold transition-transform hover:-translate-y-1 sm:px-6 sm:text-base'
            >
              <MailIcon size={18} />
              <span className='min-w-0'>
                {emailUser}
                <wbr />@{emailDomain}
              </span>
            </a>

            <button
              type='button'
              onClick={copyEmail}
              className='border-on-primary-container/40 hover:bg-on-primary-container/10 inline-flex items-center gap-2 rounded-xl border px-6 py-3.5 font-semibold transition-colors'
            >
              {copied ? <CheckIcon size={18} /> : <CopyIcon size={18} />}
              {copied ? 'Copied!' : 'Copy email'}
            </button>
          </div>

          <p
            role='status'
            className='mt-4 min-h-6 text-sm'
          >
            {copyFailed &&
              "Couldn't copy automatically. Please copy it by hand."}
          </p>
        </div>
      </div>
    </section>
  );
};
