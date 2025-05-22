import { Meta, StoryObj } from '@storybook/react';
import { BUTTON_VARIANTS, KButton } from '@/components';
import { KButtonProps } from '@/components/actions/button/KButton.interface';
import { baseArgTyp, disabledArgType, onClickArgType, sizeArgType } from '@/common/storybook/argTypes';

const variants = Object.keys(BUTTON_VARIANTS);

const meta: Meta<KButtonProps> = {
  component: KButton,
  title: 'Actions/Button',
  argTypes: {
    label: { description: '내부 텍스트를 설정합니다.' },
    variant: {
      description: '형태를 설정합니다.',
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

// const Template = (args: KButtonProps) => {
//   return (<KButton {...args}/>);
// };

const commonArgs: KButtonProps = { label: '안녕하세요', size: 'medium', disabled: false };

const ColorfulButtons = (args: KButtonProps) => {

  return (
    <>
      <KButton {...args} variant="success"/>
      <KButton {...args} variant="warning"/>
      <KButton {...args} variant="error"/>
      <KButton {...args} variant="default" color="violet"/>
    </>
  );
};

export const Default: Story = { args: { variant: 'default', ...commonArgs } };
export const Outlined: Story = { args: { variant: 'outlined', ...commonArgs } };
export const Primary: Story = { args: { variant: 'primary', ...commonArgs } };
export const Colorful: Story = { render: ColorfulButtons, args: { variant: 'success', ...commonArgs } };

