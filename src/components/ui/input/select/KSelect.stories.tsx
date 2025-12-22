import { useRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { KSelect, KSelectProps, KSelectRefs } from './KSelect';

const meta: Meta<typeof KSelect> = {
  title: 'KInput/Select',
  component: KSelect,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof KSelect>;

const mockOptions = [
  { label: 'React.js', value: 'react' },
  { label: 'Vue.js', value: 'vue' },
  { label: 'Svelte', value: 'svelte', disabled: true },
  { label: 'Next.js', value: 'next' },
];

// 1. 기본 상태
export const Default: Story = {
  args: {
    label: '프레임워크 선택',
    size: 'default',
    width: 'full',
    options: mockOptions,
    placeholder: '기술 스택을 선택하세요',
    helperText: '주력으로 사용하는 프레임워크를 골라주세요.',
    required: true,
  },
};

// 2. 검증 로직 테스트
export const Validation: Story = {
  render: (args: KSelectProps) => {
    const [value, setValue] = useState('');
    const selectRef = useRef<KSelectRefs>(null);

    const onValidate = async () => {
      await selectRef.current?.validate();
    };

    return (
      <div className="flex flex-col gap-4 max-w-sm">
        <KSelect {...args} ref={selectRef} value={value} onChange={(val) => setValue(val)}/>
        <div className="flex gap-2">
          <button type="button" onClick={onValidate} className="px-4 py-2 bg-slate-900 text-white rounded-md text-sm font-medium">
            검증하기
          </button>
          <button type="button" onClick={() => selectRef.current?.reset()}
                  className="px-4 py-2 border rounded-md text-sm font-medium hover:bg-slate-50">
            초기화
          </button>
        </div>
      </div>
    );
  },
  args: {
    label: '필수 선택 (Validation)',
    width: 'full',
    options: mockOptions,
    rules: [(v: string) => !!v || '프레임워크를 반드시 선택해야 합니다.'],
  },
};

// 3. 비동기 검증 (API 시뮬레이션)
export const AsyncValidation: Story = {
  render: (args: KSelectProps) => {
    const [value, setValue] = useState('');
    const selectRef = useRef<KSelectRefs>(null);

    return (
      <div className="flex flex-col gap-4 max-w-sm">
        <KSelect {...args} ref={selectRef} value={value} onChange={(val) => setValue(val)}/>
        <button type="button" onClick={() => selectRef.current?.validate()}
                className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium">
          사용 가능 여부 확인
        </button>
      </div>
    );
  },
  args: {
    label: '기술 스택 중복 확인',
    width: 'full',
    options: mockOptions,
    rules: [
      async (v: string) => {
        await new Promise((res) => {
          setTimeout(res, 400);
        });
        return v === 'vue' ? '이미 팀 내에서 사용 중인 스택입니다.' : true;
      },
    ],
  },
};

// 4. 에러 사이즈 및 상태 비교
export const ErrorState: Story = {
  render: () => {
    const selectRef1 = useRef<KSelectRefs>(null);
    const selectRef2 = useRef<KSelectRefs>(null);

    const onAllValidate = () => {
      selectRef1.current?.validate();
      selectRef2.current?.validate();
    };

    return (
      <div className="flex flex-col gap-6 max-w-sm">
        <KSelect ref={selectRef1} label="에러 - 미선택" options={mockOptions} value="" width="md" rules={[(v) => !!v || '항목을 선택해주세요.']}/>
        <KSelect ref={selectRef2} label="에러 - 강제 메시지" options={mockOptions} value="react" width="md" rules={[() => '현재 이 프레임워크는 점검 중입니다.']}/>
        <button type="button" onClick={onAllValidate} className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium">
          전체 검증 실행
        </button>
      </div>
    );
  },
};