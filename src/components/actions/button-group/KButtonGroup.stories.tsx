import { Meta, StoryObj } from '@storybook/react-vite';
import { BUTTON_VARIANTS, KButton, KButtonGroup, KButtonGroupProps } from '@/components';
import { sizeArgType } from '@/common/storybook/argTypes';


const meta: Meta<KButtonGroupProps> = {
  component: KButtonGroup,
  title: 'Actions/ButtonGroup',
  argTypes: {
    variant: {
      description: '컴포넌트의 형태를 설정합니다.',
      control: { type: 'select' },
      options: BUTTON_VARIANTS,
    },
    ...sizeArgType,
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof KButtonGroup>

const buttons = [
  { label: 'ONE' },
  { label: 'TWO' },
  { label: 'THREE' },
  { label: 'FOUR' },
];

export const Default: Story = {
  render: (args: KButtonGroupProps) => {
    return (
      <KButtonGroup {...args}>
        {buttons.map(({ label }) => (<KButton key={label} label={label}/>))}
      </KButtonGroup>
    );
  },
  args: {
    variant: 'outlined',
    size: 'medium',
  },
};
