import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accessibility, Bluetooth, Lock, Settings, ShieldCheck, Smartphone, Wifi, Zap } from 'lucide-react';
import { KListGroup, KListRow, KListRowAccordion } from '@/components';

const meta: Meta<typeof KListGroup> = {
  title: 'Layout/ListGroup',
  component: KListGroup,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="bg-[#F2F2F7] dark:bg-[#000] min-h-screen p-10">
        <Story/>
      </div>
    ),
  ],
  argTypes: {
    width: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'auto', 'full'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof KListGroup>;


export const Default: Story = {
  render: (args) => (
    <>
      <KListGroup {...args}>
        <KListRow label="Wi-Fi" onClick={() => {
        }}
                  icon={<div className="bg-blue-500 p-1"><Wifi className="text-white w-full h-full"/></div>}/>
        <KListRow label="Bluetooth" onClick={() => {
        }}
                  icon={<div className="bg-blue-600 p-1"><Bluetooth className="text-white w-full h-full"/></div>}/>
        <KListRow label="Battery" onClick={() => {
        }}
                  icon={<div className="bg-green-500 p-1"><Zap className="text-white w-full h-full"/></div>}/>
      </KListGroup>
      <KListGroup {...args}>
        <KListRow label="일반" onClick={() => {}} icon={<div className="bg-[#8E8E93] p-1"><Settings className="text-white w-full h-full"/></div>}
        />
        <KListRow
          label="손쉬운 사용"
          icon={<div className="bg-[#007AFF] p-1"><Accessibility className="text-white w-full h-full"/></div>}
          rightElement={<span className="text-[#8E8E93]">설정됨</span>}
        />
        <KListRow
          label="개인정보 보호 및 보안"
          icon={<div className="bg-[#34C759] p-1"><Lock className="text-white w-full h-full"/></div>}
          onClick={() => {
          }}
        />
      </KListGroup>
    </>
  ),
  // rightElement={<KSelect options={[{ label: 'Label1', value: '1' }]} width="xs" />}
  args: {
    header: '기본 설정',
    footer: '이 설정은 이 기기의 모든 사용자에게 적용됩니다.',
    width: 'md',
  },
};

export const WidthVariations: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <KListGroup width="sm" header="Small (440px)">
        <KListRow label="Wi-Fi" onClick={() => {
        }}
                  icon={<div className="bg-blue-500 p-1"><Wifi className="text-white w-full h-full"/></div>}/>
      </KListGroup>

      <KListGroup width="md" header="Medium (600px)">
        <KListRow label="Bluetooth" onClick={() => {
        }}
                  icon={<div className="bg-blue-600 p-1"><Bluetooth className="text-white w-full h-full"/></div>}/>
      </KListGroup>

      <KListGroup width="full" header="Full Width">
        <KListRow label="Battery" onClick={() => {
        }}
                  icon={<div className="bg-green-500 p-1"><Zap className="text-white w-full h-full"/></div>}/>
      </KListGroup>
    </div>
  ),
};

export const AccordionItems: Story = {
  render: () => (
    <KListGroup>
      <KListRowAccordion value="security" label="보안 및 인증" icon={<Lock className="w-5 h-5 text-red-500"/>}>
        <div className="space-y-2">
          <p>2단계 인증이 활성화되어 있습니다.</p>
          <button type="button" className="text-sm font-medium text-primary">인증 기기 관리</button>
        </div>
      </KListRowAccordion>

      <KListRowAccordion value="device" label="연결된 기기" icon={<Smartphone className="w-5 h-5 text-gray-500"/>} onClick={() => {
        alert(123);
      }}>
        <ul className="list-disc list-inside text-sm">
          <li>iPhone 15 Pro</li>
          <li>MacBook Pro M2</li>
        </ul>
      </KListRowAccordion>

      <KListRow label="개인정보 처리방침" icon={<ShieldCheck className="w-5 h-5 text-green-500"/>}/>
    </KListGroup>
  ),
};