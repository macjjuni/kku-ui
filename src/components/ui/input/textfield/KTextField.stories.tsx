import type { Meta, StoryObj } from '@storybook/react-vite';
import { useRef } from 'react';
import { KTextField, KTextFieldRefs } from './KTextField';

const meta: Meta<typeof KTextField> = {
  title: 'Input/TextField',
  component: KTextField,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    width: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'auto', 'full'],
    },
    required: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    maxLength: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof KTextField>;

// 1. 기본 상태
export const Default: Story = {
  args: {
    label: '이름',
    placeholder: '이름을 입력하세요',
    helperText: '실명을 입력해 주세요.',
  },
};

// 2. 검증 로직 테스트 (핵심)
export const Validation: Story = {
  render: (args) => {
    const textFieldRef = useRef<KTextFieldRefs>(null);

    const onValidate = async () => {
      await textFieldRef.current?.validate();
    };

    return (
      <div className="flex flex-col gap-4 max-w-sm">
        <KTextField {...args} ref={textFieldRef}/>
        <div className="flex gap-2">
          <button type="button" onClick={onValidate}
                  className="px-4 py-2 bg-slate-900 text-white rounded-md text-sm hover:bg-slate-800 transition-colors">
            검증하기
          </button>
          <button type="button" onClick={() => textFieldRef.current?.reset()}
                  className="px-4 py-2 border rounded-md text-sm hover:bg-slate-50 transition-colors">
            에러 초기화
          </button>
        </div>
      </div>
    );
  },
  args: {
    label: '이메일 주소',
    placeholder: 'example@kku.com',
    rules: [
      (v: string) => !!v || '필수 입력 항목입니다.',
      (v: string) => v.includes('@') || '올바른 이메일 형식이 아닙니다.',
    ],
  },
};

// 3. 비동기 검증 (API 시뮬레이션)
export const AsyncValidation: Story = {
  args: {
    label: '아이디 중복 체크',
    placeholder: 'admin 입력 시 중복 에러',
    helperText: 'admin을 입력하고 검증을 시도해보세요.',
    rules: [
      async (v) => {
        // API 통신 시뮬레이션
        await new Promise((resolve) => {
          setTimeout(resolve, 400);
        });
        return v === 'admin' ? '이미 존재하는 아이디입니다.' : true;
      },
    ],
  },
  render: (args) => {
    const textFieldRef = useRef<KTextFieldRefs>(null);
    return (
      <div className="flex flex-col gap-4 max-w-sm">
        <KTextField {...args} ref={textFieldRef}/>
        <button type="button" onClick={() => textFieldRef.current?.validate()}
                className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition-colors">
          중복 확인
        </button>
      </div>
    );
  },
};

// 4. 사이즈별 에러 상태 비교
export const ErrorSizes: Story = {
  render: () => {
    const textFieldRef1 = useRef<KTextFieldRefs>(null);
    const textFieldRef2 = useRef<KTextFieldRefs>(null);
    const textFieldRef3 = useRef<KTextFieldRefs>(null);

    const validate = () => {
      textFieldRef1.current?.validate();
      textFieldRef2.current?.validate();
      textFieldRef3.current?.validate();
    }

    return (
      <div className="flex flex-col gap-4 w-full max-w-sm">
        <KTextField ref={textFieldRef1} size="sm" label="Small Error" defaultValue="Error value" rules={[() => '에러 발생']}/>
        <KTextField ref={textFieldRef2} size="md" label="Default Error" defaultValue="Error value" rules={[() => '에러 발생']}/>
        <KTextField ref={textFieldRef3} size="lg" label="Large Error" defaultValue="Error value" rules={[() => '에러 발생']}/>
        <button type="button" className="px-4 py-2 bg-slate-900 text-white" onClick={validate}>Validate</button>
      </div>
    );
  },
};