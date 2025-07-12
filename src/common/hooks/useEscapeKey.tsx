import { useCallback, useEffect } from 'react';

const useEscapeKey = (callback: () => void) => {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      callback?.();
    }
  }, [callback]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]); // <- 이게 맞음
};

export default useEscapeKey;