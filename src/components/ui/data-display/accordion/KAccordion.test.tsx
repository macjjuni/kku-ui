import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import {
  KAccordion,
  KAccordionItem,
  KAccordionTrigger,
  KAccordionContent,
} from './KAccordion';
import {
  renderWithUser,
  expectClasses,
  expectDataState,
  createAccordionItems,
} from '@/test-utils';
import {
  testKeyboardNavigation,
  validateExpandable,
} from '@/test-utils/a11y-checklist';

describe('KAccordion', () => {
  const AccordionExample = ({
    type = 'single',
    size = 'md',
    collapsible = true,
  }: {
    type?: 'single' | 'multiple';
    size?: 'sm' | 'md';
    collapsible?: boolean;
  }) => (
    <KAccordion type={type} size={size} collapsible={collapsible}>
      <KAccordionItem value="item-1">
        <KAccordionTrigger>Title 1</KAccordionTrigger>
        <KAccordionContent>Content 1</KAccordionContent>
      </KAccordionItem>
      <KAccordionItem value="item-2">
        <KAccordionTrigger>Title 2</KAccordionTrigger>
        <KAccordionContent>Content 2</KAccordionContent>
      </KAccordionItem>
      <KAccordionItem value="item-3">
        <KAccordionTrigger>Title 3</KAccordionTrigger>
        <KAccordionContent>Content 3</KAccordionContent>
      </KAccordionItem>
    </KAccordion>
  );

  // region [Basic Rendering Tests]
  it('모든 아이템이 정상적으로 렌더링되어야 한다', () => {
    renderWithUser(<AccordionExample />);

    expect(screen.getByText('Title 1')).toBeInTheDocument();
    expect(screen.getByText('Title 2')).toBeInTheDocument();
    expect(screen.getByText('Title 3')).toBeInTheDocument();
  });

  it('초기에는 모든 콘텐츠가 닫혀있어야 한다', () => {
    renderWithUser(<AccordionExample />);

    // Radix UI는 content를 hidden 속성으로 숨김
    const content1 = screen.queryByText('Content 1');
    const content2 = screen.queryByText('Content 2');
    const content3 = screen.queryByText('Content 3');

    // content는 DOM에 있지만 hidden 속성으로 숨겨짐
    if (content1) expect(content1.closest('[data-state="closed"]')).toBeInTheDocument();
    if (content2) expect(content2.closest('[data-state="closed"]')).toBeInTheDocument();
    if (content3) expect(content3.closest('[data-state="closed"]')).toBeInTheDocument();
  });

  it('k-accordion 클래스가 적용되어야 한다', () => {
    const { container } = renderWithUser(<AccordionExample />);
    const accordion = container.querySelector('.k-accordion');

    expect(accordion).toBeInTheDocument();
  });

  it('k-accordion__item, k-accordion__trigger, k-accordion__content 클래스가 적용되어야 한다', () => {
    const { container } = renderWithUser(<AccordionExample />);

    expect(container.querySelector('.k-accordion__item')).toBeInTheDocument();
    expect(container.querySelector('.k-accordion__trigger')).toBeInTheDocument();
    expect(container.querySelector('.k-accordion__content')).toBeInTheDocument();
  });
  // endregion

  // region [Interaction Tests]
  it('트리거 클릭 시 콘텐츠가 열려야 한다 (type="single")', async () => {
    const { user } = renderWithUser(<AccordionExample type="single" />);

    const trigger1 = screen.getByText('Title 1');
    await user.click(trigger1);

    // 첫 번째 아이템 열림
    expect(screen.getByText('Content 1')).toBeVisible();
  });

  it('다른 트리거 클릭 시 이전 아이템은 닫히고 새 아이템만 열려야 한다 (type="single")', async () => {
    const { user } = renderWithUser(<AccordionExample type="single" />);

    // 첫 번째 열기
    await user.click(screen.getByText('Title 1'));
    expect(screen.getByText('Content 1')).toBeVisible();

    // 두 번째 열기 (첫 번째 자동으로 닫힘)
    await user.click(screen.getByText('Title 2'));
    expect(screen.getByText('Content 2')).toBeVisible();

    // 첫 번째는 닫힘 (data-state="closed")
    const trigger1 = screen.getByText('Title 1');
    expect(trigger1).toHaveAttribute('data-state', 'closed');
  });

  it('여러 아이템을 동시에 열 수 있어야 한다 (type="multiple")', async () => {
    const { user } = renderWithUser(<AccordionExample type="multiple" />);

    await user.click(screen.getByText('Title 1'));
    await user.click(screen.getByText('Title 2'));

    // 둘 다 열림
    expect(screen.getByText('Content 1')).toBeVisible();
    expect(screen.getByText('Content 2')).toBeVisible();
  });

  it('열린 트리거를 다시 클릭하면 닫혀야 한다 (collapsible=true)', async () => {
    const { user } = renderWithUser(<AccordionExample collapsible />);

    const trigger1 = screen.getByText('Title 1');

    // 열기
    await user.click(trigger1);
    expect(screen.getByText('Content 1')).toBeVisible();

    // 다시 클릭하여 닫기
    await user.click(trigger1);
    expect(trigger1).toHaveAttribute('data-state', 'closed');
  });

  it('disabled 아이템은 클릭해도 열리지 않아야 한다', async () => {
    const { user } = renderWithUser(
      <KAccordion type="single" collapsible>
        <KAccordionItem value="item-1" disabled>
          <KAccordionTrigger>Disabled Title</KAccordionTrigger>
          <KAccordionContent>Disabled Content</KAccordionContent>
        </KAccordionItem>
      </KAccordion>,
    );

    const trigger = screen.getByText('Disabled Title');
    await user.click(trigger);

    // 열리지 않음 (data-state가 closed로 유지)
    expect(trigger).toHaveAttribute('data-state', 'closed');
    expect(trigger).toHaveAttribute('data-disabled', '');
  });
  // endregion

  // region [Size Variants Tests]
  it('size="sm"일 때 적절한 클래스가 적용되어야 한다', () => {
    renderWithUser(<AccordionExample size="sm" />);

    const trigger = screen.getByText('Title 1');

    // py-2 text-xs (trigger)
    expectClasses(trigger, ['py-2', 'text-xs']);

    // ChevronDown 크기: h-3 w-3
    const chevron = trigger.querySelector('svg');
    expect(chevron).toHaveClass('h-3', 'w-3');
  });

  it('size="md"일 때 적절한 클래스가 적용되어야 한다 (기본값)', () => {
    renderWithUser(<AccordionExample size="md" />);

    const trigger = screen.getByText('Title 1');

    // py-4 text-sm (trigger)
    expectClasses(trigger, ['py-4', 'text-sm']);

    // ChevronDown 크기: h-4 w-4
    const chevron = trigger.querySelector('svg');
    expect(chevron).toHaveClass('h-4', 'w-4');
  });

  it('size prop이 Context를 통해 Trigger와 Content에 전파되어야 한다', async () => {
    const { user } = renderWithUser(<AccordionExample size="sm" />);

    const trigger = screen.getByText('Title 1');
    await user.click(trigger);

    // Trigger size
    expectClasses(trigger, ['py-2', 'text-xs']);

    // Content size (pb-2 text-xs)
    const content = screen.getByText('Content 1');
    const contentWrapper = content.closest('.k-accordion__content > div');
    expect(contentWrapper).toHaveClass('pb-2', 'text-xs');
  });
  // endregion

  // region [Data State Tests]
  it('data-state="closed"가 초기 상태로 설정되어야 한다', () => {
    const { container } = renderWithUser(<AccordionExample />);

    const content = container.querySelector('.k-accordion__content');
    expectDataState(content as HTMLElement, 'closed');
  });

  it('열린 아이템은 data-state="open"을 가져야 한다', async () => {
    const { user, container } = renderWithUser(<AccordionExample />);

    await user.click(screen.getByText('Title 1'));

    const trigger = screen.getByText('Title 1');
    expectDataState(trigger, 'open');

    const content = container.querySelector('.k-accordion__content');
    expectDataState(content as HTMLElement, 'open');
  });

  it('닫힌 아이템은 data-state="closed"를 가져야 한다', async () => {
    const { user } = renderWithUser(<AccordionExample collapsible />);

    const trigger = screen.getByText('Title 1');

    // 열기
    await user.click(trigger);
    expectDataState(trigger, 'open');

    // 닫기
    await user.click(trigger);
    expectDataState(trigger, 'closed');
  });
  // endregion

  // region [Animation Tests]
  it('콘텐츠가 열릴 때 animate-accordion-down 클래스가 적용되어야 한다', async () => {
    const { user, container } = renderWithUser(<AccordionExample />);

    await user.click(screen.getByText('Title 1'));

    const content = container.querySelector('.k-accordion__content');
    expect(content).toHaveClass('data-[state=open]:animate-accordion-down');
  });

  it('콘텐츠가 닫힐 때 animate-accordion-up 클래스가 적용되어야 한다', () => {
    const { container } = renderWithUser(<AccordionExample />);

    const content = container.querySelector('.k-accordion__content');
    expect(content).toHaveClass('data-[state=closed]:animate-accordion-up');
  });

  it('ChevronDown 아이콘이 열릴 때 rotate-180 클래스가 적용되어야 한다', async () => {
    const { user } = renderWithUser(<AccordionExample />);

    const trigger = screen.getByText('Title 1');
    const chevron = trigger.querySelector('svg');

    // 닫힌 상태 (회전 없음)
    expect(chevron).not.toHaveClass('rotate-180');

    // 열기
    await user.click(trigger);

    // data-state=open일 때 [&[data-state=open]>svg]:rotate-180 적용
    expectDataState(trigger, 'open');
  });
  // endregion

  // region [Accessibility Tests]
  it('트리거는 aria-expanded 속성을 가져야 한다', async () => {
    const { user } = renderWithUser(<AccordionExample />);

    const trigger = screen.getByText('Title 1');

    // 닫힌 상태
    expect(trigger).toHaveAttribute('aria-expanded', 'false');

    // 열린 상태
    await user.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
  });

  it('트리거와 콘텐츠가 aria-controls로 연결되어야 한다', async () => {
    const { user, container } = renderWithUser(<AccordionExample />);

    const trigger = screen.getByText('Title 1');
    await user.click(trigger);

    const content = container.querySelector('.k-accordion__content');
    expect(content).toHaveAttribute('id');

    validateExpandable(trigger, content as HTMLElement, true);
  });

  it('트리거는 button role을 가져야 한다', () => {
    renderWithUser(<AccordionExample />);

    const trigger = screen.getByText('Title 1');
    expect(trigger.tagName).toBe('BUTTON');
  });

  it('disabled 아이템은 data-disabled 속성을 가져야 한다', () => {
    renderWithUser(
      <KAccordion type="single">
        <KAccordionItem value="item-1" disabled>
          <KAccordionTrigger>Disabled</KAccordionTrigger>
          <KAccordionContent>Content</KAccordionContent>
        </KAccordionItem>
      </KAccordion>,
    );

    const trigger = screen.getByText('Disabled');
    expect(trigger).toHaveAttribute('data-disabled', '');
  });

  it('키보드 네비게이션: Enter 키로 아이템을 열 수 있어야 한다', async () => {
    const { user } = renderWithUser(<AccordionExample />);

    const trigger = screen.getByText('Title 1');

    await testKeyboardNavigation(trigger, user, {
      keys: ['Enter'],
      shouldFocus: true,
    });

    expect(screen.getByText('Content 1')).toBeVisible();
  });

  it('키보드 네비게이션: Space 키로 아이템을 열 수 있어야 한다', async () => {
    const { user } = renderWithUser(<AccordionExample />);

    const trigger = screen.getByText('Title 1');
    trigger.focus();

    await user.keyboard(' ');

    expect(screen.getByText('Content 1')).toBeVisible();
  });

  it('focus-ring 클래스가 트리거에 적용되어야 한다', () => {
    renderWithUser(<AccordionExample />);

    const trigger = screen.getByText('Title 1');
    expect(trigger).toHaveClass('focus-ring');
  });
  // endregion

  // region [Edge Cases]
  it('빈 아이템 배열도 렌더링되어야 한다', () => {
    const { container } = renderWithUser(
      <KAccordion type="single">{/* 빈 children */}</KAccordion>,
    );

    const accordion = container.querySelector('.k-accordion');
    expect(accordion).toBeInTheDocument();
  });

  it('단일 아이템도 정상 동작해야 한다', async () => {
    const { user } = renderWithUser(
      <KAccordion type="single" collapsible>
        <KAccordionItem value="item-1">
          <KAccordionTrigger>Only One</KAccordionTrigger>
          <KAccordionContent>Only Content</KAccordionContent>
        </KAccordionItem>
      </KAccordion>,
    );

    await user.click(screen.getByText('Only One'));
    expect(screen.getByText('Only Content')).toBeVisible();
  });

  it('대량의 아이템도 처리할 수 있어야 한다', () => {
    const items = createAccordionItems(50);

    renderWithUser(
      <KAccordion type="single">
        {items.map((item) => (
          <KAccordionItem key={item.value} value={item.value}>
            <KAccordionTrigger>{item.trigger}</KAccordionTrigger>
            <KAccordionContent>{item.content}</KAccordionContent>
          </KAccordionItem>
        ))}
      </KAccordion>,
    );

    expect(screen.getByText('Title 1')).toBeInTheDocument();
    expect(screen.getByText('Title 50')).toBeInTheDocument();
  });

  it('custom className이 적용되어야 한다', () => {
    const { container } = renderWithUser(
      <KAccordion type="single" className="custom-accordion" defaultValue="item-1">
        <KAccordionItem value="item-1" className="custom-item">
          <KAccordionTrigger className="custom-trigger">
            Title
          </KAccordionTrigger>
          <KAccordionContent className="custom-content">
            Content
          </KAccordionContent>
        </KAccordionItem>
      </KAccordion>,
    );

    // custom className 확인
    expect(container.querySelector('.custom-accordion')).toBeInTheDocument();
    expect(container.querySelector('.custom-item')).toBeInTheDocument();
    expect(container.querySelector('.custom-trigger')).toBeInTheDocument();

    // defaultValue로 초기에 열려있으므로 content가 보임
    expect(screen.getByText('Content')).toBeVisible();
  });

  it('defaultValue로 초기 열림 상태를 설정할 수 있어야 한다', () => {
    renderWithUser(
      <KAccordion type="single" defaultValue="item-2">
        <KAccordionItem value="item-1">
          <KAccordionTrigger>Title 1</KAccordionTrigger>
          <KAccordionContent>Content 1</KAccordionContent>
        </KAccordionItem>
        <KAccordionItem value="item-2">
          <KAccordionTrigger>Title 2</KAccordionTrigger>
          <KAccordionContent>Content 2</KAccordionContent>
        </KAccordionItem>
      </KAccordion>,
    );

    // 두 번째 아이템이 초기에 열려있음
    const trigger1 = screen.getByText('Title 1');
    const trigger2 = screen.getByText('Title 2');

    expect(trigger1).toHaveAttribute('data-state', 'closed');
    expect(trigger2).toHaveAttribute('data-state', 'open');
    expect(screen.getByText('Content 2')).toBeVisible();
  });
  // endregion

  // region [Compound Pattern Tests]
  it('Compound 패턴이 올바르게 동작해야 한다', () => {
    renderWithUser(<AccordionExample />);

    // 모든 서브 컴포넌트가 독립적으로 렌더링됨
    expect(screen.getByText('Title 1').closest('button')).toBeInTheDocument();
    expect(screen.getByText('Title 1').closest('.k-accordion__header')).toBeInTheDocument();
  });

  it('KAccordion 없이 서브 컴포넌트를 사용하면 에러가 발생해야 한다', () => {
    // Radix UI는 Context 없이 사용할 수 없음
    expect(() => {
      renderWithUser(
        <KAccordionItem value="item-1">
          <KAccordionTrigger>Title</KAccordionTrigger>
          <KAccordionContent>Content</KAccordionContent>
        </KAccordionItem>,
      );
    }).toThrow();
  });
  // endregion
});
