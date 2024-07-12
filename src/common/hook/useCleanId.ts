import { useId, useMemo } from 'react';

export function useCleanId(text: string) {

  const rawId = useId().replace(/[^a-zA-Z0-9-_]/g, '');

  return useMemo(() => `${text}-${rawId}`, [rawId, text]);
}
