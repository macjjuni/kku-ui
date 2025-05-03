import type { Meta, StoryObj } from '@storybook/react';
import { KCard } from '@/components/card';
import { KCardProps } from '@/components';
import { baseArgTyp, sizeArgType } from '../common/argTypes';
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
    padding: { description: 'padding 크기를 설정합니다.', defaultValue: { summary: 'undefined' }, control: { type: 'number'} },
    borderRadius: { description: 'border radius 크기를 설정합니다.', defaultValue: { summary: 'undefined' }, control: { type: 'number'} },
    color: { description: '카드 요소 메인 색상을 설정합니다.', defaultValue: { summary: 'undefined' } },
    fontColor: { description: '카드 요소 내부 텍스트 색상을 설정합니다.', defaultValue: { summary: 'undefined' } },
    ...baseArgTyp,
    ...sizeArgType
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
};

export const Default: Story = {
  render: Template, args: { ...cardText, clickable: false },
};

export const Clickable: Story = {
  render: Template, args: { ...cardText, clickable: true },
};

