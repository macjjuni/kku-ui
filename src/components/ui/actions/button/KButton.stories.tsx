import type { Meta, StoryObj } from '@storybook/react-vite';
import { KButton, KButtonProps } from '@/components';

const meta: Meta<typeof KButton> = {
  title: 'Actions/Button',
  component: KButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'primary', 'destructive', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['md', 'sm', 'lg', 'icon'],
    },
    width: { control: 'select', options: ['default', 'full', 120, 300, 420] },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof KButton>;


// 한 페이지에서 모두 확인하고 싶을 때 유용한 모음
export const AllVariants: Story = {
  render: (args: KButtonProps) => (
    <div className="flex flex-wrap gap-4">
      <KButton {...args} variant="default">Default</KButton>
      <KButton {...args} variant="outline">Outline</KButton>
      <KButton {...args} variant="primary">Primary</KButton>
      <KButton {...args} variant="destructive">Destructive</KButton>
      <KButton {...args} variant="ghost">Ghost</KButton>
      <KButton {...args} variant="link">Link</KButton>
    </div>
  ),
};

type ButtonSize = 'lg' | 'md' | 'sm' | 'icon' | null | undefined
const sizes: ButtonSize[] = ['lg', 'md', 'sm', 'icon'];

// 한 페이지에서 모두 확인하고 싶을 때 유용한 모음
export const AllSizes: Story = {
  render: (args: KButtonProps) => (
    <div className="flex flex-col flex-wrap gap-4">
      {
        sizes.map((size) => (
          <div key={size} className="flex gap-3">
            <KButton {...args} size={size} variant="default">{size !== 'icon' ? 'Button' : 'B'}</KButton>
            <KButton {...args} size={size} variant="outline">{size !== 'icon' ? 'Button' : 'B'}</KButton>
            <KButton {...args} size={size} variant="primary">{size !== 'icon' ? 'Button' : 'B'}</KButton>
            <KButton {...args} size={size} variant="destructive">{size !== 'icon' ? 'Button' : 'B'}</KButton>
            <KButton {...args} size={size} variant="ghost">{size !== 'icon' ? 'Button' : 'B'}</KButton>
            <KButton {...args} size={size} variant="link">{size !== 'icon' ? 'Button' : 'B'}</KButton>
          </div>
        ))
      }
    </div>
  ),
};