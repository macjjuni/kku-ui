import type { Meta, StoryObj } from "@storybook/react-vite";
import { KBottomSheet, KBottomSheetTrigger, KBottomSheetContent, KBottomSheetHeader, KBottomSheetFooter,
  KBottomSheetTitle, KBottomSheetDescription, KBottomSheetClose, KButton, KSwitch } from "@/components";

const meta: Meta<typeof KBottomSheet> = {
  title: "DataDisplay/BottomSheet",
  component: KBottomSheet,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["sm", "md"],
      description: "바텀시트 내부 요소들의 크기와 간격을 결정합니다.",
      table: {
        defaultValue: { summary: "md" },
      },
    },
    opacity: {
      control: { type: "range", min: 0, max: 100, step: 5 },
      description: "오버레이의 불투명도를 0~100 사이의 값으로 설정합니다.",
      table: {
        defaultValue: { summary: "40" },
      },
    },
    blur: {
      control: { type: "range", min: 0, max: 20, step: 1 },
      description: "오버레이의 블러(흐림) 효과 강도를 픽셀 단위로 설정합니다.",
      table: {
        defaultValue: { summary: "0" },
      },
    },
    shouldScaleBackground: {
      control: "boolean",
      description: "열릴 때 배경 화면이 작아지는 애니메이션 효과 여부입니다.",
      table: {
        defaultValue: { summary: "true" },
      },
    },
    open: {
      control: "boolean",
      description: "바텀시트의 열림/닫힘 상태를 제어합니다. (제어 컴포넌트로 사용 시)",
    },
    defaultOpen: {
      control: "boolean",
      description: "바텀시트의 초기 열림 상태를 설정합니다. (비제어 컴포넌트로 사용 시)",
    },
    onOpenChange: {
      action: "onOpenChange",
      description: "바텀시트의 열림/닫힘 상태가 변경될 때 호출되는 콜백 함수입니다.",
      table: {
        type: { summary: "(open: boolean) => void" },
      },
    },
    modal: {
      control: "boolean",
      description: "모달 모드 여부를 설정합니다. true일 경우 오버레이 외부 클릭 시 닫힙니다.",
      table: {
        defaultValue: { summary: "true" },
      },
    },
    dismissible: {
      control: "boolean",
      description: "드래그하여 바텀시트를 닫을 수 있는지 여부를 설정합니다.",
      table: {
        defaultValue: { summary: "true" },
      },
    },
    closeThreshold: {
      control: { type: "number", min: 0, max: 1, step: 0.1 },
      description: "드래그로 바텀시트를 닫기 위한 임계값입니다. 0~1 사이의 값으로 설정합니다.",
      table: {
        defaultValue: { summary: "0.25" },
      },
    },
    scrollLockTimeout: {
      control: "number",
      description: "스크롤 잠금이 적용되기까지의 지연 시간(밀리초)입니다.",
      table: {
        defaultValue: { summary: "100" },
      },
    },
    fixed: {
      control: "boolean",
      description: "바텀시트를 고정 위치로 렌더링할지 여부입니다.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    handleOnly: {
      control: "boolean",
      description: "핸들 영역에서만 드래그가 가능하도록 제한합니다.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    direction: {
      control: "inline-radio",
      options: ["top", "bottom", "left", "right"],
      description: "바텀시트가 나타나는 방향을 설정합니다.",
      table: {
        defaultValue: { summary: "bottom" },
      },
    },
    preventScrollRestoration: {
      control: "boolean",
      description: "브라우저의 스크롤 위치 복원을 방지합니다.",
      table: {
        defaultValue: { summary: "true" },
      },
    },
    noBodyStyles: {
      control: "boolean",
      description: "body 요소에 자동으로 적용되는 스타일을 비활성화합니다.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    setBackgroundColorOnScale: {
      control: "boolean",
      description: "shouldScaleBackground가 true일 때 배경색을 자동으로 설정할지 여부입니다.",
      table: {
        defaultValue: { summary: "true" },
      },
    },
    disablePreventScroll: {
      control: "boolean",
      description: "바텀시트가 열릴 때 배경 스크롤 방지를 비활성화합니다.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    repositionInputs: {
      control: "boolean",
      description: "모바일 키보드가 나타날 때 입력 필드의 위치를 자동으로 조정합니다.",
      table: {
        defaultValue: { summary: "true" },
      },
    },
    snapToSequentialPoint: {
      control: "boolean",
      description: "드래그 시 순차적인 스냅 포인트로 이동할지 여부입니다.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    autoFocus: {
      control: "boolean",
      description: "바텀시트가 열릴 때 자동으로 포커스를 설정합니다.",
      table: {
        defaultValue: { summary: "true" },
      },
    },
    onAnimationEnd: {
      action: "onAnimationEnd",
      description: "바텀시트 애니메이션이 종료될 때 호출되는 콜백 함수입니다.",
      table: {
        type: { summary: "(open: boolean) => void" },
      },
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