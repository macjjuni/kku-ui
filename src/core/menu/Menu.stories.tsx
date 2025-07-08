import type { Meta, StoryObj } from '@storybook/react-vite';
import { Menu, MenuProps } from './index';

const meta: Meta<typeof Menu> = {
  component: Menu,
  argTypes: {},
  title: 'Core/Menu',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Menu>

const Template = (args: MenuProps) => (
  <Menu {...args}>
    <li>123</li>
  </Menu>
);

export const Default: Story = {
  render: Template,
  args: {
    as: 'ul',
  },
};

