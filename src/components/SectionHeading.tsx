type SectionHeadingProps = {
  title: string;
  subtitle: string;
};

export const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  return (
    <div>
      <h2 className='text-on-surface text-3xl font-bold tracking-tight'>
        {title}
      </h2>
      <p className='text-on-surface-variant mt-2'>{subtitle}</p>
    </div>
  );
};