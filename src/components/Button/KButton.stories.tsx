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
  args: { label: 'Primary', variant: 'primary', outlined: true, size: 'md' },
}
export const successButton: Story = {
  args: { label: 'Success', variant: 'success', size: 'md' },
}
export const warningButton: Story = {
  args: { label: 'Warning', variant: 'warning', size: 'md' },
}
export const errorButton: Story = {
  args: { label: 'Error', variant: 'error', size: 'md' },
}
export const defaultButton: Story = {
  args: { label: 'Default' },
}
export const customButton: Story = {
  args: { label: 'Custom', size: 'md' },
}
