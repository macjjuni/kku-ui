import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, ButtonProps } from './index';

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
  },
  title: 'Core/Button',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>

const Template = (args: ButtonProps) => (
  <Button {...args} />
);

export const Default: Story = {
  render: Template,
  args: {
    label: 'Button',
  },
};

