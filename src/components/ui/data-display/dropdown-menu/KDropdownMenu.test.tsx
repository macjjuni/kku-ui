import { expect, describe, it } from 'vitest';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { KDropdownMenu, KDropdownMenuContent, KDropdownMenuItem, KDropdownMenuTrigger } from './KDropdownMenu';

describe('KDropdownMenu 상호작용 테스트', () => {

  it('사용자가 트리거를 클릭하면 메뉴 아이템이 나타난다', async () => {
    // 1. 개별 인스턴스 할당 (setup)
    const user = userEvent.setup();

    render(
      <KDropdownMenu>
        <KDropdownMenuTrigger>열기</KDropdownMenuTrigger>
        <KDropdownMenuContent>
          <KDropdownMenuItem>프로필</KDropdownMenuItem>
        </KDropdownMenuContent>
      </KDropdownMenu>,
    );

    const trigger = screen.getByRole('button', { name: '열기' });

    // 2. act를 사용한 이벤트 실행 (상태 변화 보장)
    await act(async () => {
      await user.click(trigger);
    });

    // 3. 검증
    const item = await screen.findByText('프로필');
    expect(item).toBeInTheDocument();
  });

  it('size="small"일 때 아이템에 올바른 클래스가 적용된다', async () => {
    const user = userEvent.setup();

    render(
      <KDropdownMenu size="sm">
        <KDropdownMenuTrigger>열기</KDropdownMenuTrigger>
        <KDropdownMenuContent>
          <KDropdownMenuItem>작은 아이템</KDropdownMenuItem>
        </KDropdownMenuContent>
      </KDropdownMenu>,
    );

    await act(async () => {
      await user.click(screen.getByText('열기'));
    });

    const item = screen.getByText('작은 아이템');
    // cva에서 정의한 small 전용 클래스 확인
    expect(item).toHaveClass('text-xs');
    expect(item).toHaveClass('py-1');
  });
});