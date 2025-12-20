import type { Meta, StoryObj } from '@storybook/react-vite';
import { KSpinner, KSpinnerProps } from 'src/components';
import { SIZES } from 'src/common/base/base.interface';

const meta: Meta<KSpinnerProps> = {
  component: KSpinner,
  title: 'Feedbacks/Spinner',
  argTypes: {
    size: {
      description: '요소의 크기를 설정합니다.',
      control: { type: 'radio' },
      options: SIZES,
      table: {
        type: { summary: SIZES.concat('number').join(' | ') },
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

