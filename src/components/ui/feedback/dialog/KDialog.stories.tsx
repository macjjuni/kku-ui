import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  KDialog, KDialogTrigger, KDialogContent, KDialogHeader,
  KDialogFooter, KDialogTitle, KDialogDescription, KDialogClose,
} from './KDialog';
import { KButton, KTextField } from '@/components';

const meta: Meta<typeof KDialog> = {
  title: 'DataDisplay/Dialog',
  component: KDialog,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md"], // 컴포넌트 구현 시 정의한 문자열과 일치해야 함
      description: "다이얼로그의 전체적인 크기를 결정합니다.",
      table: {
        defaultValue: { summary: "medium" },
      },
    },
    open: {
      control: "boolean",
      description: "다이얼로그의 열림 상태를 강제로 제어합니다 (Controlled).",
    },
    modal: {
      control: "boolean",
      description: "false일 경우 배경 클릭 및 외부 상호작용이 가능해집니다.",
      table: {
        defaultValue: { summary: "true" },
      },
    },
    onOpenChange: {
      action: "onOpenChange",
      description: "열림 상태가 변경될 때 실행되는 콜백 함수입니다.",
    },
    opacity: {
      control: { type: "range", min: 0, max: 100, step: 1 },
      description: "배경 오버레이의 투명도를 조절합니다 (0-100).",
      table: {
        defaultValue: { summary: "80" },
      },
    },
    blur: {
      control: { type: "range", min: 0, max: 20, step: 1 },
      description: "오버레이 블러 강도 (px)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KDialog>;

export const Default: Story = {
  render: (args) => (
    <KDialog {...args}>
      <KDialogTrigger asChild>
        <KButton>열기</KButton>
      </KDialogTrigger>
      <KDialogContent>
        <KDialogHeader>
          <KDialogTitle>정말 진행하시겠습니까?</KDialogTitle>
          <KDialogDescription>
            이 작업은 되돌릴 수 없습니다. 서버에서 데이터가 영구적으로 삭제됩니다.
          </KDialogDescription>
        </KDialogHeader>
        <div>
          여기에 커스텀 양식이나 추가 내용을 넣을 수 있습니다.
        </div>
        <KDialogFooter>
          <KDialogClose asChild>
            <KButton>취소</KButton>
          </KDialogClose>
          <KDialogClose asChild>
            <KButton variant="danger">삭제</KButton>
          </KDialogClose>
        </KDialogFooter>
      </KDialogContent>
    </KDialog>
  ),
};

export const Small: Story = {
  render: (args) => (
    <KDialog size="sm" {...args}>
      <KDialogTrigger className="px-3 py-1.5 text-xs bg-primary text-white rounded-md">Small 모달</KDialogTrigger>
      <KDialogContent>
        <KDialogHeader>
          <KDialogTitle>작은 다이얼로그</KDialogTitle>
          <KDialogDescription>사이즈가 작게 설정된 모달입니다.</KDialogDescription>
        </KDialogHeader>
        <div>작은 폼 요소들을 넣기에 적합합니다</div>
        <KDialogFooter>
          <KDialogClose asChild>
            <KButton size="sm">닫기</KButton>
          </KDialogClose>
          <KButton variant="primary" size="sm">저장</KButton>
        </KDialogFooter>
      </KDialogContent>
    </KDialog>
  ),
};

export const CustomContent: Story = {
  render: (args) => (
    <KDialog {...args}>
      <KDialogTrigger className="underline text-blue-500">프로필 생성</KDialogTrigger>
      <KDialogContent className="sm:max-w-[425px]">
        <KDialogHeader>
          <KDialogTitle>프로필 작성</KDialogTitle>
          <KDialogDescription>변경 사항을 입력하고 저장을 누르세요.</KDialogDescription>
        </KDialogHeader>
        <div className="grid gap-2">
          <KTextField label="이름" placeholder="홍길동"/>
          <KTextField label="아이디" placeholder="@gildong" />
        </div>
        <KDialogFooter>
          <KDialogClose asChild>
            <KButton variant="primary" width="full">저장</KButton>
          </KDialogClose>
        </KDialogFooter>
      </KDialogContent>
    </KDialog>
  ),
};