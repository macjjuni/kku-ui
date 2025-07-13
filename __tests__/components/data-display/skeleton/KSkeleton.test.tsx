import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { KSkeleton } from '@/components';

describe('KSkeleton', () => {

  it('renders the component without crashing', () => {
    // Arrange
    const borderRadius = '4px';
    render(<KSkeleton borderRadius={borderRadius}/>);

    // Act
    const skeleton = screen.getByRole('presentation', { hidden: true });

    // Assert
    expect(skeleton)
      .toBeInTheDocument();
  });

  it('applies className and animation props correctly', () => {
    // Arrange
    const borderRadius = '4px';
    const className = 'custom-class';
    const animation = 'wave';
    render(<KSkeleton borderRadius={borderRadius} className={className} animation={animation}/>);

    // Act
    const skeleton = screen.getByRole('presentation', { hidden: true });

    // Assert
    expect(skeleton)
      .toHaveClass('k-skeleton');
    expect(skeleton)
      .toHaveClass(className);
    expect(skeleton)
      .toHaveClass(`k-skeleton--${animation}`);
  });

  it('applies style props correctly', () => {
    // Arrange
    const borderRadius = '8px';
    const width = '200px';
    const height = '100px';
    const style = { background: 'red' };
    render(<KSkeleton borderRadius={borderRadius} width={width} height={height} style={style}/>);

    // Act
    const skeleton = screen.getByRole('presentation', { hidden: true });
    // Assert
    expect(skeleton)
      .toHaveStyle({ width, height, borderRadius, ...style });
  });

  it('triggers onClick event when clicked', async () => {
    // Arrange
    const borderRadius = '4px';
    const handleClick = vi.fn();
    const user = userEvent.setup();
    render(<KSkeleton borderRadius={borderRadius} onClick={handleClick}/>);

    // Act
    const skeleton = screen.getByRole('presentation', { hidden: true });
    await user.click(skeleton);

    // Assert
    expect(handleClick)
      .toHaveBeenCalledTimes(1);
  });
});
