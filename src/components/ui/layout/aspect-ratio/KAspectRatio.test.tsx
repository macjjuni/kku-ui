
import { render, screen } from '@testing-library/react';
import { vi, describe, expect, it } from 'vitest';
import { KAspectRatio } from './KAspectRatio';

describe('KAspectRatio', () => {
  it('지정된 ratio가 스타일에 적용되어야 한다', () => {
    const ratio = 16 / 9;
    render(
      <KAspectRatio ratio={ratio} data-testid="aspect-ratio">
        <div>Content</div>
      </KAspectRatio>,
    );

    const element = screen.getByTestId('aspect-ratio');
    expect(element.style.aspectRatio)
      .toBe(ratio.toString());
  });

  it('자식 요소가 절대 경로(absolute) 영역 내에 렌더링되어야 한다', () => {
    render(
      <KAspectRatio>
        <img src="test.jpg" alt="test"/>
      </KAspectRatio>,
    );

    const img = screen.getByAltText('test');
    expect(img).toBeInTheDocument();
    expect(img.parentElement).toHaveClass('absolute', 'inset-0');
  });

  it("ratio가 0 또는 음수일 경우 console.warn을 호출하고 기본값 1을 적용해야 한다", () => {
    // console.warn 감시
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

    // 1. ratio가 0일 때 테스트
    const { rerender } = render(
      <KAspectRatio ratio={0} data-testid="aspect-ratio-error">
        <div>Error Test</div>
      </KAspectRatio>,
    );

    const element = screen.getByTestId("aspect-ratio-error");

    // 스타일이 1로 복구되었는지 확인
    expect(element.style.aspectRatio).toBe("1");
    // 경고 메시지가 출력되었는지 확인
    expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining("[KAspectRatio]"));

    // 2. ratio가 음수일 때 테스트
    rerender(
      <KAspectRatio ratio={-0.5} data-testid="aspect-ratio-error">
        <div>Error Test</div>
      </KAspectRatio>,
    );
    expect(element.style.aspectRatio).toBe("1");

    // 스파이 해제
    warnSpy.mockRestore();
  });

  it("유효한 ratio(16/9)가 들어오면 경고 없이 정상 적용되어야 한다", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

    render(
      <KAspectRatio ratio={16 / 9} data-testid="aspect-ratio-success">
        <div>Success Test</div>
      </KAspectRatio>,
    );

    const element = screen.getByTestId("aspect-ratio-success");
    expect(element.style.aspectRatio).toBe((16 / 9).toString());

    // 경고가 호출되지 않아야 함
    expect(warnSpy).not.toHaveBeenCalled();

    warnSpy.mockRestore();
  });
});