import { Meta, StoryObj } from '@storybook/react-vite';
import { BUTTON_VARIANTS, KButton, KButtonGroup, KButtonGroupProps } from '@/components';


const meta: Meta<KButtonGroupProps> = {
  component: KButtonGroup,
  title: 'Actions/ButtonGroup',
  argTypes: {
    variant: {
      description: '컴포넌트의 형태를 설정합니다.',
      control: { type: 'select' },
      options: BUTTON_VARIANTS,
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof KButtonGroup>


export const Default: Story = {
  render: (args: KButtonGroupProps) => {
    return (
      <KButtonGroup {...args}>
        <KButton label="Menu1"/>
        <KButton label="Menu2"/>
        <KButton label="Menu3"/>
        <KButton label="Menu4"/>
      </KButtonGroup>
    )
  },
  args: {
    variant: 'outlined',
  },
};
