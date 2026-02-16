import { describe, expect, it } from 'vitest';
import { createRef } from 'react';
import { screen } from '@testing-library/react';
import {
  KCard,
  KCardHeader,
  KCardTitle,
  KCardDescription,
  KCardContent,
  KCardFooter,
} from './KCard';
import { renderWithUser, expectClasses } from '@/test-utils';

describe('KCard', () => {
  // region [Basic Rendering Tests]
  it('KCard가 정상적으로 렌더링되어야 한다', () => {
    const { container } = renderWithUser(<KCard>Card Content</KCard>);

    const card = container.firstChild;
    expect(card).toBeInTheDocument();
    expect(screen.getByText('Card Content')).toBeInTheDocument();
  });

  it('모든 서브 컴포넌트가 정상적으로 렌더링되어야 한다', () => {
    renderWithUser(
      <KCard>
        <KCardHeader>
          <KCardTitle>Card Title</KCardTitle>
          <KCardDescription>Card Description</KCardDescription>
        </KCardHeader>
        <KCardContent>Card Content</KCardContent>
        <KCardFooter>Card Footer</KCardFooter>
      </KCard>,
    );

    expect(screen.getByText('Card Title')).toBeInTheDocument();
    expect(screen.getByText('Card Description')).toBeInTheDocument();
    expect(screen.getByText('Card Content')).toBeInTheDocument();
    expect(screen.getByText('Card Footer')).toBeInTheDocument();
  });

  it('Compound pattern이 독립적으로 동작해야 한다', () => {
    renderWithUser(
      <KCard>
        <KCardHeader>
          <KCardTitle>Title</KCardTitle>
        </KCardHeader>
        <KCardContent>Content</KCardContent>
      </KCard>,
    );

    // 각 서브 컴포넌트가 독립적으로 렌더링
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
  // endregion

  // region [KCard Tests]
  it('KCard에 기본 스타일 클래스가 적용되어야 한다', () => {
    const { container } = renderWithUser(<KCard>Content</KCard>);

    const card = container.firstChild as HTMLElement;
    expectClasses(card, [
      'rounded-md',
      'border',
      'border-border',
      'bg-card',
      'text-card-foreground',
      'shadow-sm',
    ]);
  });

  it('KCard에 custom className이 병합되어야 한다', () => {
    const { container } = renderWithUser(<KCard className="custom-card">Content</KCard>);

    const card = container.firstChild as HTMLElement;
    expect(card).toHaveClass('custom-card');
    expect(card).toHaveClass('rounded-md'); // 기본 클래스도 유지
  });

  it('KCard ref가 정상적으로 전달되어야 한다', () => {
    const ref = createRef<HTMLDivElement>();
    renderWithUser(<KCard ref={ref}>Content</KCard>);

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('KCard에 HTML 속성이 정상적으로 전달되어야 한다', () => {
    const { container } = renderWithUser(
      <KCard data-testid="test-card" id="my-card">
        Content
      </KCard>,
    );

    const card = container.firstChild as HTMLElement;
    expect(card).toHaveAttribute('data-testid', 'test-card');
    expect(card).toHaveAttribute('id', 'my-card');
  });
  // endregion

  // region [KCardHeader Tests]
  it('KCardHeader에 기본 스타일 클래스가 적용되어야 한다', () => {
    renderWithUser(<KCardHeader>Header</KCardHeader>);

    const header = screen.getByText('Header');
    expectClasses(header, ['flex', 'flex-col', 'space-y-1.5', 'p-4']);
  });

  it('KCardHeader에 custom className이 병합되어야 한다', () => {
    renderWithUser(<KCardHeader className="custom-header">Header</KCardHeader>);

    const header = screen.getByText('Header');
    expect(header).toHaveClass('custom-header');
    expect(header).toHaveClass('flex'); // 기본 클래스도 유지
  });

  it('KCardHeader ref가 정상적으로 전달되어야 한다', () => {
    const ref = createRef<HTMLDivElement>();
    renderWithUser(<KCardHeader ref={ref}>Header</KCardHeader>);

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
  // endregion

  // region [KCardTitle Tests]
  it('KCardTitle이 h3 태그로 렌더링되어야 한다', () => {
    renderWithUser(<KCardTitle>Title</KCardTitle>);

    const title = screen.getByText('Title');
    expect(title.tagName).toBe('H3');
  });

  it('KCardTitle에 기본 스타일 클래스가 적용되어야 한다', () => {
    renderWithUser(<KCardTitle>Title</KCardTitle>);

    const title = screen.getByText('Title');
    expectClasses(title, ['font-semibold', 'tracking-tight', 'text-lg']);
  });

  it('KCardTitle에 custom className이 병합되어야 한다', () => {
    renderWithUser(<KCardTitle className="custom-title">Title</KCardTitle>);

    const title = screen.getByText('Title');
    expect(title).toHaveClass('custom-title');
    expect(title).toHaveClass('font-semibold'); // 기본 클래스도 유지
  });

  it('KCardTitle ref가 정상적으로 전달되어야 한다', () => {
    const ref = createRef<HTMLHeadingElement>();
    renderWithUser(<KCardTitle ref={ref}>Title</KCardTitle>);

    expect(ref.current).toBeInstanceOf(HTMLHeadingElement);
    expect(ref.current?.tagName).toBe('H3');
  });
  // endregion

  // region [KCardDescription Tests]
  it('KCardDescription이 p 태그로 렌더링되어야 한다', () => {
    renderWithUser(<KCardDescription>Description</KCardDescription>);

    const description = screen.getByText('Description');
    expect(description.tagName).toBe('P');
  });

  it('KCardDescription에 기본 스타일 클래스가 적용되어야 한다', () => {
    renderWithUser(<KCardDescription>Description</KCardDescription>);

    const description = screen.getByText('Description');
    expectClasses(description, ['text-sm', 'text-muted-foreground']);
  });

  it('KCardDescription에 custom className이 병합되어야 한다', () => {
    renderWithUser(<KCardDescription className="custom-desc">Description</KCardDescription>);

    const description = screen.getByText('Description');
    expect(description).toHaveClass('custom-desc');
    expect(description).toHaveClass('text-sm'); // 기본 클래스도 유지
  });

  it('KCardDescription ref가 정상적으로 전달되어야 한다', () => {
    const ref = createRef<HTMLParagraphElement>();
    renderWithUser(<KCardDescription ref={ref}>Description</KCardDescription>);

    expect(ref.current).toBeInstanceOf(HTMLParagraphElement);
    expect(ref.current?.tagName).toBe('P');
  });
  // endregion

  // region [KCardContent Tests]
  it('KCardContent에 기본 스타일 클래스가 적용되어야 한다', () => {
    renderWithUser(<KCardContent>Content</KCardContent>);

    const content = screen.getByText('Content');
    expectClasses(content, ['p-4', 'pt-0']);
  });

  it('KCardContent에 custom className이 병합되어야 한다', () => {
    renderWithUser(<KCardContent className="custom-content">Content</KCardContent>);

    const content = screen.getByText('Content');
    expect(content).toHaveClass('custom-content');
    expect(content).toHaveClass('p-4'); // 기본 클래스도 유지
  });

  it('KCardContent ref가 정상적으로 전달되어야 한다', () => {
    const ref = createRef<HTMLDivElement>();
    renderWithUser(<KCardContent ref={ref}>Content</KCardContent>);

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
  // endregion

  // region [KCardFooter Tests]
  it('KCardFooter에 기본 스타일 클래스가 적용되어야 한다', () => {
    renderWithUser(<KCardFooter>Footer</KCardFooter>);

    const footer = screen.getByText('Footer');
    expectClasses(footer, ['flex', 'items-center', 'p-4', 'pt-0']);
  });

  it('KCardFooter에 custom className이 병합되어야 한다', () => {
    renderWithUser(<KCardFooter className="custom-footer">Footer</KCardFooter>);

    const footer = screen.getByText('Footer');
    expect(footer).toHaveClass('custom-footer');
    expect(footer).toHaveClass('flex'); // 기본 클래스도 유지
  });

  it('KCardFooter ref가 정상적으로 전달되어야 한다', () => {
    const ref = createRef<HTMLDivElement>();
    renderWithUser(<KCardFooter ref={ref}>Footer</KCardFooter>);

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
  // endregion

  // region [Integration Tests]
  it('완전한 Card 구조가 정상적으로 동작해야 한다', () => {
    renderWithUser(
      <KCard data-testid="card">
        <KCardHeader>
          <KCardTitle>Product Title</KCardTitle>
          <KCardDescription>Product description goes here</KCardDescription>
        </KCardHeader>
        <KCardContent>
          <p>This is the main content of the card.</p>
        </KCardContent>
        <KCardFooter>
          <button type="button">Action</button>
        </KCardFooter>
      </KCard>,
    );

    expect(screen.getByText('Product Title')).toBeInTheDocument();
    expect(screen.getByText('Product description goes here')).toBeInTheDocument();
    expect(screen.getByText('This is the main content of the card.')).toBeInTheDocument();
    expect(screen.getByText('Action')).toBeInTheDocument();
  });

  it('일부 서브 컴포넌트만 사용해도 정상 동작해야 한다', () => {
    renderWithUser(
      <KCard>
        <KCardHeader>
          <KCardTitle>Title Only</KCardTitle>
        </KCardHeader>
        <KCardContent>Content Only</KCardContent>
      </KCard>,
    );

    expect(screen.getByText('Title Only')).toBeInTheDocument();
    expect(screen.getByText('Content Only')).toBeInTheDocument();
    expect(screen.queryByText('Footer')).not.toBeInTheDocument();
  });

  it('서브 컴포넌트 없이 KCard만 사용해도 동작해야 한다', () => {
    renderWithUser(
      <KCard>
        <div>Plain content without subcomponents</div>
      </KCard>,
    );

    expect(screen.getByText('Plain content without subcomponents')).toBeInTheDocument();
  });

  it('여러 개의 Card를 렌더링할 수 있어야 한다', () => {
    renderWithUser(
      <>
        <KCard>
          <KCardTitle>Card 1</KCardTitle>
        </KCard>
        <KCard>
          <KCardTitle>Card 2</KCardTitle>
        </KCard>
        <KCard>
          <KCardTitle>Card 3</KCardTitle>
        </KCard>
      </>,
    );

    expect(screen.getByText('Card 1')).toBeInTheDocument();
    expect(screen.getByText('Card 2')).toBeInTheDocument();
    expect(screen.getByText('Card 3')).toBeInTheDocument();
  });
  // endregion

  // region [Edge Cases]
  it('빈 Card도 렌더링되어야 한다', () => {
    const { container } = renderWithUser(<KCard />);

    const card = container.firstChild;
    expect(card).toBeInTheDocument();
  });

  it('중첩된 Card 구조도 지원해야 한다', () => {
    renderWithUser(
      <KCard>
        <KCardContent>
          <KCard>
            <KCardTitle>Nested Card</KCardTitle>
          </KCard>
        </KCardContent>
      </KCard>,
    );

    expect(screen.getByText('Nested Card')).toBeInTheDocument();
  });

  it('서브 컴포넌트에 children이 없어도 렌더링되어야 한다', () => {
    const { container } = renderWithUser(
      <KCard>
        <KCardHeader />
        <KCardContent />
        <KCardFooter />
      </KCard>,
    );

    expect(container.firstChild).toBeInTheDocument();
  });
  // endregion
});
