import type { Meta, StoryObj } from '@storybook/react-vite';
import { Globe, Mail, Search } from 'lucide-react';
import { KInputGroupAddon, KInputGroupInput, KInputGroupText, KInputGroupTextarea, KInputGroup, KInputGroupButton } from './KInputGroup';
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
          <KInputGroupAddon align="inline-start">
            <Search className="size-3"/>
          </KInputGroupAddon>
          <KInputGroupInput placeholder="Small input group..."/>
          <KInputGroupAddon align="inline-end">
            <KInputGroupButton>Action</KInputGroupButton>
          </KInputGroupAddon>
        </KInputGroup>
      </div>

      <div className="space-y-2">
        <p className="text-xs font-mono text-muted-foreground">Size: Medium (md)</p>
        <KInputGroup size="md">
          <KInputGroupAddon align="inline-start">
            <Search className="size-4"/>
          </KInputGroupAddon>
          <KInputGroupInput placeholder="Medium input group..."/>
          <KInputGroupAddon align="inline-end">
            <KInputGroupButton>Action</KInputGroupButton>
          </KInputGroupAddon>
        </KInputGroup>
      </div>

      <div className="space-y-2">
        <p className="text-xs font-mono text-muted-foreground">Size: Large (lg)</p>
        <KInputGroup size="lg">
          <KInputGroupAddon align="inline-start">
            <Search className="size-5"/>
          </KInputGroupAddon>
          <KInputGroupInput placeholder="Large input group..."/>
          <KInputGroupAddon align="inline-end">
            <KInputGroupButton>Action</KInputGroupButton>
          </KInputGroupAddon>
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
      <KInputGroupAddon align="inline-start">
        <Globe className="size-4"/>
        <KInputGroupText>https://</KInputGroupText>
      </KInputGroupAddon>
      <KInputGroupInput placeholder="example.com"/>
    </KInputGroup>
  ),
};

// 3. 에러 상태 (aria-invalid 체크)
export const ErrorState: Story = {
  render: () => (
    <KInputGroup>
      <KInputGroupAddon align="inline-start">
        <Mail className="size-4"/>
      </KInputGroupAddon>
      <KInputGroupInput
        placeholder="wrong-email"
        aria-invalid="true"
      />
      <KInputGroupAddon align="inline-end">
        <KInputGroupText className="text-danger">Invalid</KInputGroupText>
      </KInputGroupAddon>
    </KInputGroup>
  ),
};

// 4. 메시지 전송 (Textarea + 하단 버튼)
export const ChatInput: Story = {
  render: () => (
    <KInputGroup>
      <KInputGroupTextarea placeholder="메시지를 입력하세요..." className="min-h-[80px]"/>
      <KInputGroupAddon align="inline-end" className="items-end pb-2">
        <KButton variant="primary" size="md">
          Send
        </KButton>
      </KInputGroupAddon>
    </KInputGroup>
  ),
};

// 5. 복합 레이아웃 (Block Start)
export const BlockLayout: Story = {
  render: () => (
    <KInputGroup>
      <KInputGroupAddon align="block-start" className="border-b bg-muted/30">
        <KInputGroupText className="text-[10px] font-bold uppercase tracking-wider">User Token</KInputGroupText>
      </KInputGroupAddon>
      <KInputGroupInput placeholder="Enter your token here..." className="py-6"/>
      <KInputGroupAddon align="inline-end">
        <KButton variant="primary">Verify</KButton>
      </KInputGroupAddon>
    </KInputGroup>
  ),
};