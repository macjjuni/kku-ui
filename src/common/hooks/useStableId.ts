import { useId, useState, useEffect } from 'react';

/**
 * SSR 환경에서 Hydration Mismatch를 방지하며 안전한 ID를 생성하는 훅
 */
export default function useStableId(prefix?: string) {
  const reactId = useId();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const id = prefix ? `${prefix}-${reactId}` : reactId;

  return mounted ? id : undefined;
}