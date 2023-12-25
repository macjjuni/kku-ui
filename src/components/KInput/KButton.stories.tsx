import type { Meta, StoryObj } from '@storybook/react'
import KInput from '.'

const meta: Meta<typeof KInput> = {
  component: KInput,
  title: 'KInput',
}

export default meta

type Story = StoryObj<typeof meta>

export const primaryInput: Story = {}
