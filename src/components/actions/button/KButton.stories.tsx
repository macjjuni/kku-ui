import { Meta, StoryObj } from '@storybook/react-vite';
import { BUTTON_VARIANTS, KButton } from '@/components';
import { KButtonProps } from '@/components/actions/button/KButton.interface';
import { disabledArgType, sizeArgType } from '@/common/storybook/argTypes';

const meta: Meta<KButtonProps> = {
  component: KButton,
  title: 'Actions/Button',
  argTypes: {
    label: {
      description: '내부 컨턴츠 내용을 설정합니다.',
    },
    variant: {
      description: '컴포넌트의 형태를 설정합니다.',
      control: { type: 'select' },
      options: BUTTON_VARIANTS,
    },
    ...disabledArgType,
    ...sizeArgType,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof KButton>;

export default meta;

type Story = StoryObj<typeof KButton>

const commonArgs: KButtonProps = {
  label: '안녕하세요',
  size: 'medium',
  disabled: false,
};

export const Default: Story = { args: { variant: 'default', ...commonArgs } };
export const Outlined: Story = { args: { variant: 'outlined', ...commonArgs } };
export const Primary: Story = { args: { variant: 'primary', ...commonArgs } };

