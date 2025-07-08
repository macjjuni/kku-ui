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
  label: 'Button',
  size: 'medium',
  disabled: false,
  isDanger: false,
};

export const Default: Story = { args: { variant: 'outlined', ...commonArgs } };
export const Variant: Story = {
  render: (args) => (
    <>
      {
        BUTTON_VARIANTS.map((variant) => (
          <KButton key={variant} {...args} variant={variant}
                   label={variant.charAt(0).toUpperCase() + variant.slice(1)}/>
        ))
      }
    </>
  ),
  args: { variant: 'outlined', ...commonArgs },
};

