import type { Meta, StoryObj } from "@storybook/react-vite";
import { User, Settings, LogOut, MoreVertical } from "lucide-react";
import { useState } from "react";
import {
  KDropdownMenu,
  KDropdownMenuTrigger,
  KDropdownMenuContent,
  KDropdownMenuItem,
  KDropdownMenuCheckboxItem,
  KDropdownMenuRadioItem,
  KDropdownMenuLabel,
  KDropdownMenuSeparator,
  KDropdownMenuShortcut,
  KDropdownMenuGroup,
  KDropdownMenuSub,
  KDropdownMenuSubContent,
  KDropdownMenuSubTrigger,
  KDropdownMenuRadioGroup,
} from './KDropdownMenu';
import { KButton } from '@/components';

// 가상 Props 타입 정의 (Story 컨트롤을 위한 타입)
type KDropdownMenuStoryArgs = {
  size?: "sm" | "md";
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
};

const meta: Meta<KDropdownMenuStoryArgs> = {
  title: "DataDisplay/DropdownMenu",
  component: KDropdownMenu,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md"],
    },
    side: {
      control: "select",
      options: ["top", "right", "bottom", "left"],
      table: { category: "Custom Content Props" },
    },
    align: {
      control: "select",
      options: ["start", "center", "end"],
      table: { category: "Custom Content Props" },
    },
  },
};

export default meta;
type Story = StoryObj<KDropdownMenuStoryArgs>;

export const Default: Story = {
  args: {
    size: "md",
    side: "bottom",
    align: "end",
  },
  render: (args) => {
    const { size, side, align } = args;
    return (
      <KDropdownMenu size={size}>
        <KDropdownMenuTrigger className="rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent">
          설정 열기
        </KDropdownMenuTrigger>
        <KDropdownMenuContent className="w-56" side={side} align={align} sideOffset={12}>
          <KDropdownMenuLabel>내 계정</KDropdownMenuLabel>
          <KDropdownMenuSeparator />
          <KDropdownMenuGroup>
            <KDropdownMenuItem>
              프로필
              <KDropdownMenuShortcut>⇧⌘P</KDropdownMenuShortcut>
            </KDropdownMenuItem>
            <KDropdownMenuItem>
              결제 정보
              <KDropdownMenuShortcut>⌘B</KDropdownMenuShortcut>
            </KDropdownMenuItem>
            <KDropdownMenuItem>
              설정
              <KDropdownMenuShortcut>⌘S</KDropdownMenuShortcut>
            </KDropdownMenuItem>
          </KDropdownMenuGroup>
          <KDropdownMenuSeparator />
          <KDropdownMenuSub>
            <KDropdownMenuSubTrigger>친구 초대</KDropdownMenuSubTrigger>
            <KDropdownMenuSubContent>
              <KDropdownMenuItem>이메일</KDropdownMenuItem>
              <KDropdownMenuItem>메시지</KDropdownMenuItem>
              <KDropdownMenuSeparator />
              <KDropdownMenuItem>더 보기...</KDropdownMenuItem>
            </KDropdownMenuSubContent>
          </KDropdownMenuSub>
          <KDropdownMenuSeparator />
          <KDropdownMenuItem className="text-destructive">
            로그아웃
            <KDropdownMenuShortcut>⇧⌘Q</KDropdownMenuShortcut>
          </KDropdownMenuItem>
        </KDropdownMenuContent>
      </KDropdownMenu>
    );
  },
};

