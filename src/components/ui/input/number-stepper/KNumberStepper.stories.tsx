import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { KNumberStepper } from '@/components';

const meta: Meta<typeof KNumberStepper> = {
  title: 'Input/NumberStepper',
  component: KNumberStepper,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    onChange: { action: 'changed' },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
    step: { control: 'number' },
    inputWidth: { control: 'number' },
    precision: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof KNumberStepper>;

export const Default: Story = {
  args: {},
};

export const Sizes: Story = {
  render: () => (
    <div className="inline-flex flex-row gap-4">
      <KNumberStepper size="sm" />
      <KNumberStepper size="md" />
      <KNumberStepper size="lg" />
    </div>
  ),
};

export const StepAndRange: Story = {
  args: {
    min: 0,
    max: 100,
    step: 10,
  },
};

export const Controlled: Story = {
  render: function Render(args) {
    const [val, setVal] = useState(0);
    return (
      <div className="inline-flex flex-col gap-2">
        <KNumberStepper {...args} value={val} onChange={setVal}/>
        <p className="text-sm text-muted-foreground">
          Current Value:
          {val}
        </p>
      </div>
    );
  },
};