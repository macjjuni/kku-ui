import type { Meta, StoryObj } from '@storybook/react-vite';
import { Globe, Mail, Search } from 'lucide-react';
import { InputGroupAddon, InputGroupInput, InputGroupText, InputGroupTextarea, KInputGroup, InputGroupButton } from './KInputGroup';
import { KButton } from '@/components';

const meta: Meta<typeof KInputGroup> = {
  title: 'Input/InputGroup',
  component: KInputGroup,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="max-w-[500px] p-10">
        <Story/>
      </div>
    ),
  ],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof KInputGroup>;

// 1. 사이즈 비교 (Context 로직 확인용)
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="space-y-2">
        <p className="text-xs font-mono text-muted-foreground">Size: Small (sm)</p>
        <KInputGroup size="sm">
          <InputGroupAddon align="inline-start">
            <Search className="size-3"/>
          </InputGroupAddon>
          <InputGroupInput placeholder="Small input group..."/>
          <InputGroupAddon align="inline-end">
            <InputGroupButton>Action</InputGroupButton>
          </InputGroupAddon>
        </KInputGroup>
      </div>

      <div className="space-y-2">
        <p className="text-xs font-mono text-muted-foreground">Size: Medium (md)</p>
        <KInputGroup size="md">
          <InputGroupAddon align="inline-start">
            <Search className="size-4"/>
          </InputGroupAddon>
          <InputGroupInput placeholder="Medium input group..."/>
          <InputGroupAddon align="inline-end">
            <InputGroupButton>Action</InputGroupButton>
          </InputGroupAddon>
        </KInputGroup>
      </div>

      <div className="space-y-2">
        <p className="text-xs font-mono text-muted-foreground">Size: Large (lg)</p>
        <KInputGroup size="lg">
          <InputGroupAddon align="inline-start">
            <Search className="size-5"/>
          </InputGroupAddon>
          <InputGroupInput placeholder="Large input group..."/>
          <InputGroupAddon align="inline-end">
            <InputGroupButton>Action</InputGroupButton>
          </InputGroupAddon>
        </KInputGroup>
      </div>
    </div>
  ),
};

// 2. URL 입력 (Prefix 텍스트)
export const URLInput: Story = {
  args: { size: 'md' },
  render: (args) => (
    <KInputGroup {...args}>
      <InputGroupAddon align="inline-start">
        <Globe className="size-4"/>
        <InputGroupText>https://</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="example.com"/>
    </KInputGroup>
  ),
};

// 3. 에러 상태 (aria-invalid 체크)
export const ErrorState: Story = {
  render: () => (
    <KInputGroup>
      <InputGroupAddon align="inline-start">
        <Mail className="size-4"/>
      </InputGroupAddon>
      <InputGroupInput
        placeholder="wrong-email"
        aria-invalid="true"
      />
      <InputGroupAddon align="inline-end">
        <InputGroupText className="text-danger">Invalid</InputGroupText>
      </InputGroupAddon>
    </KInputGroup>
  ),
};

// 4. 메시지 전송 (Textarea + 하단 버튼)
export const ChatInput: Story = {
  render: () => (
    <KInputGroup>
      <InputGroupTextarea placeholder="메시지를 입력하세요..." className="min-h-[80px]"/>
      <InputGroupAddon align="inline-end" className="items-end pb-2">
        <KButton variant="primary" size="md">
          Send
        </KButton>
      </InputGroupAddon>
    </KInputGroup>
  ),
};

// 5. 복합 레이아웃 (Block Start)
export const BlockLayout: Story = {
  render: () => (
    <KInputGroup>
      <InputGroupAddon align="block-start" className="border-b bg-muted/30">
        <InputGroupText className="text-[10px] font-bold uppercase tracking-wider">User Token</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="Enter your token here..." className="py-6"/>
      <InputGroupAddon align="inline-end">
        <KButton variant="primary">Verify</KButton>
      </InputGroupAddon>
    </KInputGroup>
  ),
};