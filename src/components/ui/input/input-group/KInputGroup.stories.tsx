// KInputGroup.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Search, Mail, Check, Globe } from "lucide-react";
import {
  KInputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
} from "@/components";

const meta: Meta<typeof KInputGroup> = {
  title: "Input/InputGroup",
  component: KInputGroup,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="max-w-[500px] p-10">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof KInputGroup>;

// 1. Search 바 형태 (아이콘 + 인풋 + 버튼)
export const SearchBar: Story = {
  render: () => (
    <KInputGroup>
      <InputGroupAddon align="inline-start">
        <Search className="size-4 text-muted-foreground" />
      </InputGroupAddon>
      <InputGroupInput placeholder="검색어를 입력하세요..." />
      <InputGroupAddon align="inline-end">
        <InputGroupButton variant="secondary">검색</InputGroupButton>
      </InputGroupAddon>
    </KInputGroup>
  ),
};

// 2. URL 입력 (Prefix 텍스트)
export const URLInput: Story = {
  render: () => (
    <KInputGroup>
      <InputGroupAddon align="inline-start">
        <Globe className="size-4" />
        <InputGroupText>https://</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="example.com" />
    </KInputGroup>
  ),
};

// 3. 에러 상태 (aria-invalid 체크)
export const ErrorState: Story = {
  render: () => (
    <KInputGroup>
      <InputGroupAddon align="inline-start">
        <Mail className="size-4" />
      </InputGroupAddon>
      <InputGroupInput
        placeholder="wrong-email"
        aria-invalid="true" // KInputGroup의 has-셀렉터가 이 속성을 감지하여 border-danger 적용
      />
      <InputGroupAddon align="inline-end">
        <InputGroupText className="text-danger">Invalid</InputGroupText>
      </InputGroupAddon>
    </KInputGroup>
  ),
};

// 4. 텍스트 영역 (Textarea)
export const WithTextarea: Story = {
  render: () => (
    <KInputGroup>
      <InputGroupTextarea placeholder="설명을 입력하세요 (높이 자동 조절)" />
      <InputGroupAddon align="inline-end" className="items-end pb-2">
        <InputGroupButton size="icon-sm">
          <Check className="size-4" />
        </InputGroupButton>
      </InputGroupAddon>
    </KInputGroup>
  ),
};

// 5. 상단 배정 (Block Start)
export const BlockStartAddon: Story = {
  render: () => (
    <KInputGroup>
      <InputGroupAddon align="block-start" className="border-b bg-muted/50">
        <InputGroupText className="text-xs font-bold uppercase">Field Label</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="Block start layout" />
    </KInputGroup>
  ),
};