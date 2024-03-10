import { ReactNode } from 'react';

/* eslint-disable max-len */

interface Icons {
  [key: string]: ReactNode;
}

const kIcons: Icons = {
  close: (
    <svg viewBox='0 0 12 12' xmlns='http://www.w3.org/2000/svg'>
      <g strokeWidth='0' />
      <g strokeLinecap='round' strokeLinejoin='round' />
      <g>
        <path d='M5.997 6.784l4.454 4.359.787-.804-4.43-4.336 4.465-4.3-.78-.81-4.49 4.323L1.55.857l-.787.804 4.43 4.336-4.465 4.3.78.81 4.49-4.323z' />
      </g>
    </svg>
  ),
  arrow_up: (
    <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g strokeWidth='0' />
      <g strokeLinecap='round' strokeLinejoin='round' />
      <g>
        <path d='M12 5V19M12 5L6 11M12 5L18 11' stroke='#000000' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      </g>
    </svg>
  ),
  arrow_down: (
    <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
      <g strokeWidth='0' />
      <g strokeLinecap='round' strokeLinejoin='round' />
      <g>
        <path d='M12 5V19M12 19L6 13M12 19L18 13' stroke='#000000' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      </g>
    </svg>
  ),
  arrow_right: (
    <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
      <g strokeWidth='0' />
      <g strokeLinecap='round' strokeLinejoin='round' />
      <g>
        <path d='M6 12H18M18 12L13 7M18 12L13 17' stroke='#000000' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      </g>
    </svg>
  ),
  arrow_left: (
    <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
      <g strokeWidth='0' />
      <g strokeLinecap='round' strokeLinejoin='round' />
      <g>
        <path d='M6 12H18M6 12L11 7M6 12L11 17' stroke='#000000' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      </g>
    </svg>
  ),
  arrow_up_right: (
    <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g strokeWidth='0' />
      <g strokeLinecap='round' strokeLinejoin='round' />
      <g>
        <path d='M7 17L17 7M17 7H8M17 7V16' stroke='#000000' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      </g>
    </svg>
  ),
  arrow_up_left: (
    <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g strokeWidth='0' />
      <g strokeLinecap='round' strokeLinejoin='round' />
      <g>
        <path d='M17 17L7 7M7 7V16M7 7H16' stroke='#000000' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      </g>
    </svg>
  ),
  arrow_down_right: (
    <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g strokeWidth='0' />
      <g strokeLinecap='round' strokeLinejoin='round' />
      <g>
        <path d='M7 7L17 17M17 17V7M17 17H7' stroke='#000000' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      </g>
    </svg>
  ),
  arrow_down_left: (
    <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g strokeWidth='0' />
      <g strokeLinecap='round' strokeLinejoin='round' />
      <g>
        <path d='M17 7L7 17M7 17H17M7 17V7' stroke='#000000' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      </g>
    </svg>
  ),
  keyboard_arrow_down: (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none'>
      <g strokeWidth='0' />
      <g strokeLinecap='round' strokeLinejoin='round' />
      <g>
        <path d='M4 8L12 16L20 8' stroke='#000000' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      </g>
    </svg>
  ),
};

const getIcon = (iconName: string): ReactNode | null => {

  const targetIcon = kIcons[iconName];

  if (targetIcon) { return targetIcon; }

  return null;
};

export { kIcons, getIcon };
