import type { Meta, StoryObj } from '@storybook/react-vite';
import { Switch, SwitchProps } from './index';

const meta: Meta<typeof Switch> = {
  component: Switch,
  argTypes: {
  },
  title: 'Core/Switch',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Switch>

const Template = (args: SwitchProps) => (
  <Switch {...args} />
);

export const Default: Story = {
  render: Template,
  args: {
    value: true,
    children: undefined,
  },
};

