import { describe, expect, it, vi } from 'vitest';
import { screen } from '@testing-library/react';
import {
  KInputGroup,
  KInputGroupAddon,
  KInputGroupInput,
  KInputGroupTextarea,
  KInputGroupText,
  KInputGroupButton,
} from '@/components/ui/input/input-group/KInputGroup';
import { renderWithUser, expectClasses, expectFocused } from '@/test-utils';

describe('KInputGroup', () => {

  // region [Basic Rendering Tests]
  it('기본적으로 렌더링되어야 한다', () => {
    renderWithUser(
      <KInputGroup>
        <KInputGroupInput />
      </KInputGroup>,
    );

    expect(screen.getByRole('group')).toBeInTheDocument();
  });

  it('data-slot="input-group" 속성이 설정되어야 한다', () => {
    renderWithUser(<KInputGroup />);

    expect(screen.getByRole('group')).toHaveAttribute('data-slot', 'input-group');
  });

  it('data-size 속성이 size prop과 일치해야 한다', () => {
    renderWithUser(<KInputGroup size="lg" />);

    expect(screen.getByRole('group')).toHaveAttribute('data-size', 'lg');
  });

  it('className이 컨테이너에 적용되어야 한다', () => {
    renderWithUser(<KInputGroup className="custom-class" />);

    expect(screen.getByRole('group')).toHaveClass('custom-class');
  });
  // endregion

  // region [Size Variants Tests]
  it('size="sm"일 때 h-8 클래스가 적용되어야 한다', () => {
    renderWithUser(<KInputGroup size="sm" />);

    expectClasses(screen.getByRole('group') as HTMLElement, ['h-8']);
  });

  it('size="md"일 때 h-9 클래스가 적용되어야 한다 (기본값)', () => {
    renderWithUser(<KInputGroup />);

    expectClasses(screen.getByRole('group') as HTMLElement, ['h-9']);
  });

  it('size="lg"일 때 h-10 클래스가 적용되어야 한다', () => {
    renderWithUser(<KInputGroup size="lg" />);

    expectClasses(screen.getByRole('group') as HTMLElement, ['h-10']);
  });
  // endregion

  // region [Context Propagation Tests]
  it('size context가 KInputGroupInput에 전파되어야 한다', () => {
    renderWithUser(
      <KInputGroup size="sm">
        <KInputGroupInput />
      </KInputGroup>,
    );

    const input = screen.getByRole('textbox') as HTMLInputElement;
    expectClasses(input, ['h-8']);
  });

  it('size context가 KInputGroupText에 전파되어야 한다', () => {
    renderWithUser(
      <KInputGroup size="sm">
        <KInputGroupAddon>
          <KInputGroupText>prefix</KInputGroupText>
        </KInputGroupAddon>
      </KInputGroup>,
    );

    expect(screen.getByText('prefix')).toHaveClass('text-xs');
  });

  it('size context가 KInputGroupButton에 전파되어야 한다', () => {
    renderWithUser(
      <KInputGroup size="sm">
        <KInputGroupAddon>
          <KInputGroupButton>확인</KInputGroupButton>
        </KInputGroupAddon>
      </KInputGroup>,
    );

    expect(screen.getByRole('button', { name: '확인' })).toHaveClass('text-xs');
  });
  // endregion

});

describe('KInputGroupAddon', () => {

  // region [Basic Rendering Tests]
  it('렌더링되어야 한다', () => {
    renderWithUser(
      <KInputGroup>
        <KInputGroupAddon>addon</KInputGroupAddon>
      </KInputGroup>,
    );

    expect(screen.getByText('addon')).toBeInTheDocument();
  });

  it('data-slot="input-group-addon" 속성이 설정되어야 한다', () => {
    renderWithUser(
      <KInputGroup>
        <KInputGroupAddon data-testid="addon">addon</KInputGroupAddon>
      </KInputGroup>,
    );

    expect(screen.getByTestId('addon')).toHaveAttribute('data-slot', 'input-group-addon');
  });

  it('data-align 속성이 align prop과 일치해야 한다', () => {
    renderWithUser(
      <KInputGroup>
        <KInputGroupAddon align="inline-end" data-testid="addon">addon</KInputGroupAddon>
      </KInputGroup>,
    );

    expect(screen.getByTestId('addon')).toHaveAttribute('data-align', 'inline-end');
  });
  // endregion

  // region [Click Focus Tests]
  it('addon 클릭 시 내부 input에 포커스되어야 한다', async () => {
    const { user } = renderWithUser(
      <KInputGroup>
        <KInputGroupAddon data-testid="addon">
          <KInputGroupText>prefix</KInputGroupText>
        </KInputGroupAddon>
        <KInputGroupInput />
      </KInputGroup>,
    );

    await user.click(screen.getByTestId('addon'));

    expectFocused(screen.getByRole('textbox'));
  });

  it('addon 내 버튼 클릭 시 input 포커스가 이동하지 않아야 한다', async () => {
    const handleClick = vi.fn();
    const { user } = renderWithUser(
      <KInputGroup>
        <KInputGroupAddon>
          <KInputGroupButton onClick={handleClick}>액션</KInputGroupButton>
        </KInputGroupAddon>
        <KInputGroupInput />
      </KInputGroup>,
    );

    await user.click(screen.getByRole('button', { name: '액션' }));

    expect(handleClick).toHaveBeenCalled();
    expect(screen.getByRole('textbox')).not.toHaveFocus();
  });
  // endregion

});

