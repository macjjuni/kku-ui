import { describe, expect, it, vi } from 'vitest';
import { screen } from '@testing-library/react';
import {
  KDialog,
  KDialogTrigger,
  KDialogContent,
  KDialogHeader,
  KDialogFooter,
  KDialogTitle,
  KDialogDescription,
  KDialogClose,
  KDialogOverlay,
  KDialogPortal,
} from '@/components/ui/feedback/dialog/KDialog';
import { renderWithUser, waitForPortalRender, waitForPortalDisappear } from '@/test-utils';

// region [Helpers]
const DialogFixture = ({ size, children }: { size?: 'sm' | 'md'; children?: React.ReactNode }) => (
  <KDialog size={size}>
    <KDialogTrigger>열기</KDialogTrigger>
    <KDialogContent data-testid="dialog-content">
      <KDialogTitle>제목</KDialogTitle>
      <KDialogDescription>설명</KDialogDescription>
      {children}
    </KDialogContent>
  </KDialog>
);

const openDialog = async (user: ReturnType<typeof import('@testing-library/user-event').default.setup>) => {
  await user.click(screen.getByText('열기'));
  await screen.findByRole('dialog');
};
// endregion

describe('KDialog', () => {
  // region [Open/Close Tests]
  it('트리거 클릭 시 다이얼로그가 열려야 한다', async () => {
    const { user } = renderWithUser(<DialogFixture />);

    await user.click(screen.getByText('열기'));

    expect(await screen.findByText('제목')).toBeInTheDocument();
    expect(screen.getByText('설명')).toBeInTheDocument();
  });

  it('내장 닫기(X) 버튼 클릭 시 다이얼로그가 닫혀야 한다', async () => {
    const { user } = renderWithUser(<DialogFixture />);

    await openDialog(user);
    await user.click(screen.getByRole('button', { name: /close/i }));

    await waitForPortalDisappear(() => screen.queryByText('제목'));
  });

  it('ESC 키 입력 시 다이얼로그가 닫혀야 한다', async () => {
    const { user } = renderWithUser(<DialogFixture />);

    await openDialog(user);
    await user.keyboard('{Escape}');

    await waitForPortalDisappear(() => screen.queryByText('제목'));
  });

  it('defaultOpen 시 처음부터 열려있어야 한다', async () => {
    renderWithUser(
      <KDialog defaultOpen>
        <KDialogContent>
          <KDialogTitle>기본 오픈</KDialogTitle>
        </KDialogContent>
      </KDialog>,
    );

    expect(await screen.findByText('기본 오픈')).toBeInTheDocument();
  });

  it('onOpenChange가 열릴 때 true로 호출되어야 한다', async () => {
    const handleOpenChange = vi.fn();
    const { user } = renderWithUser(
      <KDialog onOpenChange={handleOpenChange}>
        <KDialogTrigger>열기</KDialogTrigger>
        <KDialogContent>
          <KDialogTitle>내용</KDialogTitle>
        </KDialogContent>
      </KDialog>,
    );

    await user.click(screen.getByText('열기'));

    expect(handleOpenChange).toHaveBeenCalledWith(true);
  });

  it('onOpenChange가 닫힐 때 false로 호출되어야 한다', async () => {
    const handleOpenChange = vi.fn();
    const { user } = renderWithUser(
      <KDialog onOpenChange={handleOpenChange}>
        <KDialogTrigger>열기</KDialogTrigger>
        <KDialogContent>
          <KDialogTitle>내용</KDialogTitle>
        </KDialogContent>
      </KDialog>,
    );

    await openDialog(user);
    handleOpenChange.mockClear();
    await user.keyboard('{Escape}');

    expect(handleOpenChange).toHaveBeenCalledWith(false);
  });
  // endregion

  // region [Size Context Tests]
  it('size="sm"일 때 content에 max-w-sm, p-4, gap-2, text-sm 클래스가 적용되어야 한다', async () => {
    const { user } = renderWithUser(<DialogFixture size="sm" />);

    await openDialog(user);

    expect(screen.getByTestId('dialog-content')).toHaveClass('max-w-sm', 'p-4', 'gap-2', 'text-sm');
  });

  it('size="md"일 때 content에 max-w-lg, p-6, gap-4, text-base 클래스가 적용되어야 한다 (기본값)', async () => {
    const { user } = renderWithUser(<DialogFixture size="md" />);

    await openDialog(user);

    expect(screen.getByTestId('dialog-content')).toHaveClass('max-w-lg', 'p-6', 'gap-4', 'text-base');
  });
  // endregion
});

