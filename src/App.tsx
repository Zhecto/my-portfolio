
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

/**
 * Assets
 */

export const App = () => {
  return (
    <div className='bg-surface text-on-surface min-h-screen'>
      <Navbar />
      <main className='mx-auto max-w-5xl px-6 py-16'>
        <h1 className="text-3xl font-bold underline">
        Hello, I'm Keanu Sonn Fortaleza, a passionate software developer with a strong focus on creating innovative and efficient solutions. Welcome to my portfolio!
        </h1>
      </main>
    </div>
  );
};

export default App
