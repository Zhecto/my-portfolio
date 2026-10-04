
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
    // isolate so the negative-z backdrop paints above bg-surface instead of behind it
    <div className='bg-surface text-on-surface isolate min-h-screen'>
      <Backdrop />
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