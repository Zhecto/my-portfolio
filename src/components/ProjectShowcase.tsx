import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ExternalLinkIcon,
} from 'lucide-react';
import { useState } from 'react';

import { PROJECTS } from '../constants';
import { cn } from '../lib/utils';
import { MediaGallery } from './MediaGallery';
import { TagList } from './TagList';

export const ProjectShowcase = () => {
  const [index, setIndex] = useState(0);
  const project = PROJECTS[index];

  if (!project) return null;

  const hasMultiple = PROJECTS.length > 1;
  const portrait = project.portrait ?? [];
  const hasPortrait = portrait.length > 0;
  const hasControls = hasMultiple || Boolean(project.projectUrl);

  const goPrevious = () => {
    setIndex((current) => (current - 1 + PROJECTS.length) % PROJECTS.length);
  };

  const goNext = () => {
    setIndex((current) => (current + 1) % PROJECTS.length);
  };

  return (
    <section
      id='projects'
      className='mx-auto max-w-5xl scroll-mt-16 px-6 py-16'
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
            <MediaGallery
              key={`${project.title}-landscape`}
              items={project.landscape}
              aspect='aspect-video'
            />
          </div>

          {hasPortrait && (
            <div className='flex flex-col justify-center p-4'>
              <MediaGallery
                key={`${project.title}-portrait`}
                items={portrait}
                aspect='aspect-[3/4]'
              />
            </div>
          )}
        </div>

        <div className='p-6'>
          <div aria-live='polite'>
            <h3 className='text-on-surface text-xl font-semibold'>
              {project.title}
            </h3>
          </div>

          <p className='text-on-surface-variant mt-3 max-w-3xl'>
            {project.desc}
          </p>

          <TagList
            tags={project.techStacks}
            className='mt-5'
          />
        </div>

        {hasControls && (
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

            {hasMultiple && (
              <span className='text-on-surface-variant grow px-4 py-4 text-center text-xs'>
                {index + 1} / {PROJECTS.length}
              </span>
            )}

            {project.projectUrl && (
              <a
                href={project.projectUrl}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={`Open ${project.title} in a new tab`}
                className='text-on-surface-variant hover:bg-surface-container-high border-outline-variant ml-auto flex items-center border-l px-5 transition-colors'
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
        )}
      </div>
    </section>
  );
};