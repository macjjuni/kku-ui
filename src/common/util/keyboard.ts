import { KeyboardEvent } from 'react';

export const handleKeyInteraction = (e: KeyboardEvent<HTMLElement> | KeyboardEvent, callback: () => void) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault(); // 기본 동작 방지 (예: 스크롤)
    callback?.();
  }
};