import type { Meta, StoryObj } from '@storybook/react-vite';
import { KSelect } from './KSelect';

const meta: Meta<typeof KSelect> = {
  title: 'Input/Select',
  component: KSelect,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    width: {
      control: 'select',
      options: ['auto', 'full', 'xs', 'sm', 'md', 'lg', 80, 220, 360, 560],
    },
    onChange: { action: 'changed' },
  },
  args: {
    placeholder: '선택해주세요',
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3', disabled: true },
      { label: 'Option 4', value: '4' },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof KSelect>;

// 기본형
export const Default: Story = {
  args: {
    width: 'md',
    selectLabel: 'Select',
  },
};

// 부모 너비를 꽉 채우는 경우 (Grid/Flex 부모 가정)
export const FullWidth: Story = {
  render: (args) => (
    <div className="w-[500px] p-4 border border-dashed">
      <p className="mb-2 text-sm text-gray-500">Parent width: 500px</p>
      <KSelect {...args} width="full" />
    </div>
  ),
};

// 에러 상태
export const Error: Story = {
  args: {
    error: true,
    width: 'md',
  },
};

// 사이즈별 비교
export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <KSelect {...args} size="sm" placeholder="Small size" />
      <KSelect {...args} size="md" placeholder="Medium size" />
      <KSelect {...args} size="lg" placeholder="Large size" />
    </div>
  ),
};

// 고정 너비별 비교
export const Widths: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <KSelect {...args} width="xs" placeholder="width: xs" />
      <KSelect {...args} width="sm" placeholder="width: sm" />
      <KSelect {...args} width="md" placeholder="width: md" />
      <KSelect {...args} width="lg" placeholder="width: lg" />
    </div>
  ),
};