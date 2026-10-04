import { PROJECTS } from '../constants';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  return (
    <section
      id='projects'
      className='mx-auto max-w-5xl scroll-mt-16 px-6 py-16'
    >
      <h2 className='text-on-surface text-3xl font-bold'>Projects</h2>
      <p className='text-on-surface-variant mt-2'>
        A few things I've built and learned from.
      </p>

      <div className='mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
          />
        ))}
      </div>
    </section>
  );
};