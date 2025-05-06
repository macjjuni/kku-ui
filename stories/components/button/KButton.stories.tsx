import { Meta, StoryObj } from '@storybook/react';
import { BUTTON_VARIANTS, KButton } from '@/components';
import { KButtonProps } from '@/components/button/KButton.interface';
import { baseArgTyp, disabledArgType, onClickArgType, sizeArgType } from '../common/argTypes';

const variants = Object.keys(BUTTON_VARIANTS);

const meta: Meta<KButtonProps> = {
  component: KButton,
  title: 'Components/Button',
  argTypes: {
    label: { description: '내부 텍스트를 설정합니다.' },
    variant: {
      description: '형태를 설정합니다.',
      defaultValue: { summary: variants[0] },
      control: { type: 'select' },
      options: variants,
      type: 'string',
    },
    ...onClickArgType, ...sizeArgType, ...disabledArgType, ...baseArgTyp,
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof KButton>

const Template = (args: KButtonProps) => {
  return (<KButton {...args}/>);
};

const commonArgs: KButtonProps = { label: '안녕하세요', size: 'medium', disabled: false };

export const Default: Story = { render: Template, args: { variant: 'default', ...commonArgs } };
export const Outlined: Story = { render: Template, args: { variant: 'outlined', ...commonArgs } };
export const Primary: Story = { render: Template, args: { variant: 'primary', ...commonArgs } };
export const Success: Story = { render: Template, args: { variant: 'success', ...commonArgs } };
export const Warning: Story = { render: Template, args: { variant: 'warning', ...commonArgs } };
export const Error: Story = { render: Template, args: { variant: 'error', ...commonArgs } };
