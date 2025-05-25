import { Meta, StoryObj } from '@storybook/react';
import { KButton, KButtonGroup, KButtonGroupProps } from '@/components';
import { baseArgTyp } from '@/common/storybook/argTypes';

const meta: Meta<KButtonGroupProps> = {
  component: KButtonGroup,
  title: 'Actions/ButtonGroup',
  argTypes: { ...baseArgTyp },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof KButton>


export const Default: Story = {
  args: {
    children: (
      <>
        <KButton variant="default" label="Menu1"/>
        <KButton variant="default" label="Menu2"/>
        <KButton variant="default" label="Menu3"/>
        <KButton variant="default" label="Menu4"/>
      </>
    ),
  },
};