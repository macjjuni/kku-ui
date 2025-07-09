import type { Meta, StoryObj } from '@storybook/react-vite';
import { KMenu, KMenuItem, KMenuProps } from '.';
import { sizeArgType } from '@/common/storybook/argTypes';


const meta: Meta<KMenuProps> = {
  component: KMenu,
  subcomponents: {
    KMenuItem,
  },
  title: 'Data Display/Menu',
  argTypes: {
    ...sizeArgType,
    width: {
      control: { type: 'number' },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof KMenu>

const Template = (args: KMenuProps) => (
  <KMenu {...args}>
    {/* <KMenuItem leftContent={<KIcon icon="react" size="small" />} label="React" shortcut="⌘R" /> */}
    {/* <KMenuItem leftContent={<KIcon icon="vue" size="small" />} label="Vue" shortcut="⌘V" /> */}
    {/* <KMenuItem leftContent={<KIcon icon="typescript" size="small" />} label="TypeScript" shortcut="⌘T" /> */}
    {/* <KMenuItem leftContent={<KIcon icon="javascript" size="small" />} label="JavaScript" shortcut="⌘J" /> */}
    <KMenuItem label="복사" shortcut="⌘C"/>
    <KMenuItem label="붙여넣기" disabled shortcut="⌘V"/>
    <KMenuItem label="잘라내기" shortcut="⌘X"/>
    <KMenuItem label="모두선택" shortcut="⌘A"/>
  </KMenu>
);

export const Default: Story = {
  render: Template,
  args: {
    size: 'medium',
  },
};

