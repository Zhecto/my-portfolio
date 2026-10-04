import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

import { cn } from '../lib/utils';

type RevealProps = {
  children: ReactNode;
  delay?: number;
};

const supportsObserver = () => typeof IntersectionObserver !== 'undefined';

export const Reveal = ({ children, delay = 0 }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  // Without IntersectionObserver there is nothing to wait for, so never hide content.
  const [shown, setShown] = useState(!supportsObserver);

  useEffect(() => {
    const node = ref.current;
    if (!node || shown) return;

    // threshold 0 rather than a ratio: tall sections would never reach a ratio.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setShown(true);
        observer.disconnect();
      },
      { threshold: 0 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [shown]);

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn(
        'motion-reduce:translate-y-0 motion-reduce:opacity-100 transition-[opacity,transform] duration-500 ease-out',
        shown ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0',
      )}
    >
      {children}
    </div>
  );
};