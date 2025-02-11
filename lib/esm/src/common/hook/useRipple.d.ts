import { KeyboardEvent, MouseEvent, RefObject } from 'react';
export default function useRipple(elementRef: RefObject<HTMLElement | null>): {
    register: (event: MouseEvent | KeyboardEvent<HTMLElement>) => void;
    remove: () => void;
};
