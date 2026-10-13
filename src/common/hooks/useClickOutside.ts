import { type RefObject, useEffect, useRef } from 'react';

export default function useClickOutside(
  ref: RefObject<HTMLElement | null>,
  callback: () => void,
  otherRef?: RefObject<HTMLElement | null>,
) {
  // 최신 callback을 참조해 리스너 재등록 없이 stale closure를 방지
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as HTMLElement)) {
        if (!otherRef) {
          callbackRef.current();
          return;
        }

        if (otherRef.current && !otherRef.current.contains(e.target as HTMLElement)) {
          callbackRef.current();
        }
      }
    };

    // 훅을 활성화한 클릭이 곧바로 callback을 호출하지 않도록 등록을 다음 틱으로 미룸
    const timer = setTimeout(() => {
      window.addEventListener('mousedown', handleClickOutside);
    }, 0);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, otherRef]);
}
