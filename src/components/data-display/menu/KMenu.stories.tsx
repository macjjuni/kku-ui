import type { Meta, StoryObj } from '@storybook/react-vite';
import { KMenu, KMenuItem, KMenuProps } from ".";
import { sizeArgType } from '@/common/storybook/argTypes';
import { KIcon } from "@/components";


const meta: Meta<KMenuProps> = {
  component: KMenu,
  subcomponents: {
    KMenuItem,
  },
  title: 'Data Display/Menu',
  argTypes: {
    ...sizeArgType,
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof KMenu>

const Template = (args: KMenuProps) => (
  <KMenu {...args}>
    <KMenuItem leftContent={<KIcon icon="react" size="small" />} label="React" shortcut="⌘R" />
    <KMenuItem leftContent={<KIcon icon="vue" size="small" />} label="Vue" shortcut="⌘V" />
    <KMenuItem leftContent={<KIcon icon="typescript" size="small" />} label="TypeScript" shortcut="⌘T" />
    <KMenuItem leftContent={<KIcon icon="javascript" size="small" />} label="JavaScript" shortcut="⌘J" />
  </KMenu>
);

export const Default: Story = {
  render: Template,
  args: {},
};

