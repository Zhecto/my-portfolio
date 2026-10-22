type SectionHeadingProps = {
  title: string;
  subtitle: string;
};

export const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  return (
    <div className='relative max-w-3xl'>
      <div aria-hidden='true' className='mb-5 flex items-center gap-3'>
        <span className='signal-node bg-tertiary size-2.5 rounded-full shadow-[0_0_15px_var(--tertiary)]' />
        <span className='bg-tertiary h-px w-14' />
        <span className='text-on-surface-variant font-mono text-xs tracking-[0.2em] uppercase'>Signal active</span>
      </div>
      <h2 className='text-on-surface text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.02] font-black tracking-[-0.055em]'>
        {title}
      </h2>
      <p className='text-on-surface-variant mt-4 max-w-xl text-lg leading-relaxed'>{subtitle}</p>
    </div>
  );
};