describe('KDialogContent', () => {
  it('k-dialog__content 클래스가 적용되어야 한다', async () => {
    const { user } = renderWithUser(<DialogFixture />);

    await openDialog(user);

    expect(screen.getByTestId('dialog-content')).toHaveClass('k-dialog__content');
  });

  it('role="dialog" 속성이 설정되어야 한다', async () => {
    const { user } = renderWithUser(<DialogFixture />);

    await openDialog(user);

    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('children이 정상적으로 렌더링되어야 한다', async () => {
    const { user } = renderWithUser(
      <DialogFixture>
        <p>커스텀 내용</p>
      </DialogFixture>,
    );

    await openDialog(user);

    expect(screen.getByText('커스텀 내용')).toBeInTheDocument();
  });

  it('className prop이 적용되어야 한다', async () => {
    const { user } = renderWithUser(
      <KDialog>
        <KDialogTrigger>열기</KDialogTrigger>
        <KDialogContent className="custom-dialog">
          <KDialogTitle>제목</KDialogTitle>
        </KDialogContent>
      </KDialog>,
    );

    await openDialog(user);

    expect(screen.getByRole('dialog')).toHaveClass('custom-dialog');
  });

  it('내장 닫기 버튼이 k-dialog__close 클래스를 가져야 한다', async () => {
    const { user } = renderWithUser(<DialogFixture />);

    await openDialog(user);

    expect(screen.getByRole('button', { name: /close/i })).toHaveClass('k-dialog__close');
  });
});

describe('KDialogOverlay', () => {
  it('k-dialog__overlay 클래스가 적용되어야 한다', async () => {
    const { user } = renderWithUser(
      <KDialog>
        <KDialogTrigger>열기</KDialogTrigger>
        <KDialogPortal>
          <KDialogOverlay data-testid="overlay" />
          <KDialogContent>
            <KDialogTitle>제목</KDialogTitle>
          </KDialogContent>
        </KDialogPortal>
      </KDialog>,
    );

    await openDialog(user);

    expect(screen.getByTestId('overlay')).toHaveClass('k-dialog__overlay');
  });

  it('opacity prop이 overlay 배경색에 반영되어야 한다', async () => {
    const { user } = renderWithUser(
      <KDialog opacity={60}>
        <KDialogTrigger>열기</KDialogTrigger>
        <KDialogPortal>
          <KDialogOverlay data-testid="overlay" />
          <KDialogContent>
            <KDialogTitle>제목</KDialogTitle>
          </KDialogContent>
        </KDialogPortal>
      </KDialog>,
    );

    await openDialog(user);

    expect(screen.getByTestId('overlay')).toHaveStyle({
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
    });
  });

  it('blur prop을 설정해도 오류 없이 렌더링되어야 한다', async () => {
    // jsdom은 backdropFilter 인라인 스타일을 적용하지 않으므로 렌더링 여부만 검증
    const { user } = renderWithUser(
      <KDialog blur={8}>
        <KDialogTrigger>열기</KDialogTrigger>
        <KDialogPortal>
          <KDialogOverlay data-testid="overlay" />
          <KDialogContent>
            <KDialogTitle>제목</KDialogTitle>
          </KDialogContent>
        </KDialogPortal>
      </KDialog>,
    );

    await openDialog(user);

    expect(screen.getByTestId('overlay')).toBeInTheDocument();
  });
});

describe('KDialogHeader', () => {
  it('k-dialog__header 클래스가 적용되어야 한다', async () => {
    const { user } = renderWithUser(
      <KDialog>
        <KDialogTrigger>열기</KDialogTrigger>
        <KDialogContent>
          <KDialogHeader data-testid="header">
            <KDialogTitle>제목</KDialogTitle>
          </KDialogHeader>
        </KDialogContent>
      </KDialog>,
    );

    await openDialog(user);

    expect(screen.getByTestId('header')).toHaveClass('k-dialog__header');
  });

  it('size="sm"일 때 space-y-1 클래스가 적용되어야 한다', async () => {
    const { user } = renderWithUser(
      <KDialog size="sm">
        <KDialogTrigger>열기</KDialogTrigger>
        <KDialogContent>
          <KDialogHeader data-testid="header">
            <KDialogTitle>제목</KDialogTitle>
          </KDialogHeader>
        </KDialogContent>
      </KDialog>,
    );

    await openDialog(user);

    expect(screen.getByTestId('header')).toHaveClass('space-y-1');
  });

  it('size="md"일 때 space-y-1.5 클래스가 적용되어야 한다', async () => {
    const { user } = renderWithUser(
      <KDialog size="md">
        <KDialogTrigger>열기</KDialogTrigger>
        <KDialogContent>
          <KDialogHeader data-testid="header">
            <KDialogTitle>제목</KDialogTitle>
          </KDialogHeader>
        </KDialogContent>
      </KDialog>,
    );

    await openDialog(user);

    expect(screen.getByTestId('header')).toHaveClass('space-y-1.5');
  });
});

describe('KDialogFooter', () => {
  it('k-dialog__footer 클래스가 적용되어야 한다', async () => {
    const { user } = renderWithUser(
      <KDialog>
        <KDialogTrigger>열기</KDialogTrigger>
        <KDialogContent>
          <KDialogTitle>제목</KDialogTitle>
          <KDialogFooter data-testid="footer">푸터</KDialogFooter>
        </KDialogContent>
      </KDialog>,
    );

    await openDialog(user);

    expect(screen.getByTestId('footer')).toHaveClass('k-dialog__footer');
  });

  it('size="sm"일 때 mt-2 클래스가 적용되어야 한다', async () => {
    const { user } = renderWithUser(
      <KDialog size="sm">
        <KDialogTrigger>열기</KDialogTrigger>
        <KDialogContent>
          <KDialogTitle>제목</KDialogTitle>
          <KDialogFooter data-testid="footer">푸터</KDialogFooter>
        </KDialogContent>
      </KDialog>,
    );

    await openDialog(user);

    expect(screen.getByTestId('footer')).toHaveClass('mt-2');
  });

  it('size="md"일 때 mt-4 클래스가 적용되어야 한다', async () => {
    const { user } = renderWithUser(
      <KDialog size="md">
        <KDialogTrigger>열기</KDialogTrigger>
        <KDialogContent>
          <KDialogTitle>제목</KDialogTitle>
          <KDialogFooter data-testid="footer">푸터</KDialogFooter>
        </KDialogContent>
      </KDialog>,
    );

    await openDialog(user);

    expect(screen.getByTestId('footer')).toHaveClass('mt-4');
  });
});

describe('KDialogTitle', () => {
  it('k-dialog__title 클래스가 적용되어야 한다', async () => {
    const { user } = renderWithUser(<DialogFixture />);

    await openDialog(user);

    expect(screen.getByText('제목')).toHaveClass('k-dialog__title');
  });

  it('size="sm"일 때 text-base 클래스가 적용되어야 한다', async () => {
    const { user } = renderWithUser(<DialogFixture size="sm" />);

    await openDialog(user);

    expect(screen.getByText('제목')).toHaveClass('text-base');
  });

  it('size="md"일 때 text-lg 클래스가 적용되어야 한다', async () => {
    const { user } = renderWithUser(<DialogFixture size="md" />);

    await openDialog(user);

    expect(screen.getByText('제목')).toHaveClass('text-lg');
  });
});

describe('KDialogDescription', () => {
  it('k-dialog__description 클래스가 적용되어야 한다', async () => {
    const { user } = renderWithUser(<DialogFixture />);

    await openDialog(user);

    expect(screen.getByText('설명')).toHaveClass('k-dialog__description');
  });

  it('size="sm"일 때 text-xs 클래스가 적용되어야 한다', async () => {
    const { user } = renderWithUser(<DialogFixture size="sm" />);

    await openDialog(user);

    expect(screen.getByText('설명')).toHaveClass('text-xs');
  });

  it('size="md"일 때 text-sm 클래스가 적용되어야 한다', async () => {
    const { user } = renderWithUser(<DialogFixture size="md" />);

    await openDialog(user);

    expect(screen.getByText('설명')).toHaveClass('text-sm');
  });
});

describe('KDialogClose', () => {
  it('커스텀 닫기 버튼 클릭 시 다이얼로그가 닫혀야 한다', async () => {
    const { user } = renderWithUser(
      <KDialog>
        <KDialogTrigger>열기</KDialogTrigger>
        <KDialogContent>
          <KDialogTitle>제목</KDialogTitle>
          <KDialogClose>닫기</KDialogClose>
        </KDialogContent>
      </KDialog>,
    );

    await openDialog(user);
    await user.click(screen.getByText('닫기'));

    await waitForPortalDisappear(() => screen.queryByText('제목'));
  });

  it('asChild로 커스텀 버튼 렌더링이 가능해야 한다', async () => {
    const { user } = renderWithUser(
      <KDialog>
        <KDialogTrigger>열기</KDialogTrigger>
        <KDialogContent>
          <KDialogTitle>제목</KDialogTitle>
          <KDialogClose asChild>
            <button type="button" data-testid="custom-close">
              커스텀 닫기
            </button>
          </KDialogClose>
        </KDialogContent>
      </KDialog>,
    );

    await openDialog(user);
    await waitForPortalRender(() => screen.findByTestId('custom-close'));

    expect(screen.getByTestId('custom-close').tagName).toBe('BUTTON');
  });
});
