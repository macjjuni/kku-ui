import type {Meta, StoryObj} from '@storybook/react';
import KTextField from '@/components/input/textfield/KTextField';
import {useState} from 'react';
import {KTextFieldProps} from '@/components/input/textfield/KTextField.interface';
import {baseArgTyp, disabledArgType, sizeArgType} from '../../common/argTypes';


const meta: Meta<typeof KTextField> = {
    component: KTextField,
    title: 'Input/TextField',
    argTypes: {
        label: {description: '레이블 의 텍스트를 설정합니다.'},
        value: {description: 'Input value 를 설정합니다.'},
        labelDirection: {description: '레이블 정렬 스타일을 설정합니다.', defaultValue: {summary: 'column'}},
        column: {description: '레이블 정렬을 column 형태로 설정합니다.', defaultValue: {summary: 'false'}},
        row: {description: '레이블 정렬을 row 형태로 설정합니다.', defaultValue: {summary: 'false'}},
        placeholder: {description: 'Input 에 placeholder 를 설정합니다.', defaultValue: {summary: 'undefined'}},
        maxLength: {description: 'Input 에 최대 입력 수를 설정합니다.', defaultValue: {summary: 'undefined'}},
        required: {description: '레이블에 필수 입력 아이콘을 설정합니다.', defaultValue: {summary: 'false'}},
        clearable: {description: 'value 초기화 버튼을 설정합니다.', defaultValue: {summary: 'false'}},
        password: {description: '비밀번호 입력 행태로 설정합니다.', defaultValue: {summary: 'false'}},
        width: {description: '스타일 width 값을 설정합니다.', defaultValue: {summary: 'undefined'}},
        fullWidth: {description: '스타일 width 값을 100% 로 설정합니다.', defaultValue: {summary: 'undefined'}},
        rightAction: {description: '레이블 정렬이 column 상태일 경우 우측에 Action 공간을 설정합니다.', defaultValue: {summary: 'undefined'}},
        ...baseArgTyp, ...sizeArgType, ...disabledArgType,
    },
};

export default meta;

type Story = StoryObj<KTextFieldProps>

const Template = (args: KTextFieldProps) => {

    const [value, setValue] = useState('');

    return (<KTextField {...args} value={value} onChange={(val: string) => { setValue(val); }} />);
};

export const Default: Story = {
    render: Template,
    args: {
        label: '레이블',
        placeholder: 'placeholder!',
        size: 'medium',
        labelDirection: 'column',
        required: true,
        clearable: false,
        password: false,
    },
};
