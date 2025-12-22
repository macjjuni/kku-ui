// KTextarea.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { KTextarea } from "./KTextarea";

const meta: Meta<typeof KTextarea> = {
  title: "Input/KTextarea",
  component: KTextarea,
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
    },
    placeholder: {
      control: "text",
    },
  },
  decorators: [
    (Story) => (
      <div className="max-w-[500px] p-6">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof KTextarea>;

// 1. 기본 상태
export const Default: Story = {
  args: {
    placeholder: "내용을 입력해주세요...",
  },
};

// 2. 고정 높이 (Rows 사용)
export const FixedRows: Story = {
  args: {
    rows: 5,
    placeholder: "5줄 높이의 텍스트 영역입니다.",
  },
};

// 3. 리사이즈 금지
export const NoResize: Story = {
  args: {
    className: "resize-none",
    placeholder: "우측 하단 리사이즈 핸들이 없는 상태입니다.",
  },
};

// 4. 비활성화 상태
export const Disabled: Story = {
  args: {
    disabled: true,
    value: "수정할 수 없는 비활성화된 텍스트 영역입니다.",
  },
};