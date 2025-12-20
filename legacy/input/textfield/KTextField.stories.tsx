import { useCallback, useRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import KTextField from 'legacy/input/textfield/KTextField';
import { KTextFieldProps, KTextFieldRefs } from 'legacy/input/textfield/KTextField.interface';
import { sizeArgType } from 'src/common/storybook/argTypes';
import { KButton } from 'src/components';


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
    rules: {
      description: '입력값에 대한 유효성 검사 규칙을 설정합니다. 배열 형태로 전달하며, 각 규칙은 boolean을 반환하는 함수 또는 오류 메시지를 반환하는 함수입니다.',
    },
    validateOnChange: {
      description: '사용자가 입력할 때마다 유효성 검사를 수행할지 여부를 설정합니다.',
      control: { type: 'boolean' },
    },
    maxLength: { description: 'Input 에 최대 입력 수를 설정합니다.' },
    required: { description: '레이블에 필수 입력 아이콘을 설정합니다.' },
    width: { description: '요소의 width 크기를 설정합니다.' },
    rightContent: { description: '우측에 Action 공간을 설정합니다.' },
    leftContent: { description: '좌측에 Action 공간을 설정합니다.' },
    ...sizeArgType,
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<KTextFieldProps>


const isRequired = (val?: string) => {
  return val ? true : '필수 입력 항목입니다.';
};

const ErrorTemplate = (args: KTextFieldProps) => {

  const inputRef = useRef<KTextFieldRefs>(null);
  const [value, setValue] = useState('');

  const onChangeValue = useCallback((val: string) => {
    setValue(val);
  }, []);

  const onValidate = useCallback(() => {
    inputRef.current?.onValidate();
  }, []);

  return (
    <>
      <KTextField ref={inputRef} {...args} value={value} onChange={onChangeValue}/>
      <KButton variant="solid" label="Validate" onClick={onValidate} style={{ marginLeft: '0.5rem' }}/>
    </>
  );
};


export const Default: Story = {
  render: (args: KTextFieldProps) => {
    return (<KTextField {...args}/>);
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
    align: 'left',
    validateOnChange: false,
  },
};

export const Validate: Story = {
  render: ErrorTemplate,
  args: {
    label: 'Label',
    value: '',
    placeholder: 'Placeholder',
    rules: [isRequired],
    validateOnChange: false,
    disabled: false,
    readOnly: false,
    size: 'medium',
    required: true,
    type: 'text',
    align: 'left',
  },
};

