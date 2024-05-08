import type {Meta, StoryObj} from '@storybook/react';
import {KChip} from '@/components/chip';
import {KChipProps} from '@/components/chip';

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
                <KChip {...args} />
                <KChip {...args} contained />
                <KChip {...args} outlined />
            </div>
        </>
    );
};

export const Default: Story = {
    render: Template,
    args: {
        size: 'large',
        children: (<>Chip</>),
        closeable: true,
        rounded: true,
    },
};

