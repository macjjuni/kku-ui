import { Meta, StoryObj } from '@storybook/react-vite';
import { BUTTON_VARIANTS, KToggleButton, KToggleButtonGroup, KToggleButtonGroupProps } from '@/components';


const meta: Meta<KToggleButtonGroupProps> = {
  component: KToggleButtonGroup,
  title: 'Actions/ToggleButtonGroup',
  argTypes: {
    variant: {
      description: '컴포넌트의 형태를 설정합니다.',
      control: { type: 'select' },
      options: BUTTON_VARIANTS,
    },
    multiple: {
      description: '다중 선택 모드를 설정합니다.',
      control: { type: 'boolean' },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof KToggleButtonGroup>


export const Default: Story = {
  render: (args: KToggleButtonGroupProps) => {
    return (
      <KToggleButtonGroup {...args}>
        <KToggleButton label="Menu1" value="menu1" />
        <KToggleButton label="Menu2" value="menu2" />
        <KToggleButton label="Menu3" value="menu3" />
        <KToggleButton label="Menu4" value="menu4" />
      </KToggleButtonGroup>
    )
  },
  args: {
    variant: 'outlined',
    multiple: false,
  },
};
