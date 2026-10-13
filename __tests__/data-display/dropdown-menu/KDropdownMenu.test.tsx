import { describe, expect, it, vi } from 'vitest';
import { useState } from 'react';
import { screen } from '@testing-library/react';
import {
  KDropdownMenu,
  KDropdownMenuTrigger,
  KDropdownMenuContent,
  KDropdownMenuItem,
  KDropdownMenuCheckboxItem,
  KDropdownMenuRadioGroup,
  KDropdownMenuRadioItem,
  KDropdownMenuLabel,
  KDropdownMenuSeparator,
  KDropdownMenuShortcut,
  KDropdownMenuGroup,
  KDropdownMenuSub,
  KDropdownMenuSubTrigger,
  KDropdownMenuSubContent,
} from '@/components/ui/data-display/dropdown-menu/KDropdownMenu';
import { renderWithUser, expectClasses } from '@/test-utils';

// region [Helpers]
const openMenu = async (user: ReturnType<typeof import('@testing-library/user-event').default.setup>) => {
  await user.click(screen.getByRole('button', { name: '열기' }));
  await screen.findByRole('menu');
};

const MenuFixture = ({ size, children }: { size?: 'sm' | 'md'; children: React.ReactNode }) => (
  <KDropdownMenu size={size}>
    <KDropdownMenuTrigger>열기</KDropdownMenuTrigger>
    <KDropdownMenuContent>{children}</KDropdownMenuContent>
  </KDropdownMenu>
);
// endregion

