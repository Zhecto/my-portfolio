import { ExternalLinkIcon, EyeIcon } from 'lucide-react';
import { useState } from 'react';

import { EDUCATIONS } from '../constants';
import { ImageModal } from './ImageModal';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

const actionClass =
  'text-primary inline-flex items-center gap-1 text-sm font-medium hover:underline';

export const Education = () => {
  const [viewing, setViewing] = useState<{
    src: string;
    title: string;
  } | null>(null);

  if (EDUCATIONS.length === 0) return null;

  return (
    <section
      id='education'
      className='relative mx-auto max-w-6xl scroll-mt-20 px-6 py-24 sm:py-32'
    >
      <Reveal>
        <SectionHeading
          title='Education & Certifications'
          subtitle='Formal learning and credentials.'
        />
      </Reveal>

      <div className='mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
        {EDUCATIONS.map(
          (
            {
              Icon,
              title,
              academy,
              year,
              certificate,
              certificateFile,
              credentialUrl,
            },
            index,
          ) => (
            <Reveal
              key={title}
              delay={index * 60}
            >
              <article className={`bg-surface-container-low border-outline-variant hover:border-tertiary/60 relative flex h-full flex-col overflow-hidden rounded-2xl border p-7 shadow-lg shadow-black/5 duration-300 motion-safe:transition-[scale,border-color] motion-safe:hover:scale-[1.02] ${index === 1 ? 'lg:-translate-y-5' : ''}`}>
                <div aria-hidden='true' className='bg-tertiary absolute top-0 left-0 h-1 w-24' />
                <div className='bg-primary-container text-on-primary-container flex size-12 items-center justify-center rounded-2xl'>
                  <Icon size={24} />
                </div>

                <h3 className='text-on-surface mt-5 text-xl font-semibold'>
                  {title}
                </h3>
                <p className='text-on-surface-variant mt-1'>
                  {academy} · {year}
                </p>
                <p className='text-primary mt-2 text-sm font-semibold'>
                  {certificate}
                </p>

                {(certificateFile || credentialUrl) && (
                  <div className='mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-5'>
                    {certificateFile?.type === 'image' && (
                      <button
                        type='button'
                        onClick={() =>
                          setViewing({ src: certificateFile.src, title })
                        }
                        className={actionClass}
                      >
                        <EyeIcon size={16} />
                        View certificate
                      </button>
                    )}

                    {certificateFile?.type === 'pdf' && (
                      <a
                        href={certificateFile.src}
                        target='_blank'
                        rel='noopener noreferrer'
                        className={actionClass}
                      >
                        View certificate (PDF)
                        <ExternalLinkIcon size={16} />
                      </a>
                    )}

                    {credentialUrl && (
                      <a
                        href={credentialUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className={actionClass}
                      >
                        Verify
                        <ExternalLinkIcon size={16} />
                      </a>
                    )}
                  </div>
                )}
              </article>
            </Reveal>
          ),
        )}
      </div>

      {viewing && (
        <ImageModal
          src={viewing.src}
          title={viewing.title}
          onClose={() => setViewing(null)}
        />
      )}
    </section>
  );
};
