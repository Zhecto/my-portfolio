
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
import { Backdrop } from './components/Backdrop';
import { Hero } from './components/Hero';
import { ProjectShowcase } from './components/ProjectShowcase';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Technologies } from './components/Technologies';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

/**
 * Assets
 */

export const App = () => {
  return (
    <div className='bg-surface text-on-surface isolate min-h-screen overflow-x-clip'>
      <Backdrop />
      <Navbar />
      <main className='relative'>
        <div aria-hidden='true' className='signal-spine bg-outline-variant pointer-events-none absolute inset-y-0 z-0 w-px'>
          <div className='signal-spine-fill bg-tertiary h-full w-[3px] shadow-[0_0_15px_var(--tertiary)]' />
        </div>
        <Hero />
        <Technologies />
        <Experience />
        <ProjectShowcase />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
