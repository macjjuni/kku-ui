import type {Meta, StoryObj} from '@storybook/react';
import {KChip} from '@/components/chip';
import {KChipProps} from '@/components/chip';
import {ReactNode} from 'react';

const meta: Meta<KChipProps> = {
    component: KChip,
    title: 'Components/Chip',
    argTypes: {
        size: {description: '크기를 설정합니다.', defaultValue: {summary: 'medium'}},
        // color: {description: '컴포넌  색상을 설정합니다.', defaultValue: { summary: 'undefined' }},
        onClick: {description: '아이콘 클릭 이벤트를 설정합니다.', defaultValue: {summary: 'undefined'}},
        disabled: {description: '클릭 불가능 스타일을 설정합니다.', defaultValue: {summary: 'false'}},
        id: {description: 'id 속성을 설정합니다.', defaultValue: {summary: 'undefined'}},
        className: {description: 'class 속성을 설정합니다.', defaultValue: {summary: 'undefined'}},
        style: {description: 'style 속성을 설정합니다.', defaultValue: {summary: 'undefined'}},
    },
};

export default meta;

type Story = StoryObj<typeof KChip>

const Template = (args: KChipProps) => {


    return (
        <>
            <div style={{display: 'flex', gap: '12px'}}>
                <KChip {...args} size={'small'}/>
                <KChip {...args} size={'medium'}/>
                <KChip {...args} size={'large'}/>
                <KChip {...args} disabled size={'large'}/>
            </div>
            <br/>
            <div style={{display: 'flex', gap: '12px'}}>
                <KChip {...args} contained size={'small'}/>
                <KChip {...args} contained size={'medium'}/>
                <KChip {...args} contained size={'large'}/>
                <KChip {...args} contained disabled size={'large'}/>
            </div>
            <br/>
            <div style={{display: 'flex', gap: '12px'}}>
                <KChip {...args} outlined size={'small'}/>
                <KChip {...args} outlined size={'medium'}/>
                <KChip {...args} outlined size={'large'}/>
                <KChip {...args} outlined disabled size={'large'}/>
            </div>
        </>
    );
};

export const Default: { args: KChipProps; render: (args: KChipProps) => ReactNode } = {
    render: Template,
    args: {
        size: 'medium',
        children: (<>Chip</>),
        closeable: true,
        rounded: true,
    },
};

