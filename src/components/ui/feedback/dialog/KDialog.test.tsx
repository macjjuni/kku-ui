import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { KDialog, KDialogContent, KDialogDescription, KDialogTitle, KDialogTrigger } from './KDialog';

describe("KDialog 상호작용 및 스타일 테스트", () => {
  const user = userEvent.setup();

  const DialogExample = ({ size = "md" }: { size?: "sm" | "md" }) => (
    <KDialog size={size}>
      <KDialogTrigger>열기</KDialogTrigger>
      <KDialogContent data-testid="dialog-content">
        <KDialogTitle>제목</KDialogTitle>
        <KDialogDescription>설명</KDialogDescription>
      </KDialogContent>
    </KDialog>
  );

  it("트리거 클릭 시 다이얼로그가 열리고 텍스트가 표시된다", async () => {
    render(<DialogExample />);

    await user.click(screen.getByText("열기"));

    // Portal 내부 요소는 findBy로 대기 후 확인
    expect(await screen.findByText("제목")).toBeInTheDocument();
    expect(screen.getByText("설명")).toBeInTheDocument();
  });

  it("size='sm'일 경우 적절한 클래스가 적용된다", async () => {
    render(<DialogExample size="sm" />);
    await user.click(screen.getByText("열기"));

    const content = await screen.findByTestId("dialog-content");
    const title = screen.getByText("제목");
    const description = screen.getByText("설명");

    // sm 사이즈 관련 클래스 검증
    expect(content).toHaveClass("max-w-sm", "p-4", "gap-2", "text-sm");
    expect(title).toHaveClass("text-base");
    expect(description).toHaveClass("text-xs");
  });

  it("size='md'일 경우 적절한 클래스가 적용된다 (기본값)", async () => {
    render(<DialogExample size="md" />);
    await user.click(screen.getByText("열기"));

    const content = await screen.findByTestId("dialog-content");
    const title = screen.getByText("제목");
    const description = screen.getByText("설명");

    // md 사이즈 관련 클래스 검증
    expect(content).toHaveClass("max-w-lg", "p-6", "gap-4", "text-md");
    expect(title).toHaveClass("text-lg");
    expect(description).toHaveClass("text-sm");
  });

  it("닫기 버튼 클릭 시 다이얼로그가 사라진다", async () => {
    render(<DialogExample />);
    await user.click(screen.getByText("열기"));

    const closeButton = await screen.findByRole("button", { name: /close/i });
    await user.click(closeButton);

    // 닫힌 후 문서에서 사라졌는지 확인
    expect(screen.queryByText("제목")).not.toBeInTheDocument();
  });

  it("ESC 키를 누르면 다이얼로그가 닫힌다", async () => {
    render(<DialogExample />);
    await user.click(screen.getByText("열기"));

    await screen.findByText("제목");
    await user.keyboard("{Escape}");

    expect(screen.queryByText("제목")).not.toBeInTheDocument();
  });
});