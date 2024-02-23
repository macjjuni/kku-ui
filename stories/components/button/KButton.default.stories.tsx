import type {Meta, StoryObj} from '@storybook/react';
import {KButton} from '@/components';
import {KButtonProps} from '@/components/button/KButton.interface';

const meta: Meta<KButtonProps> = {
    component: KButton,
    title: 'Components/Button',
    argTypes: {
        label: {description: '내부 텍스트를 설정합니다.'},
        size: {description: '내부 여백 크기를 설정합니다.', defaultValue: { summary: 'medium' }},
        variant: {description: '색상 형태를 설정합니다.', defaultValue: { summary: 'default' }},
        disabled: {description: '비활성화 상태를 설정합니다.', defaultValue: { summary: 'false' }},
        onClick: {description: '클릭 이벤트를 설정합니다.', defaultValue: { summary: 'undefined' }},
        color: {description: '버튼 색상을 설정합니다.', defaultValue: { summary: 'undefined' }},
        id: {description: 'id 속성 값을 설정합니다.', defaultValue: { summary: 'undefined' }},
        className: {description: 'class 속성 값을 설정합니다.', defaultValue: { summary: 'undefined' }},
        style: {description: 'style 속성 값을 설정합니다.', defaultValue: { summary: 'undefined' }},
        large: {description: '여백 크기를 Large 크기만큼 설정합니다.', defaultValue: { summary: 'false' }},
        medium: {description: '여백 크기를 Medium 크기만큼 설정합니다.', defaultValue: { summary: 'true' }},
        small: {description: '여백 크기를 Small 크기만큼 설정합니다.', defaultValue: { summary: 'false' }},
        primary: {description: '버튼 색상 형태를 설정합니다.', defaultValue: { summary: 'false' }},
        outlined: {description: '버튼 색상을 외곽선 형태로 설정합니다.', defaultValue: { summary: 'false' }},
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
        variant: 'default',
        size: 'medium',
    },
};
