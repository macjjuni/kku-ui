import type { Meta, StoryObj } from '@storybook/react-vite';
import { Menu, MenuProps } from './index';
import { MenuItem } from '@/core/menu-item';

const meta: Meta<typeof Menu> = {
  component: Menu,
  subcomponents: {
    MenuItem,
  },
  argTypes: {},
  title: 'Core/Menu',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<MenuProps>

const Template = (args: MenuProps) => (
  <Menu {...args}>
    <MenuItem>Menu1</MenuItem>
    <MenuItem>Menu2</MenuItem>
    <MenuItem>Menu3</MenuItem>
  </Menu>
);

export const Default: Story = {
  render: Template,
  args: {
    as: 'ul',
  },
};