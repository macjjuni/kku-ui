import type { Meta, StoryObj } from '@storybook/react'
import KButton from '.'

const meta: Meta<typeof KButton> = {
  component: KButton,
  title: 'KButton',
}

export default meta

type Story = StoryObj<typeof meta>

export const primaryButton: Story = {
  args: { label: 'Primary', variant: 'primary', size: 'md' },
}
export const primaryOutlinedButton: Story = {
  args: { label: 'Primary Outlined', variant: 'primary', outlined: true, size: 'md' },
}
export const successButton: Story = {
  args: { label: 'Success', variant: 'success', size: 'md' },
}
export const successOutlinedButton: Story = {
  args: { label: 'Success Outlined', variant: 'success', outlined: true, size: 'md' },
}
export const warningButton: Story = {
  args: { label: 'Warning', variant: 'warning', size: 'md' },
}
export const warningOutlinedButton: Story = {
  args: { label: 'Warning Outlined', variant: 'warning', outlined: true, size: 'md' },
}
export const errorButton: Story = {
  args: { label: 'Error', variant: 'error', size: 'md' },
}
export const errorOutlinedButton: Story = {
  args: { label: 'Error Outlined', variant: 'error', outlined: true, size: 'md' },
}
export const defaultButton: Story = {
  args: { label: 'Default' },
}
export const defaultOutlinedButton: Story = {
  args: { label: 'Default Outlined', variant: 'default', outlined: true, size: 'md' },
}
export const customColorButton: Story = {
  args: { label: 'Custom Color', className: 'text-red bg-yellow', size: 'md' },
}

export const customElementButton: Story = {
  args: {
    children: (
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    ),
    className: 'bg-[#7E30E1] text-white border-success border-2',
    size: 'md',
  },
}
