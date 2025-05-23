import type { Meta, StoryObj } from '@storybook/react';
import { KCard } from '@/components/card';
import { KCardProps } from '@/components';
import { baseArgTyp, disabledArgType, sizeArgType } from '../common/argTypes';
import { SIZES, SizeType } from '@/common/base/base.interface';

const Sizes = Object.keys(SIZES) as SizeType[];

const meta: Meta<KCardProps> = {
  component: KCard,
  title: 'Components/Card',
  argTypes: {
    title: { description: '타이틀 텍스트를 설정합니다..', defaultValue: { summary: '' }, control: { type: 'text'} },
    subTitle: { description: '서브 타이틀 텍스트를 설정합니다..', defaultValue: { summary: '' }, control: { type: 'text'} },
    width: { description: 'width 크기를 설정합니다.', defaultValue: { summary: 'undefined' }, control: { type: 'number'} },
    height: { description: 'height 크기를 설정합니다.', defaultValue: { summary: 'undefined' }, control: { type: 'number'} },
    aspectRatio: { description: 'aspectRatio 비율을 설정합니다.', defaultValue: { summary: 'undefined' }, type: 'string' },
    ...baseArgTyp,
    ...sizeArgType,
    ...disabledArgType
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof KCard>

const Template = (args: KCardProps) => {

  return (<KCard {...args} />);
};


const cardText = {
  title: 'What is Lorem Ipsum?',
  subTitle: 'Lorem Ipsum is simply dummy text of the ...',
  size: Sizes[0],
  aspectRatio: '5/3'
};

export const Default: Story = {
  render: Template, args: { ...cardText },
};

export const Clickable: Story = {
  render: Template, args: { ...cardText, onClick: () => {} },
};

