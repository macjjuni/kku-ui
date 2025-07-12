import type { Meta, StoryObj } from '@storybook/react-vite';
import { K_DROPDOWN_POSITIONS, KDropdown, KDropdownProps } from './index';
import { KIcon, KMenu } from '@/components';


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
      control: { type: 'radio' },
      options: ['hover', 'click'],
    },
    position: {
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
        <KMenu.Item label="복사" shortcut="⌘C"/>
        <KMenu.Item label="붙여넣기" disabled shortcut="⌘V"/>
        <KMenu.Item label="잘라내기" shortcut="⌘X"/>
        <KMenu.Item label="모두선택" shortcut="⌘A"/>
        <KMenu.ItemDivider/>
        <KMenu.Item label="더보기" shortcut="⌘E"/>
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

