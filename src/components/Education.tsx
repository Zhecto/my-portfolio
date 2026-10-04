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
      className='mx-auto max-w-5xl scroll-mt-16 px-6 py-16'
    >
      <Reveal>
        <SectionHeading
          title='Education & Certifications'
          subtitle='Formal learning and credentials.'
        />
      </Reveal>

      <div className='mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
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
              <article className='bg-surface-container-low border-outline-variant hover:shadow-on-surface/10 flex h-full flex-col rounded-3xl border p-6 transition-[translate,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-lg'>
                <div className='bg-primary-container text-on-primary-container flex size-12 items-center justify-center rounded-2xl'>
                  <Icon size={24} />
                </div>

                <h3 className='text-on-surface mt-5 text-xl font-semibold'>
                  {title}
                </h3>
                <p className='text-on-surface-variant mt-1'>
                  {academy} · {year}
                </p>
                <p className='text-primary mt-2 text-sm font-medium'>
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