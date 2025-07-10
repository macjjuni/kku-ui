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
      <KIcon icon="dev" size={28}/>
    </KDropdown.Trigger>
    <KDropdown.Content gap={2} offset={{ x: 0, y: 0 }} autoClose>
      <KMenu>
        <KMenu.Item leftContent={<KIcon icon="react"/>} label="React"/>
        <KMenu.Item leftContent={<KIcon icon="vue"/>} label="Vue"/>
        <KMenu.Item leftContent={<KIcon icon="typescript"/>} label="TypeScript"/>
        <KMenu.Item leftContent={<KIcon icon="javascript"/>} label="JavaScript"/>
      </KMenu>
    </KDropdown.Content>
  </KDropdown>
);

export const Default: Story = {
  render: Template,
  args: {
    trigger: 'hover',
    position: 'bottom-start',
  },
};

