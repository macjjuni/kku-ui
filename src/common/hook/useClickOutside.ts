import { MutableRefObject, useEffect } from 'react';

export default function useClickOutside(
  ref: MutableRefObject<HTMLElement | null>,
  callback: () => void,
) {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as HTMLElement)) {
        callback();
      }
    };

    window.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}
