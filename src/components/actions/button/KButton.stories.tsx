import { Meta, StoryObj } from '@storybook/react-vite';
import { KButton } from '@/components';
import { KButtonProps } from '@/components/actions/button/KButton.interface';

// const variants = Object.keys(BUTTON_VARIANTS);

const meta: Meta<KButtonProps> = {
  component: KButton,
  title: 'Actions/Button',
  argTypes: {},
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

