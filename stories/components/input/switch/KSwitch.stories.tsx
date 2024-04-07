import type {Meta, StoryObj} from '@storybook/react';
import {KSwitch} from '@/components/input/switch';
import {KSwitchProps} from '@/components/input/switch';
import {useCallback, useState} from 'react';
import {baseArgTyp, disabledArgType, sizeArgType} from '../../common/argTypes';

const meta: Meta<typeof KSwitch> = {
    component: KSwitch,
    title: 'Input/Switch',
    argTypes: {
        toggleColor: {description: '토글 요소의 색상을 설정합니다.', defaultValue: {summary: 'undefined'}},
        bgColor: {description: '요소의 배경 색상을 설정합니다.', defaultValue: {summary: 'undefined'}},
        ...disabledArgType, ...sizeArgType, ...baseArgTyp,
    },
};

export default meta;

type Story = StoryObj<KSwitchProps>


const Template = (args: KSwitchProps) => {

    const [value, setValue] = useState(true);

    const onChangeValue = useCallback((value: boolean) => {
        setValue(value);
    }, []);

    return (<KSwitch {...args} value={value} onChange={onChangeValue}/>);
};

export const Default: Story = {
    render: Template,
    args: {toggleColor: undefined, bgColor: undefined, disabled: false},
};

export const Large: Story = {
    render: Template,
    args: {size:'large', toggleColor: undefined, bgColor: undefined, disabled: false},
};

export const Medium: Story = {
    render: Template,
    args: {size:'medium', toggleColor: undefined, bgColor: undefined, disabled: false},
};

export const Small: Story = {
    render: Template,
    args: {size:'small', toggleColor: undefined, bgColor: undefined, disabled: false},
};

export const Disabled: Story = {
    render: Template,
    args: {size:'small', toggleColor: undefined, bgColor: undefined, disabled: true},
};

export const CustomColor: Story = {
    render: Template,
    args: { toggleColor: '#FB9AD1', bgColor: '#5755FE', disabled: false},
};
