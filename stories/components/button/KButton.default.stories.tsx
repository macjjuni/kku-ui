import type {Meta, StoryObj} from '@storybook/react';
import {KButton} from '@/components';
import {KButtonProps} from '@/components/button/KButton.interface';
import {baseArgTyp, sizeArgType, disabledArgType, colorArgType, onClickArgType} from '../common/argTypes';

const meta: Meta<KButtonProps> = {
    component: KButton,
    title: 'Components/Button',
    argTypes: {
        label: {description: '내부 텍스트를 설정합니다.'},
        variant: {description: '색상 또는 형태를 설정합니다.', defaultValue: { summary: 'default' }},
        contained: {description: '버튼 색상 형태를 설정합니다.', defaultValue: {summary: 'false'}},
        outlined: {description: '버튼 색상을 외곽선 형태로 설정합니다.', defaultValue: {summary: 'false'}},
        ...onClickArgType, ...sizeArgType, ...disabledArgType,
        ...colorArgType, ...baseArgTyp,
    },
};

export default meta;

type Story = StoryObj<typeof KButton>

const Template = (args: KButtonProps) => {
    return (<KButton {...args}/>);
};

export const Default: Story = {
    render: Template,
    args: {
        label: '안녕하세요',
        size: 'medium',
        variant: 'default',
        disabled: false,
        color: undefined
    },
};
