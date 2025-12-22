import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  KAccordion,
  KAccordionItem,
  KAccordionTrigger,
  KAccordionContent,
} from "./KAccordion";

const meta: Meta<typeof KAccordion> = {
  title: "DataDisplay/Accordion",
  component: KAccordion,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "radio",
      options: ["single", "multiple"],
      description: "동시 오픈 가능 여부",
    },
    size: {
      control: "radio",
      options: ["sm", "md"],
      description: "아코디언 크기",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KAccordion>;

export const Default: Story = {
  args: {
    type: "single",
    collapsible: true,
    size: "md",
  },
  render: (args) => (
    <KAccordion {...args} className="w-full max-w-[400px]">
      <KAccordionItem value="item-1">
        <KAccordionTrigger>접근성을 지원하나요?</KAccordionTrigger>
        <KAccordionContent>
          네. WAI-ARIA 디자인 패턴을 준수하여 설계되었습니다.
        </KAccordionContent>
      </KAccordionItem>
      <KAccordionItem value="item-2">
        <KAccordionTrigger>스타일 수정이 가능한가요?</KAccordionTrigger>
        <KAccordionContent>
          네. 다른 컴포넌트들의 디자인 시스템과 일치하는 기본 스타일이 제공됩니다.
        </KAccordionContent>
      </KAccordionItem>
    </KAccordion>
  ),
};

export const Small: Story = {
  args: {
    type: "single",
    size: "sm",
    collapsible: true,
  },
  render: (args) => (
    <KAccordion {...args} className="w-full max-w-[400px]">
      <KAccordionItem value="item-1">
        <KAccordionTrigger>작은 사이즈 아코디언</KAccordionTrigger>
        <KAccordionContent>
          내용 영역의 텍스트와 간격도 사이즈 설정에 맞춰 작아집니다.
        </KAccordionContent>
      </KAccordionItem>
    </KAccordion>
  ),
};

export const Multiple: Story = {
  args: {
    type: "multiple",
  },
  render: (args) => (
    <KAccordion {...args} className="w-full max-w-[400px]">
      <KAccordionItem value="item-1">
        <KAccordionTrigger>여러 개를 동시에 열 수 있나요?</KAccordionTrigger>
        <KAccordionContent>
          네, 타입을 &quot;multiple&quot;로 설정하면 여러 항목을 동시에 펼칠 수 있습니다.
        </KAccordionContent>
      </KAccordionItem>
      <KAccordionItem value="item-2">
        <KAccordionTrigger>테스트 해보세요</KAccordionTrigger>
        <KAccordionContent>
          첫 번째 항목이 열려 있는 상태에서도 이 항목을 열 수 있습니다.
        </KAccordionContent>
      </KAccordionItem>
    </KAccordion>
  ),
};