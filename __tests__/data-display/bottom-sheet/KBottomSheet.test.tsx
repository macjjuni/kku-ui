import { describe, expect, it, vi } from 'vitest';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import {
  KBottomSheet,
  KBottomSheetTrigger,
  KBottomSheetContent,
  KBottomSheetHeader,
  KBottomSheetFooter,
  KBottomSheetTitle,
  KBottomSheetDescription,
  KBottomSheetClose,
} from '@/components/ui/data-display/bottom-sheet/KBottomSheet';
import { renderWithUser, } from '@/test-utils';

const BottomSheetExample = ({ size = 'md' }: { size?: 'sm' | 'md' }) => (
  <KBottomSheet size={size}>
    <KBottomSheetTrigger>시트 열기</KBottomSheetTrigger>
    <KBottomSheetContent data-testid="sheet-content">
      <KBottomSheetHeader>
        <KBottomSheetTitle>제목</KBottomSheetTitle>
        <KBottomSheetDescription>설명</KBottomSheetDescription>
      </KBottomSheetHeader>
      <KBottomSheetFooter data-testid="sheet-footer">
        <KBottomSheetClose>닫기</KBottomSheetClose>
      </KBottomSheetFooter>
    </KBottomSheetContent>
  </KBottomSheet>
);

describe('KBottomSheet', () => {

  // region [Open/Close Tests]
  it('트리거 클릭 시 바텀시트가 열려야 한다', async () => {
    const { user } = renderWithUser(<BottomSheetExample />);

    await user.click(screen.getByText('시트 열기'));

    expect(await screen.findByText('제목')).toBeInTheDocument();
    expect(screen.getByText('설명')).toBeInTheDocument();
  });

  it('닫기 버튼 클릭 시 onOpenChange(false)가 호출되어야 한다', async () => {
    const handleOpenChange = vi.fn();
    renderWithUser(
      <KBottomSheet defaultOpen onOpenChange={handleOpenChange}>
        <KBottomSheetContent>
          <KBottomSheetTitle>내용</KBottomSheetTitle>
          <KBottomSheetClose>닫기</KBottomSheetClose>
        </KBottomSheetContent>
      </KBottomSheet>,
    );

    await screen.findByText('닫기');
    // fireEvent.click: pointer 이벤트 없이 click만 발생시켜 vaul drag 로직을 우회
    fireEvent.click(screen.getByText('닫기'));

    await waitFor(() => {
      expect(handleOpenChange).toHaveBeenCalledWith(false);
    });
  });

  it('ESC 키 입력 시 onOpenChange(false)가 호출되어야 한다', async () => {
    const handleOpenChange = vi.fn();
    const { user } = renderWithUser(
      <KBottomSheet defaultOpen onOpenChange={handleOpenChange}>
        <KBottomSheetContent>
          <KBottomSheetTitle>내용</KBottomSheetTitle>
        </KBottomSheetContent>
      </KBottomSheet>,
    );

    await screen.findByText('내용');
    await user.keyboard('{Escape}');

    await waitFor(() => {
      expect(handleOpenChange).toHaveBeenCalledWith(false);
    });
  });

  it('defaultOpen 시 처음부터 열려있어야 한다', async () => {
    renderWithUser(
      <KBottomSheet defaultOpen>
        <KBottomSheetContent>
          <KBottomSheetTitle>기본 오픈</KBottomSheetTitle>
        </KBottomSheetContent>
      </KBottomSheet>,
    );

    expect(await screen.findByText('기본 오픈')).toBeInTheDocument();
  });

  it('onOpenChange가 열릴 때 호출되어야 한다', async () => {
    const handleOpenChange = vi.fn();
    const { user } = renderWithUser(
      <KBottomSheet onOpenChange={handleOpenChange}>
        <KBottomSheetTrigger>열기</KBottomSheetTrigger>
        <KBottomSheetContent>
          <KBottomSheetTitle>내용</KBottomSheetTitle>
        </KBottomSheetContent>
      </KBottomSheet>,
    );

    await user.click(screen.getByText('열기'));

    expect(handleOpenChange).toHaveBeenCalledWith(true);
  });
  // endregion

  // region [Size Variants Tests]
  it('size="md"일 때 content에 w-full 클래스가 적용되어야 한다 (기본값)', async () => {
    const { user } = renderWithUser(<BottomSheetExample size="md" />);

    await user.click(screen.getByText('시트 열기'));

    const content = await screen.findByTestId('sheet-content');
    expect(content).toHaveClass('w-full');
  });

  it('size="sm"일 때 content에 max-w-md mx-auto 클래스가 적용되어야 한다', async () => {
    const { user } = renderWithUser(<BottomSheetExample size="sm" />);

    await user.click(screen.getByText('시트 열기'));

    const content = await screen.findByTestId('sheet-content');
    expect(content).toHaveClass('max-w-md', 'mx-auto');
  });

  it('size="md"일 때 title에 text-lg 클래스가 적용되어야 한다', async () => {
    const { user } = renderWithUser(<BottomSheetExample size="md" />);

    await user.click(screen.getByText('시트 열기'));
    await screen.findByText('제목');

    expect(screen.getByText('제목')).toHaveClass('text-lg');
  });

  it('size="sm"일 때 title에 text-base 클래스가 적용되어야 한다', async () => {
    const { user } = renderWithUser(<BottomSheetExample size="sm" />);

    await user.click(screen.getByText('시트 열기'));
    await screen.findByText('제목');

    expect(screen.getByText('제목')).toHaveClass('text-base');
  });

  it('size="md"일 때 description에 text-sm 클래스가 적용되어야 한다', async () => {
    const { user } = renderWithUser(<BottomSheetExample size="md" />);

    await user.click(screen.getByText('시트 열기'));
    await screen.findByText('설명');

    expect(screen.getByText('설명')).toHaveClass('text-sm');
  });

  it('size="sm"일 때 description에 text-xs 클래스가 적용되어야 한다', async () => {
    const { user } = renderWithUser(<BottomSheetExample size="sm" />);

    await user.click(screen.getByText('시트 열기'));
    await screen.findByText('설명');

    expect(screen.getByText('설명')).toHaveClass('text-xs');
  });

  it('size="md"일 때 footer에 mt-4 클래스가 적용되어야 한다', async () => {
    const { user } = renderWithUser(<BottomSheetExample size="md" />);

    await user.click(screen.getByText('시트 열기'));
    await screen.findByTestId('sheet-footer');

    expect(screen.getByTestId('sheet-footer')).toHaveClass('mt-4');
  });

  it('size="sm"일 때 footer에 mt-2 클래스가 적용되어야 한다', async () => {
    const { user } = renderWithUser(<BottomSheetExample size="sm" />);

    await user.click(screen.getByText('시트 열기'));
    await screen.findByTestId('sheet-footer');

    expect(screen.getByTestId('sheet-footer')).toHaveClass('mt-2');
  });
  // endregion

});

