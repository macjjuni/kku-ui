import { RefObject, useEffect, useState } from 'react';
import { KDropdownOffsetType, KDropdownPositionType } from '../../../legacy/data-display/dropdown/KDropdown.interface';


interface Position {
  top: number;
  left: number;
}

interface UseDropdownPositionParams {
  triggerRef: RefObject<HTMLElement | null>;
  contentRef: RefObject<HTMLElement | null>;
  position: KDropdownPositionType;
  open: boolean;
  offset?: KDropdownOffsetType;
  gap?: number;
}

export default function useDropdownPosition({
  triggerRef,
  contentRef,
  position,
  open,
  offset = { x: 0, y: 0 },
  gap = 0,
}: UseDropdownPositionParams): Position {
  const [coords, setCoords] = useState<Position>({ top: 0, left: 0 });

  useEffect(() => {
    const updatePosition = () => {
      const trigger = triggerRef.current;
      const content = contentRef.current;

      if (!trigger || !content) return;

      const triggerRect = trigger.getBoundingClientRect();
      const contentRect = content.getBoundingClientRect();

      const cw = contentRect.width;
      const ch = contentRect.height;

      let top = 0;
      let left = 0;

      switch (position) {
        case 'top-start':
          top = triggerRect.top - ch - gap;
          left = triggerRect.left;
          break;
        case 'top':
          top = triggerRect.top - ch - gap;
          left = triggerRect.left + triggerRect.width / 2 - cw / 2;
          break;
        case 'top-end':
          top = triggerRect.top - ch - gap;
          left = triggerRect.right - cw;
          break;

        case 'bottom-start':
          top = triggerRect.bottom + gap;
          left = triggerRect.left;
          break;
        case 'bottom':
          top = triggerRect.bottom + gap;
          left = triggerRect.left + triggerRect.width / 2 - cw / 2;
          break;
        case 'bottom-end':
          top = triggerRect.bottom + gap;
          left = triggerRect.right - cw;
          break;

        case 'left-start':
          top = triggerRect.top;
          left = triggerRect.left - cw - gap;
          break;
        case 'left':
          top = triggerRect.top + triggerRect.height / 2 - ch / 2;
          left = triggerRect.left - cw - gap;
          break;
        case 'left-end':
          top = triggerRect.bottom - ch;
          left = triggerRect.left - cw - gap;
          break;

        case 'right-start':
          top = triggerRect.top;
          left = triggerRect.right + gap;
          break;
        case 'right':
          top = triggerRect.top + triggerRect.height / 2 - ch / 2;
          left = triggerRect.right + gap;
          break;
        case 'right-end':
          top = triggerRect.bottom - ch;
          left = triggerRect.right + gap;
          break;
      }

      setCoords({
        top: top + offset.y,
        left: left + offset.x,
      });
    };

    updatePosition();
    window.addEventListener('scroll', updatePosition, true);
    window.addEventListener('resize', updatePosition);

    return () => {
      window.removeEventListener('scroll', updatePosition, true);
      window.removeEventListener('resize', updatePosition);
    };
  }, [triggerRef, contentRef, position, open, offset.x, offset.y, gap]);

  return coords;
}
