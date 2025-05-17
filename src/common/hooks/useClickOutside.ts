import { RefObject, useEffect } from 'react';


export default function useClickOutside(
  ref: RefObject<HTMLElement | null>,
  callback: () => void,
  otherRef?: RefObject<HTMLElement | null>,
) {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {

      if (ref.current && !ref.current.contains(e.target as HTMLElement)) {

        if (!otherRef) {
          callback();
          return;
        }

        if (otherRef.current && !otherRef.current.contains(e.target as HTMLElement)) {
          callback();
        }
      }
    };
    setTimeout(() => {
      window.addEventListener('mousedown', handleClickOutside);
    }, 0);


    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}
