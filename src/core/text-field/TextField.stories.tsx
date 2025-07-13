import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextField, TextFieldProps } from './index';

const meta: Meta<typeof TextField> = {
  component: TextField,
  argTypes: {
  },
  title: 'Core/TextField',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TextField>

const Template = (args: TextFieldProps) => (
  <TextField {...args} />
);

export const Default: Story = {
  render: Template,
  args: {
    label: 'label',
  },
};

