import { XIcon } from 'lucide-react';
import { useEffect, useRef } from 'react';

type ImageModalProps = {
  src: string;
  title: string;
  onClose: () => void;
};

export const ImageModal = ({ src, title, onClose }: ImageModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();

    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const close = () => dialogRef.current?.close();

  return (
    <dialog
      ref={dialogRef}
      aria-label={title}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) close();
      }}
      className='bg-surface-container text-on-surface m-auto max-h-[90vh] w-[calc(100%-2rem)] max-w-4xl overflow-auto rounded-3xl p-0 backdrop:bg-black/70'
    >
      <div className='p-4'>
        <div className='mb-3 flex items-center justify-between gap-4'>
          <h3 className='text-lg font-semibold'>{title}</h3>
          <button
            type='button'
            onClick={close}
            aria-label='Close certificate'
            className='text-on-surface-variant hover:bg-surface-container-high rounded-full p-2 transition-colors'
          >
            <XIcon size={20} />
          </button>
        </div>

        <img
          src={src}
          alt={`${title} certificate`}
          className='mx-auto max-h-[75vh] w-auto max-w-full rounded-xl'
        />
      </div>
    </dialog>
  );
};