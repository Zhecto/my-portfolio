
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
import { Technologies } from './components/Technologies';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

/**
 * Assets
 */

export const App = () => {
  return (
    <div className='bg-surface text-on-surface min-h-screen'>
      <Navbar />
      <main>
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