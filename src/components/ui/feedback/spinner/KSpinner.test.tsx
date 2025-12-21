import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import { KSpinner } from "./KSpinner";

describe("KSpinner", () => {
  it("로딩 상태에 대한 접근성(role='status')을 가져야 한다", () => {
    render(<KSpinner />);
    // 이제 role="status"를 가진 div를 찾을 수 있습니다.
    const spinner = screen.getByRole("status");
    expect(spinner).toBeInTheDocument();

    // 내부 텍스트 확인
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("스크린 리더 사용자를 위한 'Loading...' 텍스트가 포함되어야 한다", () => {
    render(<KSpinner />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
    expect(screen.getByText("Loading...")).toHaveClass("sr-only");
  });

  it("size 속성에 따라 올바른 크기 클래스가 적용되어야 한다", () => {
    const { rerender } = render(<KSpinner size="sm" />);
    // Loader2 아이콘(svg)에 클래스가 붙으므로 querySelector로 확인
    expect(document.querySelector('svg')).toHaveClass("h-4", "w-4");

    rerender(<KSpinner size="xl" />);
    expect(document.querySelector('svg')).toHaveClass("h-12", "w-12");
  });

  it("사용자 정의 className이 정상적으로 병합되어야 한다", () => {
    render(<KSpinner className="text-primary custom-class" />);
    const svg = document.querySelector('svg');
    expect(svg).toHaveClass("text-primary", "custom-class", "animate-spin");
  });
});