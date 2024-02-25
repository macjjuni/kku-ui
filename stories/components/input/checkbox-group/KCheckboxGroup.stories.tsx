import type {Meta, StoryObj} from '@storybook/react';
import {KCheckboxGroup} from '@/components';
import {useState} from 'react';
import {KCheckboxGroupProps} from '@/components/input/checkbox-group/KCheckboxGroup.interface';
import {baseArgTyp, sizeArgType} from '../../common/argTypes';

const meta: Meta<typeof KCheckboxGroup> = {
    component: KCheckboxGroup,
    title: 'Input/CheckboxGroup',
    argTypes: {
        items: {description: '복수에 체크박스 요소 속성을 설정합니다. \n\n { label: string, value: string,\n\ndisabled?: boolean, defaultCheck?: boolean }',
            defaultValue: {summary: '[] '}},
        value: {description: '복수에 선택된 체크박스 값을 설정합니다.', defaultValue: {summary: '[]'}},
        color: {description: '체크박스 아이콘 색상을 설정합니다.', defaultValue: {summary: 'undefined'}},
        shape: {description: '복수에 선택된 체크박스 값을 설정합니다.', defaultValue: {summary: '[]'}},
        direction: {description: '체크박스 그룹에 정렬 방향을 설정합니다.', defaultValue: {summary: 'row'}},
        gap: {description: '체크박스 요소별 간격을 설정합니다.', defaultValue: {summary: 'undefined'}},
        ...baseArgTyp, ...sizeArgType,
    }
};

export default meta;

type Story = StoryObj<KCheckboxGroupProps>

const checkboxItems = [
    {label: 'text1', value: 'value1', defaultCheck: false, disabled: false},
    {label: 'text2', value: 'value2', defaultCheck: false, disabled: false},
    {label: 'text3', value: 'value3', defaultCheck: false, disabled: true},
];

const Template = (args: KCheckboxGroupProps) => {

    const [value, setValue] = useState<string[]>(args.value);

    return (<KCheckboxGroup {...args} value={value} onChange={setValue}/>);
};

export const Default: Story = {
    render: Template,
    args: {
        items: checkboxItems,
        value: ['value1'],
        size: 'medium',
        shape: 'square',
        direction: 'row',
    },
};
