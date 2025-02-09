import type {Meta, StoryObj} from '@storybook/react';
import {KCard} from '@/components/card';
import {KButton, KCardProps} from '@/components';
import {variantArgType} from '../common/argTypes';

const meta: Meta<KCardProps> = {
    component: KCard,
    title: 'Components/Card',
    argTypes: {
        title: {description: '카드 요소 타이틀 텍스트를 설정합니다..', defaultValue: {summary: ''}},
        subTitle: {description: '카드 요소 서브 타이틀 텍스트를 설정합니다..', defaultValue: {summary: ''}},
        width: {description: '카드 요소 width 크기를 설정합니다.', defaultValue: {summary: 'undefined'}},
        height: {description: '카드 요소 height 크기를 설정합니다.', defaultValue: {summary: 'undefined'}},
        ...variantArgType,
        color: {description: '카드 요소 메인 색상을 설정합니다.', defaultValue: {summary: 'undefined'}},
        fontColor: {description: '카드 요소 내부 텍스트 색상을 설정합니다.', defaultValue: {summary: 'undefined'}},
        id: {description: 'id 속성을 설정합니다.', defaultValue: {summary: 'undefined'}},
        className: {description: 'class 속성을 설정합니다.', defaultValue: {summary: 'undefined'}},
        style: {description: 'style 속성을 설정합니다.', defaultValue: {summary: 'undefined'}},
    },
};

export default meta;

type Story = StoryObj<typeof KCard>

const Template = (args: KCardProps) => {

    return (<KCard {...args} />);
};


const cardText = {
    title: 'What is Lorem Ipsum?',
    subTitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
};

export const Default: Story = {
    render: Template, args: {...cardText},
};

export const Rounded: Story = {
    render: Template, args: {...cardText, rounded: true},
};

export const Clickable: Story = {
    render: Template, args: {...cardText, rounded: true, clickable: true},
};


export const Outlined: Story = {
    render: Template, args: {...cardText, rounded: true, outlined: true},
};

export const Contained: Story = {
    render: Template, args: {...cardText, rounded: true, contained: true},
};


export const size: Story = {
    render: Template, args: {...cardText, rounded: true, width: '300px'},
};

export const Custom: Story = {
    render: Template, args: {
        children: (<div style={{display: 'flex', justifyContent: 'space-between'}}>
            <KButton outlined>🏃🏻‍♂️ Left Button</KButton>
            <KButton outlined>🕺🏻 Right Button</KButton>
        </div>),
        outlined: true, width: '480px',
    },
};

