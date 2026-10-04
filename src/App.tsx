
/**
 * Node modules
 */

/**
 * Custom modules
 */
//import { cn } from './lib/utils';

/**
 * Hooks
 */
//import { useEffect, useState } from 'react';


/**
 * Components
 */
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectShowcase } from './components/ProjectShowcase';
import { Education } from './components/Education';
import { Experience } from './components/Experience';

/**
 * Assets
 */

export const App = () => {
  return (
    <div className='bg-surface text-on-surface min-h-screen'>
      <Navbar />
      <main>
        <Hero />
        <ProjectShowcase />
        <Experience />
        <Education />
      </main>
    </div>
  );
};

export default App;