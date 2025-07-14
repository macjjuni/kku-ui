import { Meta, StoryObj } from '@storybook/react-vite';
import { BUTTON_VARIANTS, KButton, KToggleButton, KToggleButtonProps } from '@/components';


const meta: Meta<KToggleButtonProps> = {
  component: KToggleButton,
  title: 'Actions/ToggleButton',
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

type Story = StoryObj<typeof KToggleButton>


export const Default: Story = {
  render: (args: KToggleButtonProps) => {
    return (
      <KToggleButton {...args}>
        <KButton label="Menu1"/>
        <KButton label="Menu2"/>
        <KButton label="Menu3"/>
        <KButton label="Menu4"/>
      </KToggleButton>
    )
  },
  args: {
    variant: 'outlined',
    multiple: false,
  },
};
