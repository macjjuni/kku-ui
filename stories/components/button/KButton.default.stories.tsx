import type { Meta, StoryObj } from '@storybook/react';
import { KButton } from '@/components';
import { KButtonProps } from '@/components/button/KButton.interface';
import { baseArgTyp, disabledArgType, onClickArgType, sizeArgType } from '../common/argTypes';

const meta: Meta<KButtonProps> = {
  component: KButton,
  title: 'Components/Button',
  argTypes: {
    label: { description: '내부 텍스트를 설정합니다.' },
    variant: { description: '색상 또는 형태를 설정합니다.' },
    ...onClickArgType, ...sizeArgType, ...disabledArgType, ...baseArgTyp,
  },
};

export default meta;

type Story = StoryObj<typeof KButton>

const Template = (args: KButtonProps) => {
  return (<KButton {...args}/>);
};

export const Default: Story = {
  render: Template,
  args: {
    label: '안녕하세요',
    size: 'medium',
    disabled: false,
  },
};
