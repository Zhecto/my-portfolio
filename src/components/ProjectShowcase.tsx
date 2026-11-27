import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ExternalLinkIcon,
} from 'lucide-react';
import { useState } from 'react';

import { PROJECTS } from '../constants';
import { cn } from '../lib/utils';
import { MediaGallery } from './MediaGallery';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';
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
    <section id='projects' className='relative mx-auto max-w-6xl scroll-mt-20 px-6 py-24 sm:py-32'>
      <Reveal>
        <SectionHeading
          title='Projects'
          subtitle="A few things I've built and learned from."
        />
      </Reveal>

      <div className='bg-surface-container-low border-outline-variant mt-14 grid overflow-hidden rounded-[2rem] border shadow-2xl shadow-black/10 lg:grid-cols-[1.2fr_0.8fr]'>
        <div className='bg-surface-container relative flex min-w-0 flex-col justify-center overflow-hidden p-4 sm:p-7'>
          <div aria-hidden='true' className='signal-grid absolute inset-0 opacity-50' />
          <div className={cn('relative grid gap-4', hasPortrait && 'sm:grid-cols-[2fr_1fr]')}>
            <MediaGallery
              key={`${project.title}-landscape`}
              items={project.landscape}
              aspect='aspect-video'
            />
            {hasPortrait && (
              <MediaGallery
                key={`${project.title}-portrait`}
                items={portrait}
                aspect='aspect-[3/4]'
              />
            )}
          </div>
        </div>

        <div className='flex min-w-0 flex-col p-7 sm:p-10'>
          <p className='text-primary font-mono text-xs font-bold tracking-[0.2em] uppercase'>
            Featured project / {String(index + 1).padStart(2, '0')}
          </p>
          <div aria-live='polite'>
            <h3 className='text-on-surface mt-5 text-3xl font-black tracking-tight sm:text-4xl'>
              {project.title}
            </h3>
          </div>
          <p className='text-on-surface-variant mt-5 leading-relaxed'>
            {project.desc}
          </p>
          <TagList tags={project.techStacks} className='mt-7' />

          {hasControls && (
            <div className='border-outline-variant mt-auto flex items-center gap-3 border-t pt-7'>
              {hasMultiple && (
                <>
                  <button type='button' onClick={goPrevious} aria-label='Previous project' className='border-outline-variant text-on-surface hover:bg-surface-container-high flex size-11 items-center justify-center rounded-lg border transition-colors'>
                    <ChevronLeftIcon size={20} />
                  </button>
                  <span className='text-on-surface-variant font-mono text-xs'>
                    {index + 1} / {PROJECTS.length}
                  </span>
                  <button type='button' onClick={goNext} aria-label='Next project' className='border-outline-variant text-on-surface hover:bg-surface-container-high flex size-11 items-center justify-center rounded-lg border transition-colors'>
                    <ChevronRightIcon size={20} />
                  </button>
                </>
              )}
              {project.projectUrl && (
                <a href={project.projectUrl} target='_blank' rel='noopener noreferrer' aria-label={`Open ${project.title} in a new tab`} className='bg-tertiary text-on-tertiary ml-auto inline-flex items-center gap-2 rounded-lg px-4 py-3 font-semibold'>
                  Open project <ExternalLinkIcon size={18} />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
