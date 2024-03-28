import type {Meta, StoryObj} from '@storybook/react';
import {KSwitch} from '@/components/input/switch';
import {KSwitchProps} from '@/components/input/switch';
import {useCallback, useState} from 'react';
import {baseArgTyp, disabledArgType, sizeArgType} from '../../common/argTypes';

const meta: Meta<typeof KSwitch> = {
    component: KSwitch,
    title: 'Input/Switch',
    argTypes: {
        color: {description: '토글 요소의 색상을 설정합니다.', defaultValue: {summary: 'undefined'}},
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

    return (
        <div style={{display: 'flex', gap: '16px'}}>
            <KSwitch {...args} value={value} onChange={onChangeValue} large/>
            <KSwitch {...args} value={value} onChange={onChangeValue}/>
            <KSwitch {...args} value={value} onChange={onChangeValue} small/>
        </div>
    );
};

export const Default: Story = {
    render: Template,
    args: {disabled: false, color: undefined, bgColor: undefined},
};
