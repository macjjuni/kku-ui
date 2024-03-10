import type {Meta, StoryObj} from '@storybook/react';
import {KCheckbox} from '@/components/input/checkbox';
import {useState} from 'react';
import {KCheckboxProps} from '@/components/input/checkbox/KCheckbox.interface';
import {baseArgTyp, disabledArgType, sizeArgType} from '../../common/argTypes';

const meta: Meta<typeof KCheckbox> = {
    component: KCheckbox,
    title: 'Input/Checkbox',
    argTypes: {
        // shape: {description: '아이콘 형태를 설정합니다.', defaultValue: {summary: 'square'}},
        // square: {description: '아이콘을 사각형 형태로 설정합니다.', defaultValue: {summary: 'undefined'}},
        // circle: {description: '아이콘을 둥근 형태로 설정합니다.', defaultValue: {summary: 'undefined'}},
        label: {description: '체크박스 레이블을 설정합니다.', defaultValue: {summary: 'undefined'}},
        value: {description: '체크박스 값을 설정합니다.', defaultValue: {summary: 'false'}},
        color: {description: '체크박스 아이콘 색상을 설정합니다.', defaultValue: {summary: 'undefined'}},
        defaultCheck: {description: '기본 체크 상태로 설정합니다.', defaultValue: {summary: 'false'}},
        width: {description: '체크박스 스타일 width 값을 설정합니다.', defaultValue: {summary: 'undefined'}},
        ...baseArgTyp, ...sizeArgType, ...disabledArgType,
    },
};

export default meta;

type Story = StoryObj<KCheckboxProps>


const Template = (args: KCheckboxProps) => {

    const [value, setValue] = useState<boolean>(false);

    const onChange = (value: boolean) => { setValue(value); };


    return (<KCheckbox {...args} value={value} onChange={onChange}/>);
};

export const Default: Story = {
    render: Template,
    args: {
        size: 'medium',
        label: 'Checkbox',
        // shape: 'square',
        disabled: false,
    },
};
