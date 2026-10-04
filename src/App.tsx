
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

/**
 * Assets
 */

export const App = () => {
  return (
    <div className='bg-surface text-on-surface min-h-screen'>
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
};

export default App;