describe('KBottomSheetContent', () => {

  // region [Rendering Tests]
  it('열렸을 때 k-bottom-sheet__content 클래스가 적용되어야 한다', async () => {
    const { user } = renderWithUser(
      <KBottomSheet>
        <KBottomSheetTrigger>열기</KBottomSheetTrigger>
        <KBottomSheetContent data-testid="content">내용</KBottomSheetContent>
      </KBottomSheet>,
    );

    await user.click(screen.getByText('열기'));

    const content = await screen.findByTestId('content');
    expect(content).toHaveClass('k-bottom-sheet__content');
  });

  it('children이 정상적으로 렌더링되어야 한다', async () => {
    const { user } = renderWithUser(
      <KBottomSheet>
        <KBottomSheetTrigger>열기</KBottomSheetTrigger>
        <KBottomSheetContent>
          <p>콘텐츠 내용</p>
        </KBottomSheetContent>
      </KBottomSheet>,
    );

    await user.click(screen.getByText('열기'));

    expect(await screen.findByText('콘텐츠 내용')).toBeInTheDocument();
  });
  // endregion

});

describe('KBottomSheetHeader', () => {

  it('k-bottom-sheet__header 클래스가 적용되어야 한다', async () => {
    renderWithUser(
      <KBottomSheet defaultOpen>
        <KBottomSheetContent>
          <KBottomSheetHeader data-testid="header">헤더</KBottomSheetHeader>
        </KBottomSheetContent>
      </KBottomSheet>,
    );

    expect(await screen.findByTestId('header')).toHaveClass('k-bottom-sheet__header');
  });

});

describe('KBottomSheetFooter', () => {

  it('k-bottom-sheet__footer 클래스가 적용되어야 한다', async () => {
    renderWithUser(
      <KBottomSheet defaultOpen>
        <KBottomSheetContent>
          <KBottomSheetFooter data-testid="footer">푸터</KBottomSheetFooter>
        </KBottomSheetContent>
      </KBottomSheet>,
    );

    expect(await screen.findByTestId('footer')).toHaveClass('k-bottom-sheet__footer');
  });

});

describe('KBottomSheetTitle', () => {

  it('k-bottom-sheet__title 클래스가 적용되어야 한다', async () => {
    renderWithUser(
      <KBottomSheet defaultOpen>
        <KBottomSheetContent>
          <KBottomSheetTitle>타이틀</KBottomSheetTitle>
        </KBottomSheetContent>
      </KBottomSheet>,
    );

    expect(await screen.findByText('타이틀')).toHaveClass('k-bottom-sheet__title');
  });

});

describe('KBottomSheetDescription', () => {

  it('k-bottom-sheet__description 클래스가 적용되어야 한다', async () => {
    renderWithUser(
      <KBottomSheet defaultOpen>
        <KBottomSheetContent>
          <KBottomSheetDescription>설명 텍스트</KBottomSheetDescription>
        </KBottomSheetContent>
      </KBottomSheet>,
    );

    expect(await screen.findByText('설명 텍스트')).toHaveClass('k-bottom-sheet__description');
  });

});
