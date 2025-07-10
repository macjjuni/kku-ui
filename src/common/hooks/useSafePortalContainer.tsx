import { useEffect, useState } from 'react';

/**
 * SSR-safe하게 기본 포탈 컨테이너 (`document.body`)를 반환
 */
export default function useSafePortalContainer(Element?: HTMLElement): HTMLElement | null {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setContainer(Element || document.body);
  }, []);

  return container;
}