export const Selection: Story = {
  args: {
    size: "md",
    side: "bottom",
    align: "end",
  },
  render: (args) => {
    const { size } = args;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [showStatusBar, setShowStatusBar] = useState(true);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [position, setPosition] = useState("bottom");

    return (
      <KDropdownMenu size={size}>
        <KDropdownMenuTrigger className="rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent">
          옵션 선택 (Small)
        </KDropdownMenuTrigger>
        <KDropdownMenuContent className="w-56">
          <KDropdownMenuLabel>외관 설정</KDropdownMenuLabel>
          <KDropdownMenuSeparator />
          <KDropdownMenuCheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar}>
            상태 표시줄 활성화
          </KDropdownMenuCheckboxItem>
          <KDropdownMenuSeparator />
          <KDropdownMenuLabel>패널 위치</KDropdownMenuLabel>
          <KDropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <KDropdownMenuRadioItem value="top">상단</KDropdownMenuRadioItem>
            <KDropdownMenuRadioItem value="bottom">하단</KDropdownMenuRadioItem>
            <KDropdownMenuRadioItem value="right">오른쪽</KDropdownMenuRadioItem>
          </KDropdownMenuRadioGroup>
        </KDropdownMenuContent>
      </KDropdownMenu>
    );
  },
};

export const PositionTest: Story = {
  render: (args) => {
    const { size } = args;
    return (
      <div className="flex h-[300px] w-full items-center justify-center">
        <KDropdownMenu size={size}>
          <KDropdownMenuTrigger className="rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent">
            위치 테스트
          </KDropdownMenuTrigger>
          <KDropdownMenuContent side="right" align="center" sideOffset={12}>
            <KDropdownMenuLabel>위치 설정됨</KDropdownMenuLabel>
            <KDropdownMenuSeparator />
            <KDropdownMenuItem>오른쪽 상단 정렬</KDropdownMenuItem>
            <KDropdownMenuItem>간격 12px</KDropdownMenuItem>
          </KDropdownMenuContent>
        </KDropdownMenu>
      </div>
    );
  },
};


export const CustomTrigger: Story = {
  args: {
    size: "md",
    side: "bottom",
    align: "end",
  },
  render: (args) => {
    const { size, side, align } = args;
    return (
      <div className="flex h-[200px] w-full items-center justify-center gap-8">
        {/* 1. 아이콘 버튼 형태 */}
        <KDropdownMenu size={size}>
          <KDropdownMenuTrigger asChild>
            <KButton size="icon">
              <MoreVertical className="size-5" />
            </KButton>
          </KDropdownMenuTrigger>
          <KDropdownMenuContent side={side} align={align}>
            <KDropdownMenuItem>
              편집
              <KDropdownMenuShortcut>⌘E</KDropdownMenuShortcut>
            </KDropdownMenuItem>
            <KDropdownMenuItem>
              복제
              <KDropdownMenuShortcut>⌘D</KDropdownMenuShortcut>
            </KDropdownMenuItem>
            <KDropdownMenuSeparator />
            <KDropdownMenuItem className="text-destructive">
              삭제
              <KDropdownMenuShortcut>⌘D</KDropdownMenuShortcut>
            </KDropdownMenuItem>
          </KDropdownMenuContent>
        </KDropdownMenu>

        {/* 2. 프로필/아바타 형태 */}
        <KDropdownMenu size={size}>
          <KDropdownMenuTrigger asChild>
            <KButton variant="outline">
              <div className="h-6 w-6 rounded-full bg-blue-500" />
              <div className="text-sm font-medium">User1</div>
            </KButton>
          </KDropdownMenuTrigger>
          <KDropdownMenuContent side={side} align={align}>
            <KDropdownMenuLabel>내 계정</KDropdownMenuLabel>
            <KDropdownMenuSeparator />
            <KDropdownMenuItem>
              <User className="mr-2 size-4" />
              프로필
            </KDropdownMenuItem>
            <KDropdownMenuItem>
              <Settings className="mr-2 size-4" />
              설정
            </KDropdownMenuItem>
            <KDropdownMenuSeparator />
            <KDropdownMenuItem className="text-destructive">
              <LogOut className="mr-2 size-4" />
              로그아웃
            </KDropdownMenuItem>
          </KDropdownMenuContent>
        </KDropdownMenu>
      </div>
    );
  },
};