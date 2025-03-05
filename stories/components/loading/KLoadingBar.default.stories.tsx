import type { Meta, StoryObj } from '@storybook/react';
import { KLoadingBar } from '@/components';
import { KLoadingBarProps } from '@/components/loading/KLoadingBar.interface';
import { baseArgTyp } from '../common/argTypes';

const meta: Meta<KLoadingBarProps> = {
  component: KLoadingBar,
  title: 'Components/Loading',
  argTypes: {
    ...baseArgTyp,
  },
};

export default meta;

type Story = StoryObj<typeof KLoadingBar>

const Template = (args: KLoadingBarProps) => {
  return (<KLoadingBar {...args}/>);
};

export const Default: Story = {
  render: Template,
  args: { value: 77, width: "400px", borderWidth: 2, padding: 4, totalBlocks: 10 },
};
