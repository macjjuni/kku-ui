import type { Meta, StoryObj } from '@storybook/react';
import { KSkeleton, KSkeletonProps } from '@/components';
import { baseArgTyp } from '@/common/storybook/argTypes';


const meta: Meta<KSkeletonProps> = {
  component: KSkeleton,
  title: 'Data Display/Skeleton',
  argTypes: {
    width: { description: 'width 크기를 설정합니다.', table: { type: { summary: 'string | number' } } },
    height: { description: 'height 크기를 설정합니다.', control: { type: 'number' } },
    borderRadius: {
      description: 'border-radius 크기를 설정합니다.',
      table: {
        type: { summary: 'string | number' },
      },
    },
    animation: { description: '애니메이션 효과를 설정합니다.', control: { type: 'radio' }, options: ['pulse', 'wave'] },
    ...baseArgTyp,
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof KSkeleton>

const Template = (args: KSkeletonProps) => {

  return (<KSkeleton {...args} />);
};


export const Default: Story = {
  render: Template,
  args: {
    width: '100%',
    height: 80,
    borderRadius: undefined,
    animation: 'pulse',
  },
};

