export const Backdrop = () => {
  return (
    <div aria-hidden='true' className='pointer-events-none fixed inset-0 -z-10 overflow-hidden'>
      <div className='signal-grid absolute inset-0 opacity-40' />
      <div className='bg-tertiary/10 absolute -top-52 right-[-12rem] size-[34rem] rounded-full blur-[110px]' />
      <div className='bg-primary-container/50 absolute top-1/2 -left-64 size-[34rem] rounded-full blur-[130px]' />
    </div>
  );
};
