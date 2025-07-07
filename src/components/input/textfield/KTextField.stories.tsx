import type { Meta, StoryObj } from '@storybook/react-vite';
import KTextField from '@/components/input/textfield/KTextField';
import { KTextFieldProps } from '@/components/input/textfield/KTextField.interface';
import { sizeArgType } from '@/common/storybook/argTypes';


const meta: Meta<typeof KTextField> = {
  component: KTextField,
  title: 'Input/TextField',
  argTypes: {
    label: { description: '레이블의 텍스트를 설정합니다.' },
    value: { description: 'TextField Value 값을 설정합니다.' },
    placeholder: { description: 'Input 에 placeholder 를 설정합니다.' },
    disabled: {
      control: { type: 'boolean' },
    },
    readOnly: {
      control: { type: 'boolean' },
    },
    maxLength: { description: 'Input 에 최대 입력 수를 설정합니다.' },
    required: { description: '레이블에 필수 입력 아이콘을 설정합니다.' },
    width: { description: 'TextField width 값을 설정합니다.' },
    rightContent: { description: '우측에 Action 공간을 설정합니다.' },
    leftContent: { description: '좌측에 Action 공간을 설정합니다.' },
    ...sizeArgType,
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<KTextFieldProps>

export const Default: Story = {
  render: (args: KTextFieldProps) => {
    return (
      <KTextField {...args}/>
    );
  },
  args: {
    label: 'Label',
    value: '',
    placeholder: 'Placeholder',
    disabled: false,
    readOnly: false,
    size: 'medium',
    required: true,
    type: 'text',
  },
};
