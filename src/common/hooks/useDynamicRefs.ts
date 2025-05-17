import { useRef, useCallback } from 'react';

export default function useDynamicRefs<T>() {

  const refs = useRef<T[]>([]);
  const keys = useRef<string[]>([]);

  const setRef = useCallback((key: string) => {

    return (ref: T) => {

      const keyIdx = keys.current.indexOf(key);

      if (keyIdx !== -1) {
        refs.current[keyIdx] = ref;
        return;
      }

      keys.current.push(key);
      refs.current.push(ref);
    };
  }, []);

  return { refs: refs.current, handleRef: setRef };
}
