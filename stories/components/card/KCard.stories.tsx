import type { Meta, StoryObj } from '@storybook/react';
import { KCard } from '@/components/card';
import { KCardProps } from '@/components';
import { baseArgTyp, variantArgType } from '../common/argTypes';

const meta: Meta<KCardProps> = {
  component: KCard,
  title: 'Components/Card',
  argTypes: {
    title: { description: '카드 요소 타이틀 텍스트를 설정합니다..', defaultValue: { summary: '' } },
    subTitle: { description: '카드 요소 서브 타이틀 텍스트를 설정합니다..', defaultValue: { summary: '' } },
    width: { description: '카드 요소 width 크기를 설정합니다.', defaultValue: { summary: 'undefined' } },
    height: { description: '카드 요소 height 크기를 설정합니다.', defaultValue: { summary: 'undefined' } },
    ...variantArgType,
    color: { description: '카드 요소 메인 색상을 설정합니다.', defaultValue: { summary: 'undefined' } },
    fontColor: { description: '카드 요소 내부 텍스트 색상을 설정합니다.', defaultValue: { summary: 'undefined' } },
    ...baseArgTyp,
  },
};

export default meta;

type Story = StoryObj<typeof KCard>

const Template = (args: KCardProps) => {

  return (<KCard {...args} />);
};


const cardText = {
  title: 'What is Lorem Ipsum?',
  subTitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
};

export const Default: Story = {
  render: Template, args: { ...cardText },
};

export const Clickable: Story = {
  render: Template, args: { ...cardText, clickable: true },
};


export const Outlined: Story = {
  render: Template, args: { ...cardText },
};

export const Contained: Story = {
  render: Template, args: { ...cardText, variant: 'contained' },
};

export const size: Story = {
  render: Template, args: { ...cardText, width: '300px' },
};
