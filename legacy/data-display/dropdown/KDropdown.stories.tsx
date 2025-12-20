import type { Meta, StoryObj } from '@storybook/react-vite';
import { K_DROPDOWN_POSITIONS, KDropdown, KDropdownProps } from './index';
import { KIcon, KMenu } from 'src/components';


const meta: Meta<KDropdownProps> = {
  component: KDropdown,
  subcomponents: {
    KDropdownTrigger: KDropdown.Trigger,
    KDropdownContent: KDropdown.Content,
  },
  argTypes: {
    as: {
      description: '',
      control: { type: 'select' },
      options: ['div', 'ul', 'li', 'p', 'span'],
    },
    trigger: {
      description: '드롭다운을 열기 위한 트리거 방식을 설정합니다.',
      control: { type: 'radio' },
      options: ['hover', 'click'],
    },
    position: {
      description: '드롭다운이 표시될 위치를 설정합니다.',
      control: { type: 'select' },
      options: K_DROPDOWN_POSITIONS,
    },
  },
  parameters: {
    layout: 'centered',
  },
  title: 'Data Display/Dropdown',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof KDropdown>

const Template = (args: KDropdownProps) => (
  <KDropdown {...args}>
    <KDropdown.Trigger>
      <KIcon icon="open" size="large"/>
    </KDropdown.Trigger>
    <KDropdown.Content gap={2} offset={{ x: 0, y: 0 }} autoClose>
      <KMenu>
        <KMenu.Item label="Copy" shortcut="⌘C"/>
        <KMenu.Item label="Paste" disabled shortcut="⌘V"/>
        <KMenu.Item label="Cut" shortcut="⌘X"/>
        <KMenu.Item label="Select All" shortcut="⌘A"/>
        <KMenu.ItemDivider/>
        <KMenu.Item label="More" shortcut="⌘M"/>
      </KMenu>
    </KDropdown.Content>
  </KDropdown>
);

export const Default: Story = {
  render: Template,
  args: {
    as: 'div',
    trigger: 'hover',
    position: 'bottom-start',
  },
};

