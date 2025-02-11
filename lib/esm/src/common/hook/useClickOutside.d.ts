import { MutableRefObject } from 'react';
export default function useClickOutside(ref: MutableRefObject<HTMLElement | null>, callback: () => void): void;
