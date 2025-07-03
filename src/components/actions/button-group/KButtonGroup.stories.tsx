import { Meta, StoryObj } from '@storybook/react-vite';
import { KButton, KButtonGroup, KButtonGroupProps } from '@/components';


const meta: Meta<KButtonGroupProps> = {
  component: KButtonGroup,
  title: 'Actions/ButtonGroup',
  argTypes: { },
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