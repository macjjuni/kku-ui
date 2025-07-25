import { Meta, StoryObj } from '@storybook/react-vite';
import { BUTTON_VARIANTS, KIcon, KToggleButton, KToggleButtonGroup, KToggleButtonGroupProps } from '@/components';
import { sizeArgType } from '@/common/storybook/argTypes';


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
    ...sizeArgType,
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof KToggleButtonGroup>


const buttonDatas = [
  { value: 'up', icon: 'triangleUp' },
  { value: 'down', icon: 'triangleDown' },
];


export const Default: Story = {
  render: (args: KToggleButtonGroupProps) => {
    return (
      <KToggleButtonGroup {...args}>
        {
          buttonDatas.map((item) => (
            <KToggleButton key={item.value} {...item}>
              <KIcon icon={item.icon} size={18} />
            </KToggleButton>
          ))
        }
      </KToggleButtonGroup>
    );
  },
  args: {
    variant: 'outlined',
    multiple: false,
    size: 'medium',
  },
};
