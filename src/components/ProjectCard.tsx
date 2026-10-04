import { ArrowUpRightIcon } from 'lucide-react';

import type { Project } from '../types';

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { Icon, bg, title, desc, techStacks, projectUrl } = project;

  return (
    <article className='bg-surface-container-low border-outline-variant flex flex-col rounded-3xl border p-6'>
      <div
        className='flex size-12 items-center justify-center rounded-2xl'
        style={{ backgroundColor: bg }}
      >
        <Icon
          size={24}
          className='text-[#1d1b20]'
        />
      </div>

      <h3 className='text-on-surface mt-5 text-xl font-semibold'>{title}</h3>

      <p className='text-on-surface-variant mt-2 grow'>{desc}</p>

      <ul className='mt-5 flex flex-wrap gap-2'>
        {techStacks.map((stack) => (
          <li
            key={stack}
            className='bg-secondary-container text-on-secondary-container rounded-full px-3 py-1 text-xs'
          >
            {stack}
          </li>
        ))}
      </ul>

      {projectUrl && (
        <a
          href={projectUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='text-primary mt-5 inline-flex items-center gap-1 font-medium hover:underline'
        >
          View project
          <ArrowUpRightIcon size={16} />
        </a>
      )}
    </article>
  );
};