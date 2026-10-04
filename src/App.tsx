
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
import { Projects } from './components/Projects';

/**
 * Assets
 */

export const App = () => {
  return (
    <div className='bg-surface text-on-surface min-h-screen'>
      <Navbar />
      <main>
        <Hero />
        <Projects />
      </main>
    </div>
  );
};

export default App;
