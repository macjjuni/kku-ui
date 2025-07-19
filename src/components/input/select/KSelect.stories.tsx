import { useCallback, useRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { KButton, KSelect, KSelectProps, KSelectRefs } from '@/components';
import { disabledArgType, sizeArgType } from '@/common/storybook/argTypes';

const meta: Meta<typeof KSelect> = {
  component: KSelect,
  title: 'Input/Select',
  tags: ['autodocs'],
  argTypes: {
    value: {
      description: '선택된 요소의 값',
      control: { type: 'text' },
    },
    items: { description: '선택 요소를 설정합니다. { title: string, value: string }', defaultValue: { summary: '[]' } },
    width: {
      description: '요소의 width 크기를 설정합니다.',
      control: { type: 'number' },
    },
    noDataText: { description: '값이 없을 때 보여줄 텍스트를 설정합니다.', control: { type: 'text' } },
    ...disabledArgType, ...sizeArgType,
    rules: {
      description: '입력값에 대한 유효성 검사 규칙을 설정합니다. 배열 형태로 전달하며, 각 규칙은 boolean을 반환하는 함수 또는 오류 메시지를 반환하는 함수입니다.',
    },
    validateOnChange: {
      description: '사용자가 입력할 때마다 유효성 검사를 수행할지 여부를 설정합니다.',
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<KSelectProps>


const isRequired = (val?: string) => {
  return val ? true : '필수 입력 항목입니다.';
};

const itemTemplates = [
  { label: 'Select1', value: 'Select1' },
  { label: 'Select2', value: 'Select2' },
  { label: 'Select3', value: 'Select3' },
  { label: 'Select4', value: 'Select4' },
];

const SelectStory = (args: KSelectProps) => {

  const rootRef = useRef(null);
  const [value, setValue] = useState(args.value);

  const onChangeValue = useCallback((val: string | number) => {
    setValue(val);
  }, []);

  return (<KSelect ref={rootRef} {...args} value={value} onChange={onChangeValue}/>);
};

const ValidateStory = (args: KSelectProps) => {

  const rootRef = useRef<KSelectRefs>(null);
  const [value, setValue] = useState<string | number | undefined>(args?.value);

  const onChangeValue = useCallback((val: string | number) => {
    setValue(val);
  }, []);

  const onValidate = useCallback(() => {
    rootRef.current?.onValidate();
  }, []);

  const onClear = useCallback(() => {
    setValue(undefined);
  }, []);

  return (
    <>
      <KSelect ref={rootRef} {...args} value={value} onChange={onChangeValue}/>
      <KButton variant="primary" label="Validate" onClick={onValidate} size={args.size} style={{ marginLeft: '0.5rem' }}/>
      <KButton label="Clear" onClick={onClear} size={args.size} style={{ marginLeft: '0.5rem' }}/>
    </>
  );
};


export const Default: Story = {
  render: SelectStory,
  args: {
    label: 'Label',
    items: itemTemplates,
    value: undefined,
    width: undefined,
    placeholder: 'Placeholder',
    size: 'medium',
    required: false,
    disabled: false,
    onChange: () => {
    },
    noDataText: undefined,
    rules: [],
    validateOnChange: false,
  },
};

export const Validate: Story = {
  render: ValidateStory,
  args: {
    label: 'Label',
    items: itemTemplates,
    value: undefined,
    width: undefined,
    placeholder: 'Placeholder',
    size: 'medium',
    required: false,
    disabled: false,
    rules: [isRequired],
    validateOnChange: false,
    onChange: () => {
    },
    noDataText: undefined,
  },
};
