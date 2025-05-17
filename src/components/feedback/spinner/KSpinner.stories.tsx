import type { Meta, StoryObj } from '@storybook/react';
import { KSpinner, KSpinnerProps } from '@/components';
import { baseArgTyp } from '@/common/storybook/argTypes';

const meta: Meta<KSpinnerProps> = {
  component: KSpinner,
  title: 'Feedbacks/Spinner',
  argTypes: {
    ...baseArgTyp,
    size: {
      description: '요소의 크기를 설정합니다.',
      control: { type: 'text' },
      table: {
        type: { summary: 'medium | small | number' },
      },
    },
    color: { description: '테두리 색상을 설정합니다.', type: 'string' },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof KSpinner>

export const Default: Story = {
  args: {
    size: 'medium',
    color: undefined,
  },
};

