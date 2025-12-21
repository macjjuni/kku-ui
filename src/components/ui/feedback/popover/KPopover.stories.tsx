import type { Meta, StoryObj } from '@storybook/react-vite';
import { KPopover, KPopoverTrigger, KPopoverContent } from './KPopover';
import { KTextField, KButton } from '@/components';

const meta: Meta<typeof KPopoverContent> = {
  title: 'Feedback/KPopover', // Popover는 Overlay나 Feedbacks로 분류
  component: KPopoverContent,
  tags: ['autodocs'],
  argTypes: {
    side: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end'],
    },
    sideOffset: {
      control: 'number',
    },
  },
};

export default meta;

type Story = StoryObj<typeof KPopoverContent>;


export const Default: Story = {
  args: {
    side: 'bottom',
    align: 'center',
    sideOffset: 4,
  },
  render: (args) => (
    <div className="flex justify-center p-60">
      <KPopover>
        <KPopoverTrigger asChild>
          <KButton variant="outline">설정 열기</KButton>
        </KPopoverTrigger>
        <KPopoverContent {...args} className="w-64">
          <div className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">디스플레이 설정</h4>
              <p className="text-xs text-muted-foreground">
                화면에 표시될 정보를 제어합니다.
              </p>
            </div>
            <KTextField label="너비" defaultValue="100%" size="sm"/>
            <KTextField label="높이" defaultValue="auto" size="sm"/>
          </div>
        </KPopoverContent>
      </KPopover>
    </div>
  ),
};

export const WithForm: Story = {
  render: (args) => (
    <div className="flex justify-center p-60">
      <KPopover>
        <KPopoverTrigger asChild>
          <KButton>로그인 정보</KButton>
        </KPopoverTrigger>
        <KPopoverContent className="w-80" {...args}>
          <div className="grid gap-4">
            <h3 className="text-lg font-semibold">인증 필요</h3>
            <KTextField label="이메일" type="email" placeholder="user@kku.com"/>
            <KButton variant="primary" className="w-full">인증메일 발송</KButton>
          </div>
        </KPopoverContent>
      </KPopover>
    </div>
  ),
};