import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import Transition from '@/core/transition/Transition';


describe('Transition 컴포넌트 (리얼 타이머)', () => {
  beforeEach(() => {
    vi.useRealTimers();
  });

  it('isOpen이 true일 때 children이 렌더링된다', () => {
    render(
      <Transition isOpen>
        <div data-testid="content">열림</div>
      </Transition>,
    );
    expect(screen.getByTestId('content'))
      .toBeInTheDocument();
  });

  it('isOpen이 false일 때 children이 렌더링되지 않는다', async () => {
    const { rerender } = render(
      <Transition isOpen>
        <div data-testid="content">열림</div>
      </Transition>,
    );

    rerender(
      <Transition isOpen={false}>
        <div data-testid="content">닫힘</div>
      </Transition>,
    );

    // 애니메이션 종료 대기
    await new Promise((r) => { setTimeout(r, 350); }); // duration에 맞게 조절

    expect(screen.queryByTestId('content'))
      .toBeNull();
  });

  it('as prop에 따라 렌더링 태그가 변경된다', () => {
    render(
      <Transition isOpen as="section">
        <div data-testid="content">섹션</div>
      </Transition>,
    );

    const container = screen.getByTestId('content').parentElement;
    expect(container?.tagName.toLowerCase())
      .toBe('section');
  });
});
