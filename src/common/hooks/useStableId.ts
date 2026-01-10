import { useId } from 'react';

/**
 * SSR 환경에서 Hydration Mismatch를 방지하며 안전한 ID를 생성하는 훅
 */
export default function useStableId(prefix?: string) {
  const reactId = useId();

  return prefix ? `${prefix}-${reactId}` : reactId;
}