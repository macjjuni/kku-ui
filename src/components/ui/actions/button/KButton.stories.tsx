import type { Meta, StoryObj } from '@storybook/react-vite';
import { KButton, KButtonProps } from '@/components';

const meta: Meta<typeof KButton> = {
  title: "Actions/Button",
  component: KButton,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "primary", "danger", "ghost", "link"],
    },
    size: {
      control: "select",
      options: ["md", "sm", "lg", "icon"],
    },
    width: { control: 'select', options: ["default", "full"] },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof KButton>;

export const Default: Story = { args: { children: "Default", variant: "default", width: "default" } };
export const Outline: Story = { args: { children: "Outline", variant: "outline", width: "default" } };
export const Primary: Story = { args: { children: "Primary", variant: "primary", width: "default" } };
export const Danger: Story = { args: { children: "Danger", variant: "danger", width: "default" } };
export const Ghost: Story = { args: { children: "Ghost", variant: "ghost", width: "default" } };
export const Link: Story = { args: { children: "Link", variant: "link", width: "default" } };

// 한 페이지에서 모두 확인하고 싶을 때 유용한 모음
export const AllVariants: Story = {
  render: (args: KButtonProps) => (
    <div className="flex flex-wrap gap-4">
      <KButton {...args} variant="default">Default</KButton>
      <KButton {...args} variant="outline">Outline</KButton>
      <KButton {...args} variant="primary">Primary</KButton>
      <KButton {...args} variant="danger">Danger</KButton>
      <KButton {...args} variant="ghost">Ghost</KButton>
      <KButton {...args} variant="link">Link</KButton>
    </div>
  ),
};