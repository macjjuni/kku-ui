import type { Meta, StoryObj } from '@storybook/react-vite';
import { KCard, KCardProps } from '@/components';
import { SIZES } from '@/common/base/base.interface';
import { disabledArgType, sizeArgType } from '@/common/storybook/argTypes';

const meta: Meta<KCardProps> = {
  component: KCard,
  title: 'Data Display/Card',
  argTypes: {
    title: { description: '타이틀 텍스트를 설정합니다..', defaultValue: { summary: '' }, control: { type: 'text' } },
    subTitle: { description: '서브 타이틀 텍스트를 설정합니다..', defaultValue: { summary: '' }, control: { type: 'text' } },
    width: { description: 'width 크기를 설정합니다.', defaultValue: { summary: 'undefined' }, control: { type: 'number' } },
    height: { description: 'height 크기를 설정합니다.', defaultValue: { summary: 'undefined' }, control: { type: 'number' } },
    aspectRatio: { description: 'aspectRatio 비율을 설정합니다.', defaultValue: { summary: 'undefined' }, type: 'string' },
    ...sizeArgType,
    ...disabledArgType,
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
  size: SIZES[0],
  aspectRatio: '5/3',
};

export const Default: Story = {
  render: Template, args: { ...cardText },
};

export const Clickable: Story = {
  render: Template, args: {
    ...cardText, onClick: () => {
    },
  },
};