describe('KDropdownMenu', () => {
  // region [Open/Close Tests]
  it('트리거 클릭 시 메뉴가 열려야 한다', async () => {
    const { user } = renderWithUser(
      <MenuFixture>
        <KDropdownMenuItem>항목</KDropdownMenuItem>
      </MenuFixture>,
    );

    await user.click(screen.getByRole('button', { name: '열기' }));

    expect(await screen.findByText('항목')).toBeInTheDocument();
  });

  it('ESC 키 입력 시 메뉴가 닫혀야 한다', async () => {
    const { user } = renderWithUser(
      <MenuFixture>
        <KDropdownMenuItem>항목</KDropdownMenuItem>
      </MenuFixture>,
    );

    await openMenu(user);
    await user.keyboard('{Escape}');

    expect(screen.queryByText('항목')).not.toBeInTheDocument();
  });

  it('아이템 클릭 시 메뉴가 닫혀야 한다', async () => {
    const { user } = renderWithUser(
      <MenuFixture>
        <KDropdownMenuItem>항목</KDropdownMenuItem>
      </MenuFixture>,
    );

    await openMenu(user);
    await user.click(screen.getByText('항목'));

    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('onOpenChange가 열릴 때 true로 호출되어야 한다', async () => {
    const handleOpenChange = vi.fn();
    const { user } = renderWithUser(
      <KDropdownMenu onOpenChange={handleOpenChange}>
        <KDropdownMenuTrigger>열기</KDropdownMenuTrigger>
        <KDropdownMenuContent>
          <KDropdownMenuItem>항목</KDropdownMenuItem>
        </KDropdownMenuContent>
      </KDropdownMenu>,
    );

    await user.click(screen.getByRole('button', { name: '열기' }));

    expect(handleOpenChange).toHaveBeenCalledWith(true);
  });
  // endregion

  // region [Size Context Tests]
  it('size="md"일 때 아이템에 text-sm 클래스가 적용되어야 한다 (기본값)', async () => {
    const { user } = renderWithUser(
      <MenuFixture size="md">
        <KDropdownMenuItem>기본 아이템</KDropdownMenuItem>
      </MenuFixture>,
    );

    await openMenu(user);

    expect(screen.getByText('기본 아이템')).toHaveClass('text-sm');
  });

  it('size="sm"일 때 아이템에 text-xs, py-1 클래스가 적용되어야 한다', async () => {
    const { user } = renderWithUser(
      <MenuFixture size="sm">
        <KDropdownMenuItem>작은 아이템</KDropdownMenuItem>
      </MenuFixture>,
    );

    await openMenu(user);

    expectClasses(screen.getByText('작은 아이템') as HTMLElement, ['text-xs', 'py-1']);
  });

  it('size="md"일 때 라벨에 text-[13px] 클래스가 적용되어야 한다', async () => {
    const { user } = renderWithUser(
      <MenuFixture size="md">
        <KDropdownMenuLabel>섹션</KDropdownMenuLabel>
      </MenuFixture>,
    );

    await openMenu(user);

    expect(screen.getByText('섹션')).toHaveClass('text-[13px]');
  });

  it('size="sm"일 때 라벨에 text-[11px] 클래스가 적용되어야 한다', async () => {
    const { user } = renderWithUser(
      <MenuFixture size="sm">
        <KDropdownMenuLabel>섹션</KDropdownMenuLabel>
      </MenuFixture>,
    );

    await openMenu(user);

    expect(screen.getByText('섹션')).toHaveClass('text-[11px]');
  });
  // endregion
});

describe('KDropdownMenuTrigger', () => {
  it('k-dropdown-menu__trigger 클래스가 적용되어야 한다', () => {
    renderWithUser(
      <KDropdownMenu>
        <KDropdownMenuTrigger>열기</KDropdownMenuTrigger>
      </KDropdownMenu>,
    );

    expect(screen.getByRole('button', { name: '열기' })).toHaveClass('k-dropdown-menu__trigger');
  });
});

describe('KDropdownMenuContent', () => {
  it('k-dropdown-menu 클래스가 적용되어야 한다', async () => {
    const { user } = renderWithUser(
      <MenuFixture>
        <KDropdownMenuItem>항목</KDropdownMenuItem>
      </MenuFixture>,
    );

    await openMenu(user);

    expect(screen.getByRole('menu')).toHaveClass('k-dropdown-menu');
  });

  it('className prop이 적용되어야 한다', async () => {
    const { user } = renderWithUser(
      <KDropdownMenu>
        <KDropdownMenuTrigger>열기</KDropdownMenuTrigger>
        <KDropdownMenuContent className="custom-menu">
          <KDropdownMenuItem>항목</KDropdownMenuItem>
        </KDropdownMenuContent>
      </KDropdownMenu>,
    );

    await openMenu(user);

    expect(screen.getByRole('menu')).toHaveClass('custom-menu');
  });
});

describe('KDropdownMenuItem', () => {
  it('클릭 시 onSelect가 호출되어야 한다', async () => {
    const handleSelect = vi.fn();
    const { user } = renderWithUser(
      <MenuFixture>
        <KDropdownMenuItem onSelect={handleSelect}>저장</KDropdownMenuItem>
      </MenuFixture>,
    );

    await openMenu(user);
    await user.click(screen.getByText('저장'));

    expect(handleSelect).toHaveBeenCalled();
  });

  it('disabled 상태에서 data-disabled 속성이 적용되어야 한다', async () => {
    const { user } = renderWithUser(
      <MenuFixture>
        <KDropdownMenuItem disabled>비활성 항목</KDropdownMenuItem>
      </MenuFixture>,
    );

    await openMenu(user);

    expect(screen.getByText('비활성 항목')).toHaveAttribute('data-disabled');
  });

  it('disabled 상태에서 클릭해도 onSelect가 호출되지 않아야 한다', async () => {
    const handleSelect = vi.fn();
    const { user } = renderWithUser(
      <MenuFixture>
        <KDropdownMenuItem disabled onSelect={handleSelect}>
          비활성 항목
        </KDropdownMenuItem>
      </MenuFixture>,
    );

    await openMenu(user);
    await user.click(screen.getByText('비활성 항목'));

    expect(handleSelect).not.toHaveBeenCalled();
  });

  it('inset prop 적용 시 pl-8 클래스가 추가되어야 한다', async () => {
    const { user } = renderWithUser(
      <MenuFixture>
        <KDropdownMenuItem inset>들여쓰기 항목</KDropdownMenuItem>
      </MenuFixture>,
    );

    await openMenu(user);

    expect(screen.getByText('들여쓰기 항목')).toHaveClass('pl-8');
  });

  it('k-dropdown-menu__item 클래스가 적용되어야 한다', async () => {
    const { user } = renderWithUser(
      <MenuFixture>
        <KDropdownMenuItem>항목</KDropdownMenuItem>
      </MenuFixture>,
    );

    await openMenu(user);

    expect(screen.getByText('항목')).toHaveClass('k-dropdown-menu__item');
  });
});

describe('KDropdownMenuCheckboxItem', () => {
  it('checked 상태일 때 data-state="checked" 속성이 설정되어야 한다', async () => {
    const { user } = renderWithUser(
      <MenuFixture>
        <KDropdownMenuCheckboxItem checked>체크됨</KDropdownMenuCheckboxItem>
      </MenuFixture>,
    );

    await openMenu(user);

    expect(screen.getByText('체크됨').closest('[role="menuitemcheckbox"]')).toHaveAttribute('data-state', 'checked');
  });

  it('unchecked 상태일 때 data-state="unchecked" 속성이 설정되어야 한다', async () => {
    const { user } = renderWithUser(
      <MenuFixture>
        <KDropdownMenuCheckboxItem checked={false}>미체크</KDropdownMenuCheckboxItem>
      </MenuFixture>,
    );

    await openMenu(user);

    expect(screen.getByText('미체크').closest('[role="menuitemcheckbox"]')).toHaveAttribute('data-state', 'unchecked');
  });

  it('클릭 시 onCheckedChange가 호출되어야 한다', async () => {
    const handleCheckedChange = vi.fn();
    const { user } = renderWithUser(
      <MenuFixture>
        <KDropdownMenuCheckboxItem checked={false} onCheckedChange={handleCheckedChange}>
          체크박스
        </KDropdownMenuCheckboxItem>
      </MenuFixture>,
    );

    await openMenu(user);
    await user.click(screen.getByText('체크박스'));

    expect(handleCheckedChange).toHaveBeenCalledWith(true);
  });

  it('k-dropdown-menu__checkbox-item 클래스가 적용되어야 한다', async () => {
    const { user } = renderWithUser(
      <MenuFixture>
        <KDropdownMenuCheckboxItem>체크박스</KDropdownMenuCheckboxItem>
      </MenuFixture>,
    );

    await openMenu(user);

    expect(screen.getByRole('menuitemcheckbox')).toHaveClass('k-dropdown-menu__checkbox-item');
  });
});

describe('KDropdownMenuRadioGroup + KDropdownMenuRadioItem', () => {
  const RadioExample = ({ onValueChange }: { onValueChange?: (v: string) => void }) => {
    const [value, setValue] = useState('option1');
    return (
      <MenuFixture>
        <KDropdownMenuRadioGroup
          value={value}
          onValueChange={(v) => {
            setValue(v);
            onValueChange?.(v);
          }}
        >
          <KDropdownMenuRadioItem value="option1">옵션1</KDropdownMenuRadioItem>
          <KDropdownMenuRadioItem value="option2">옵션2</KDropdownMenuRadioItem>
        </KDropdownMenuRadioGroup>
      </MenuFixture>
    );
  };

  it('선택된 라디오 아이템이 data-state="checked"이어야 한다', async () => {
    const { user } = renderWithUser(<RadioExample />);

    await openMenu(user);

    expect(screen.getByText('옵션1').closest('[role="menuitemradio"]')).toHaveAttribute('data-state', 'checked');
    expect(screen.getByText('옵션2').closest('[role="menuitemradio"]')).toHaveAttribute('data-state', 'unchecked');
  });

  it('라디오 아이템 클릭 시 onValueChange가 호출되어야 한다', async () => {
    const handleValueChange = vi.fn();
    const { user } = renderWithUser(<RadioExample onValueChange={handleValueChange} />);

    await openMenu(user);
    await user.click(screen.getByText('옵션2'));

    expect(handleValueChange).toHaveBeenCalledWith('option2');
  });

  it('k-dropdown-menu__radio-item 클래스가 적용되어야 한다', async () => {
    const { user } = renderWithUser(<RadioExample />);

    await openMenu(user);

    screen.getAllByRole('menuitemradio').forEach((item) => {
      expect(item).toHaveClass('k-dropdown-menu__radio-item');
    });
  });
});

describe('KDropdownMenuLabel', () => {
  it('k-dropdown-menu__label 클래스가 적용되어야 한다', async () => {
    const { user } = renderWithUser(
      <MenuFixture>
        <KDropdownMenuLabel>계정</KDropdownMenuLabel>
      </MenuFixture>,
    );

    await openMenu(user);

    expect(screen.getByText('계정')).toHaveClass('k-dropdown-menu__label');
  });

  it('inset prop 적용 시 pl-8 클래스가 추가되어야 한다', async () => {
    const { user } = renderWithUser(
      <MenuFixture>
        <KDropdownMenuLabel inset>라벨</KDropdownMenuLabel>
      </MenuFixture>,
    );

    await openMenu(user);

    expect(screen.getByText('라벨')).toHaveClass('pl-8');
  });
});

describe('KDropdownMenuSeparator', () => {
  it('k-dropdown-menu__separator 클래스가 적용되어야 한다', async () => {
    const { user } = renderWithUser(
      <MenuFixture>
        <KDropdownMenuItem>위 항목</KDropdownMenuItem>
        <KDropdownMenuSeparator data-testid="separator" />
        <KDropdownMenuItem>아래 항목</KDropdownMenuItem>
      </MenuFixture>,
    );

    await openMenu(user);

    expect(screen.getByTestId('separator')).toHaveClass('k-dropdown-menu__separator');
  });

  it('separator 역할을 가져야 한다', async () => {
    const { user } = renderWithUser(
      <MenuFixture>
        <KDropdownMenuSeparator />
      </MenuFixture>,
    );

    await openMenu(user);

    expect(screen.getByRole('separator')).toBeInTheDocument();
  });
});

describe('KDropdownMenuShortcut', () => {
  it('단축키 텍스트가 렌더링되어야 한다', async () => {
    const { user } = renderWithUser(
      <MenuFixture>
        <KDropdownMenuItem>
          저장
          <KDropdownMenuShortcut>⌘S</KDropdownMenuShortcut>
        </KDropdownMenuItem>
      </MenuFixture>,
    );

    await openMenu(user);

    expect(screen.getByText('⌘S')).toBeInTheDocument();
  });

  it('k-dropdown-menu__shortcut 클래스가 적용되어야 한다', async () => {
    const { user } = renderWithUser(
      <MenuFixture>
        <KDropdownMenuItem>
          저장
          <KDropdownMenuShortcut>⌘S</KDropdownMenuShortcut>
        </KDropdownMenuItem>
      </MenuFixture>,
    );

    await openMenu(user);

    expect(screen.getByText('⌘S')).toHaveClass('k-dropdown-menu__shortcut');
  });
});

describe('KDropdownMenuGroup', () => {
  it('k-dropdown-menu__group 클래스가 적용되어야 한다', async () => {
    const { user } = renderWithUser(
      <MenuFixture>
        <KDropdownMenuGroup data-testid="group">
          <KDropdownMenuItem>항목</KDropdownMenuItem>
        </KDropdownMenuGroup>
      </MenuFixture>,
    );

    await openMenu(user);

    expect(screen.getByTestId('group')).toHaveClass('k-dropdown-menu__group');
  });
});

describe('KDropdownMenuSub', () => {
  it('서브 트리거 클릭 시 서브 메뉴가 열려야 한다', async () => {
    const { user } = renderWithUser(
      <MenuFixture>
        <KDropdownMenuSub>
          <KDropdownMenuSubTrigger>더 보기</KDropdownMenuSubTrigger>
          <KDropdownMenuSubContent>
            <KDropdownMenuItem>서브 항목</KDropdownMenuItem>
          </KDropdownMenuSubContent>
        </KDropdownMenuSub>
      </MenuFixture>,
    );

    await openMenu(user);
    await user.click(screen.getByText('더 보기'));

    expect(await screen.findByText('서브 항목')).toBeInTheDocument();
  });

  it('서브 트리거에 k-dropdown-menu__sub-trigger 클래스가 적용되어야 한다', async () => {
    const { user } = renderWithUser(
      <MenuFixture>
        <KDropdownMenuSub>
          <KDropdownMenuSubTrigger>더 보기</KDropdownMenuSubTrigger>
          <KDropdownMenuSubContent>
            <KDropdownMenuItem>서브 항목</KDropdownMenuItem>
          </KDropdownMenuSubContent>
        </KDropdownMenuSub>
      </MenuFixture>,
    );

    await openMenu(user);

    expect(screen.getByText('더 보기')).toHaveClass('k-dropdown-menu__sub-trigger');
  });
});
