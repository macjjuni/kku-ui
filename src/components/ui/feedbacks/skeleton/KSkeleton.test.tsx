import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { KSkeleton } from './KSkeleton';

describe('KSkeleton', () => {
  it('기본 렌더링 시 animate-pulse와 bg-muted 클래스를 포함한다', () => {
    render(<KSkeleton data-testid="skeleton" />);

    const skeleton = screen.getByTestId('skeleton');

    expect(skeleton).toHaveClass('animate-pulse', 'bg-muted');
    // 기본 형상은 rounded-md여야 함
    expect(skeleton).toHaveClass('rounded-md');
  });

  it('circle 프로퍼티가 true일 때 rounded-full 클래스가 적용된다', () => {
    render(<KSkeleton circle data-testid="skeleton-circle" />);

    const skeleton = screen.getByTestId('skeleton-circle');

    expect(skeleton).toHaveClass('rounded-full');
    expect(skeleton).not.toHaveClass('rounded-md');
  });

  it('사용자가 주입한 커스텀 className이 기존 클래스와 병합된다', () => {
    render(<KSkeleton className="w-12 h-12 custom-class" data-testid="skeleton-custom" />);

    const skeleton = screen.getByTestId('skeleton-custom');

    expect(skeleton).toHaveClass('w-12', 'h-12', 'custom-class');
  });

  it('스크린 리더가 읽지 않도록 aria-hidden="true" 속성을 가진다', () => {
    render(<KSkeleton data-testid="skeleton-aria" />);

    const skeleton = screen.getByTestId('skeleton-aria');

    expect(skeleton).toHaveAttribute('aria-hidden', 'true');
  });
});