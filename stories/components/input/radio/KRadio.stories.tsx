import type {Meta, StoryObj} from '@storybook/react';
import {KRadio, KRadioProps} from '@/components';
import {useState} from 'react';
import {baseArgTyp, disabledArgType, sizeArgType} from '../../common/argTypes';

const meta: Meta<typeof KRadio> = {
    component: KRadio,
    title: 'Input/Radio',
    argTypes: {
        label: {description: '체크박스 레이블을 설정합니다.', defaultValue: {summary: 'undefined'}},
        value: {description: '체크박스 값을 설정합니다.', defaultValue: {summary: 'false'}},
        color: {description: '체크박스 아이콘 색상을 설정합니다.', defaultValue: {summary: 'undefined'}},
        defaultCheck: {description: '기본 체크 상태로 설정합니다.', defaultValue: {summary: 'false'}},
        width: {description: '체크박스 스타일 width 값을 설정합니다.', defaultValue: {summary: 'undefined'}},
        ...baseArgTyp, ...sizeArgType, ...disabledArgType,
    },
};

export default meta;

type Story = StoryObj<KRadioProps>


const Template = (args: KRadioProps) => {

    const [value, setValue] = useState<boolean>(false);

    const onChange = (value: boolean) => { setValue(value); };


    return (<KRadio {...args} value={value} onChange={onChange}/>);
};

export const Default: Story = {
    render: Template,
    args: {
        size: 'medium',
        label: 'Radio',
        disabled: false,
    },
};
