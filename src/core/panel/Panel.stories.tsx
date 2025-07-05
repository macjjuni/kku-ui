import type { Meta, StoryObj } from '@storybook/react-vite';
import { Panel, PanelProps } from './index';

const meta: Meta<typeof Panel> = {
  component: Panel,
  argTypes: {},
  title: 'Core/Panel',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Panel>

const Template = (args: PanelProps) => (
  <Panel {...args} />
);

export const Default: Story = {
  render: Template,
  args: {
    as: 'div',
    ratio: '5/3',
    children: 'Panel',
  },
};

