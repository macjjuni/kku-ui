import { useId, useMemo } from 'react';

export default function useCleanId(text: string) {

  const rawId = useId().replace(/[^a-zA-Z0-9-_]/g, '');

  return useMemo(() => `${text}-${rawId}`, [rawId, text]);
}
