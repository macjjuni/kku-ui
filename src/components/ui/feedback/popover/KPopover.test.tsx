import { render, screen, fireEvent } from "@testing-library/react";
import { expect, describe, it } from 'vitest';
import { KPopover, KPopoverTrigger, KPopoverContent } from "./KPopover";

describe("KPopover", () => {
  it("트리거를 클릭하면 컨텐츠가 나타나야 한다", async () => {
    render(
      <KPopover>
        <KPopoverTrigger>Open</KPopoverTrigger>
        <KPopoverContent>Popover Content</KPopoverContent>
      </KPopover>,
    );

    const trigger = screen.getByText("Open");
    fireEvent.click(trigger);

    // Radix UI는 비동기로 렌더링될 수 있으므로 findBy 사용 권장
    const content = await screen.findByText("Popover Content");
    expect(content).toBeInTheDocument();
  });

  it("side prop에 따라 data-side 속성이 올바르게 설정되어야 한다", async () => {
    render(
      <KPopover open>
        <KPopoverTrigger>Open</KPopoverTrigger>
        <KPopoverContent side="top" data-testid="popover-content">
          Content
        </KPopoverContent>
      </KPopover>,
    );

    const content = await screen.findByTestId("popover-content");
    expect(content).toHaveAttribute("data-side", "top");
  });
});