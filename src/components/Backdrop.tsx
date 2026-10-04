// Blobs sit behind every section, so they must never intercept clicks.
const BLOBS = [
  { size: 'size-[34rem]', position: '-top-40 -left-32', tint: 'bg-primary/25', duration: 26 },
  { size: 'size-[28rem]', position: 'top-1/3 -right-40', tint: 'bg-tertiary/20', duration: 34 },
  { size: 'size-[24rem]', position: 'bottom-0 left-1/3', tint: 'bg-primary-container/40', duration: 18 },
];

export const Backdrop = () => {
  return (
    <div
      aria-hidden='true'
      className='pointer-events-none fixed inset-0 -z-10 overflow-hidden'
    >
      {BLOBS.map(({ size, position, tint, duration }) => (
        <div
          key={position}
          className={`drift absolute ${size} ${position} ${tint} rounded-full blur-3xl`}
          style={{ animationDuration: `${duration}s` }}
        />
      ))}
    </div>
  );
};