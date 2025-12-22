// KInput.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { KInput } from "./KInput";

const meta: Meta<typeof KInput> = {
  title: "Input/KInput",
  component: KInput,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "password", "email", "number", "tel"],
    },
    disabled: {
      control: "boolean",
    },
  },
  // 중앙 정렬을 위한 데코레이터
  decorators: [
    (Story) => (
      <div className="max-w-[400px] p-6">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof KInput>;

// 1. 기본 상태
export const Default: Story = {
  args: {
    placeholder: "내용을 입력하세요",
  },
};

// 2. 비밀번호 (타입 확인)
export const Password: Story = {
  args: {
    type: "password",
    placeholder: "비밀번호를 입력하세요",
  },
};

// 3. 비활성화 상태
export const Disabled: Story = {
  args: {
    disabled: true,
    value: "수정할 수 없는 값",
  },
};


// 4. 모바일 환경 테스트 가이드 (Story 설명용)
export const MobileResponsive: Story = {
  args: {
    placeholder: "iOS에서 확대되지 않는 16px 확인",
  },
  parameters: {
    viewport: {
      defaultViewport: "iphone14",
    },
  },
};