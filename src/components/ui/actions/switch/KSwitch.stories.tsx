import type { Meta, StoryObj } from '@storybook/react-vite';
import { KSwitch } from '@/components';

const meta: Meta<typeof KSwitch> = {
  title: 'Actions/Switch',
  component: KSwitch,
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    defaultChecked: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof KSwitch>;

export const Default: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <KSwitch id="airplane-mode" {...args} />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};