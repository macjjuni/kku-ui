import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  KBottomSheet, KBottomSheetTrigger, KBottomSheetContent, KBottomSheetHeader,
  KBottomSheetFooter, KBottomSheetTitle, KBottomSheetDescription, KBottomSheetClose,
} from "./KBottomSheet";
import { KButton, KSwitch } from "@/components";

const meta: Meta<typeof KBottomSheet> = {
  title: "DataDisplay/BottomSheet",
  component: KBottomSheet,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["sm", "md"],
      description: "바텀시트 내부 요소들의 크기와 간격을 결정합니다.",
    },
    shouldScaleBackground: {
      control: "boolean",
      description: "열릴 때 배경 화면이 작아지는 애니메이션 효과 여부입니다.",
    },
  },
  parameters: {
    layout: "centered",
    viewport: {
      defaultViewport: "iphone14", // 모바일 뷰에서 확인 권장
    },
  },
};

export default meta;
type Story = StoryObj<typeof KBottomSheet>;

export const Default: Story = {
  render: (args) => (
    <KBottomSheet {...args}>
      <KBottomSheetTrigger asChild>
        <KButton variant="outline">바텀시트 열기</KButton>
      </KBottomSheetTrigger>
      <KBottomSheetContent>
        <KBottomSheetHeader>
          <KBottomSheetTitle>작업 확인</KBottomSheetTitle>
          <KBottomSheetDescription>
            이 설정을 변경하면 앱의 테마가 즉시 업데이트됩니다.
          </KBottomSheetDescription>
        </KBottomSheetHeader>
        <div className="py-6 flex flex-col gap-4">
          <div className="flex items-center justify-between border-b pb-2">
            <span>다크 모드</span>
            <KSwitch />
          </div>
          <div className="flex items-center justify-between border-b pb-2">
            <span>알림 설정</span>
            <KSwitch />
          </div>
        </div>
        <KBottomSheetFooter>
          <KButton variant="primary" width="full">변경사항 저장</KButton>
          <KBottomSheetClose asChild>
            <KButton variant="ghost" width="full">취소</KButton>
          </KBottomSheetClose>
        </KBottomSheetFooter>
      </KBottomSheetContent>
    </KBottomSheet>
  ),
};

export const Small: Story = {
  args: {
    size: "sm",
  },
  render: (args) => (
    <KBottomSheet {...args}>
      <KBottomSheetTrigger asChild>
        <KButton variant="outline">Small 시트 열기</KButton>
      </KBottomSheetTrigger>
      <KBottomSheetContent>
        <KBottomSheetHeader>
          <KBottomSheetTitle>필터 선택</KBottomSheetTitle>
          <KBottomSheetDescription>카테고리를 선택해주세요.</KBottomSheetDescription>
        </KBottomSheetHeader>
        <div className="flex gap-2 flex-wrap py-2">
          {["최신순", "인기순", "가격순"].map((t) => (
            <span key={t} className="px-3 py-1 bg-gray-100 rounded-full text-xs">{t}</span>
          ))}
        </div>
        <KBottomSheetFooter>
          <KButton size="sm" width="full">적용하기</KButton>
        </KBottomSheetFooter>
      </KBottomSheetContent>
    </KBottomSheet>
  ),
};