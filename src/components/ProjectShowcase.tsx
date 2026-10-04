import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ExternalLinkIcon,
} from 'lucide-react';
import { useState } from 'react';

import { PROJECTS } from '../constants';
import { cn } from '../lib/utils';
import { MediaGallery } from './MediaGallery';

export const ProjectShowcase = () => {
  const [index, setIndex] = useState(0);
  const project = PROJECTS[index];

  if (!project) return null;

  const hasMultiple = PROJECTS.length > 1;
  const portrait = project.portrait ?? [];
  const hasPortrait = portrait.length > 0;

  const goPrevious = () => {
    setIndex((current) => (current - 1 + PROJECTS.length) % PROJECTS.length);
  };

  const goNext = () => {
    setIndex((current) => (current + 1) % PROJECTS.length);
  };

  return (
    <section
      id='projects'
      className='mx-auto max-w-6xl scroll-mt-16 px-6 py-16'
    >
      <h2 className='text-on-surface text-3xl font-bold'>Projects</h2>
      <p className='text-on-surface-variant mt-2'>
        A few things I've built and learned from.
      </p>

      <div className='bg-surface-container-low border-outline-variant mt-10 overflow-hidden rounded-3xl border'>
        <div className={cn('grid', hasPortrait && 'lg:grid-cols-[2fr_1fr]')}>
          <div
            className={cn(
              'flex flex-col justify-center p-4',
              hasPortrait &&
                'border-outline-variant border-b lg:border-r lg:border-b-0',
            )}
          >
            <div className={cn(!hasPortrait && 'mx-auto w-full max-w-4xl')}>
              <MediaGallery
                key={`${project.title}-landscape`}
                items={project.landscape}
                aspect='aspect-video'
              />
            </div>
          </div>

          {hasPortrait && (
            <div className='flex flex-col justify-center p-4'>
              <div className='mx-auto w-full max-w-xs'>
                <MediaGallery
                  key={`${project.title}-portrait`}
                  items={portrait}
                  aspect='aspect-[3/4]'
                />
              </div>
            </div>
          )}
        </div>

        <div className='border-outline-variant border-t px-4 py-6'>
          <div className={cn(!hasPortrait && 'mx-auto w-full max-w-4xl')}>
            <p className='text-on-surface-variant max-w-3xl'>{project.desc}</p>
            <ul className='mt-4 flex flex-wrap gap-2'>
              {project.techStacks.map((stack) => (
                <li
                  key={stack}
                  className='bg-secondary-container text-on-secondary-container rounded-full px-3 py-1 text-xs'
                >
                  {stack}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='border-outline-variant flex items-stretch border-t'>
          {hasMultiple && (
            <button
              type='button'
              onClick={goPrevious}
              aria-label='Previous project'
              className='text-on-surface-variant hover:bg-surface-container-high border-outline-variant border-r px-5 transition-colors'
            >
              <ChevronLeftIcon size={20} />
            </button>
          )}

          <div
            aria-live='polite'
            className='flex grow flex-col items-center justify-center gap-1 px-4 py-4 text-center'
          >
            <h3 className='text-on-surface text-lg font-semibold'>
              {project.title}
            </h3>
            {hasMultiple && (
              <span className='text-on-surface-variant text-xs'>
                {index + 1} / {PROJECTS.length}
              </span>
            )}
          </div>

          {project.projectUrl && (
            <a
              href={project.projectUrl}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={`Open ${project.title} in a new tab`}
              className='text-on-surface-variant hover:bg-surface-container-high border-outline-variant flex items-center border-l px-5 transition-colors'
            >
              <ExternalLinkIcon size={20} />
            </a>
          )}

          {hasMultiple && (
            <button
              type='button'
              onClick={goNext}
              aria-label='Next project'
              className='text-on-surface-variant hover:bg-surface-container-high border-outline-variant border-l px-5 transition-colors'
            >
              <ChevronRightIcon size={20} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};