describe('KInputGroupInput', () => {

  // region [Basic Rendering Tests]
  it('렌더링되어야 한다', () => {
    renderWithUser(
      <KInputGroup>
        <KInputGroupInput />
      </KInputGroup>,
    );

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('data-slot="input-group-control" 속성이 설정되어야 한다', () => {
    renderWithUser(
      <KInputGroup>
        <KInputGroupInput />
      </KInputGroup>,
    );

    expect(screen.getByRole('textbox')).toHaveAttribute('data-slot', 'input-group-control');
  });

  it('placeholder가 표시되어야 한다', () => {
    renderWithUser(
      <KInputGroup>
        <KInputGroupInput placeholder="검색어를 입력하세요" />
      </KInputGroup>,
    );

    expect(screen.getByPlaceholderText('검색어를 입력하세요')).toBeInTheDocument();
  });

  it('텍스트 입력이 동작해야 한다', async () => {
    const { user } = renderWithUser(
      <KInputGroup>
        <KInputGroupInput />
      </KInputGroup>,
    );

    const input = screen.getByRole('textbox') as HTMLInputElement;
    await user.type(input, 'hello');

    expect(input.value).toBe('hello');
  });

  it('onChange가 호출되어야 한다', async () => {
    const handleChange = vi.fn();
    const { user } = renderWithUser(
      <KInputGroup>
        <KInputGroupInput onChange={handleChange} />
      </KInputGroup>,
    );

    await user.type(screen.getByRole('textbox'), 'a');

    expect(handleChange).toHaveBeenCalled();
  });

  it('aria-invalid prop이 적용되어야 한다', () => {
    renderWithUser(
      <KInputGroup>
        <KInputGroupInput aria-invalid="true" />
      </KInputGroup>,
    );

    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });
  // endregion

});

describe('KInputGroupTextarea', () => {

  // region [Basic Rendering Tests]
  it('렌더링되어야 한다', () => {
    renderWithUser(
      <KInputGroup>
        <KInputGroupTextarea />
      </KInputGroup>,
    );

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('data-slot="input-group-control" 속성이 설정되어야 한다', () => {
    renderWithUser(
      <KInputGroup>
        <KInputGroupTextarea />
      </KInputGroup>,
    );

    expect(screen.getByRole('textbox')).toHaveAttribute('data-slot', 'input-group-control');
  });

  it('텍스트 입력이 동작해야 한다', async () => {
    const { user } = renderWithUser(
      <KInputGroup>
        <KInputGroupTextarea />
      </KInputGroup>,
    );

    const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;
    await user.type(textarea, '메시지 내용');

    expect(textarea.value).toBe('메시지 내용');
  });
  // endregion

});

describe('KInputGroupText', () => {

  // region [Basic Rendering Tests]
  it('텍스트 내용이 렌더링되어야 한다', () => {
    renderWithUser(
      <KInputGroup>
        <KInputGroupAddon>
          <KInputGroupText>https://</KInputGroupText>
        </KInputGroupAddon>
      </KInputGroup>,
    );

    expect(screen.getByText('https://')).toBeInTheDocument();
  });

  it('span 요소로 렌더링되어야 한다', () => {
    renderWithUser(
      <KInputGroup>
        <KInputGroupAddon>
          <KInputGroupText>label</KInputGroupText>
        </KInputGroupAddon>
      </KInputGroup>,
    );

    expect(screen.getByText('label').tagName).toBe('SPAN');
  });
  // endregion

});

describe('KInputGroupButton', () => {

  // region [Basic Rendering Tests]
  it('렌더링되어야 한다', () => {
    renderWithUser(
      <KInputGroup>
        <KInputGroupAddon>
          <KInputGroupButton>검색</KInputGroupButton>
        </KInputGroupAddon>
      </KInputGroup>,
    );

    expect(screen.getByRole('button', { name: '검색' })).toBeInTheDocument();
  });

  it('클릭 이벤트가 동작해야 한다', async () => {
    const handleClick = vi.fn();
    const { user } = renderWithUser(
      <KInputGroup>
        <KInputGroupAddon>
          <KInputGroupButton onClick={handleClick}>검색</KInputGroupButton>
        </KInputGroupAddon>
      </KInputGroup>,
    );

    await user.click(screen.getByRole('button', { name: '검색' }));

    expect(handleClick).toHaveBeenCalled();
  });

  it('기본 variant가 ghost이어야 한다', () => {
    renderWithUser(
      <KInputGroup>
        <KInputGroupAddon>
          <KInputGroupButton>버튼</KInputGroupButton>
        </KInputGroupAddon>
      </KInputGroup>,
    );

    expectClasses(screen.getByRole('button', { name: '버튼' }) as HTMLElement, [
      'hover:bg-accent',
      'hover:text-accent-foreground',
    ]);
  });
  // endregion

});
