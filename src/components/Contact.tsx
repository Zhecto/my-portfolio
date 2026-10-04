import { CheckIcon, CopyIcon, MailIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

import { PROFILE } from '../constants';

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);

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
      className='mx-auto max-w-5xl scroll-mt-16 px-6 py-16'
    >
      <div className='bg-primary-container text-on-primary-container rounded-3xl px-6 py-14 text-center sm:px-12'>
        <h2 className='text-3xl font-bold'>Let's work together</h2>
        <p className='mx-auto mt-3 max-w-xl text-lg'>
          Have a project in mind, a question, or just want to say hi? My inbox
          is open.
        </p>

        <div className='mt-8 flex flex-wrap items-center justify-center gap-4'>
          <a
            href={`mailto:${PROFILE.email}`}
            className='bg-primary text-on-primary inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium transition-opacity hover:opacity-90'
          >
            <MailIcon size={18} />
            {PROFILE.email}
          </a>

          <button
            type='button'
            onClick={copyEmail}
            className='border-on-primary-container/40 hover:bg-on-primary-container/10 inline-flex items-center gap-2 rounded-full border px-6 py-3 font-medium transition-colors'
          >
            {copied ? <CheckIcon size={18} /> : <CopyIcon size={18} />}
            {copied ? 'Copied!' : 'Copy email'}
          </button>
        </div>

        <p
          role='status'
          className='mt-4 min-h-6 text-sm'
        >
          {copyFailed && "Couldn't copy automatically. Please copy it by hand."}
        </p>
      </div>
    </section>
  );
};