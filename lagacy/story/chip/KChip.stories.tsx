import type {Meta} from '@storybook/react';
import {KChip, KChipProps} from '@/components/chip';
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

const defaultTemplate = (args: KChipProps) => {
    return (
        <div style={{display: 'flex'}}>
            <KChip {...args} />
        </div>
    );
};

const customTemplate = (args: KChipProps) => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
            <div style={{display: 'flex', gap: '16px'}}>
                <KChip {...args} large rounded/>
                <KChip {...args} large outlined rounded/>
                <KChip {...args} large contained rounded/>
            </div>
            <div style={{display: 'flex', gap: '16px'}}>
                <KChip {...args} rounded/>
                <KChip {...args} outlined rounded/>
                <KChip {...args} contained rounded/>
            </div>
            <div style={{display: 'flex', gap: '16px'}}>
                <KChip {...args} small rounded/>
                <KChip {...args} small outlined rounded/>
                <KChip {...args} small contained rounded/>
            </div>
            <br/>
            <div style={{display: 'flex', gap: '16px'}}>
                <KChip {...args} large/>
                <KChip {...args} large outlined/>
                <KChip {...args} large contained/>
            </div>
            <div style={{display: 'flex', gap: '16px'}}>
                <KChip {...args} />
                <KChip {...args} outlined/>
                <KChip {...args} contained/>
            </div>
            <div style={{display: 'flex', gap: '16px'}}>
                <KChip {...args} small/>
                <KChip {...args} small outlined/>
                <KChip {...args} small contained/>
            </div>
        </div>
    );
};

export const Default: { args: KChipProps; render: (args: KChipProps) => ReactNode } = {
    render: defaultTemplate,
    args: {
        size: 'large',
        children: (<>Chip</>),
        closeable: false,
        rounded: true,
    },
};


export const Clickable: { args: KChipProps; render: (args: KChipProps) => ReactNode } = {
    render: customTemplate,
    args: {
        children: (<>Chip</>),
        onClick: () => {},
        closeable: false,
    },
};


