import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { KPanel } from '@/components';

describe('KPanel', () => {
  it('renders children', () => {
    const content = 'KPanel content';
    render(<KPanel>{content}</KPanel>);
    expect(screen.getByText(content))
      .toBeInTheDocument();
  });

  it('merges custom styles with width and height', () => {
    const content = 'With merged styles';
    const width = 200;
    const height = 100;
    render(
      <KPanel width={width} height={height}>
        {content}
      </KPanel>,
    );
    const panel = screen.getByText(content);
    expect(panel)
      .toHaveStyle({ width: `${width}px`, height: `${height}px` });
  });
});
