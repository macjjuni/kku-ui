import type { Meta, StoryObj } from '@storybook/react-vite';
import { KPanel, KPanelProps } from '@/components';

const meta: Meta<KPanelProps> = {
  component: KPanel,
  title: 'Data Display/Panel',
  argTypes: {
    width: { description: 'width 크기를 설정합니다.', defaultValue: { summary: 'undefined' }, control: { type: 'number' } },
    height: { description: 'height 크기를 설정합니다.', defaultValue: { summary: 'undefined' }, control: { type: 'number' } },
    ratio: { description: 'aspectRatio 비율을 설정합니다.', defaultValue: { summary: 'undefined' }, type: 'string' },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof KPanel>


export const Default: Story = {
  args: {
    ratio: '5/3',
    children: 'Panel',
  },
};

