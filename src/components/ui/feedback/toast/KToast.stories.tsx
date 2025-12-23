import type { Meta, StoryObj } from "@storybook/react-vite";
import { KToast, kToast } from "./KToast";
import { KButton } from "@/components";

const meta: Meta<typeof KToast> = {
  title: "Feedback/Toast",
  component: KToast,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg", "full"],
      description: "토스트의 너비를 결정합니다.",
      table: {
        defaultValue: { summary: "md" },
      },
    },
    position: {
      control: "select",
      options: [
        "top-left", "top-center", "top-right",
        "bottom-left", "bottom-center", "bottom-right",
      ],
      description: "토스트가 나타나는 위치를 설정합니다.",
      table: {
        defaultValue: { summary: "bottom-right" },
      },
    },
    expand: {
      control: "boolean",
      description: "여러 토스트가 쌓였을 때 펼쳐서 보여줄지 여부입니다.",
    },
    richColors: {
      control: "boolean",
      description: "상태별(성공, 에러 등) 테마 색상을 적용합니다.",
    },
    closeButton: {
      control: "boolean",
      description: "닫기 버튼 표시 여부입니다.",
    },
    duration: {
      control: { type: "number", step: 500 },
      description: "토스트가 유지되는 시간(ms)입니다.",
    },
  },
};

export default meta;

export const Default: StoryObj = {
  render: (args) => (
    <div>
      <KToast {...args} />
      <div className="flex gap-2">
        <KButton variant="outline" onClick={() => kToast("기본 토스트입니다.")}>
          기본 토스트
        </KButton>
        <KButton variant="primary" onClick={() => kToast.success("작업이 완료되었습니다.")}>
          성공 토스트
        </KButton>
        <KButton variant="danger" onClick={() => kToast.error("오류가 발생했습니다.")}>
          에러 토스트
        </KButton>
      </div>
    </div>
  ),
};