import type {Meta, StoryObj} from '@storybook/react';
import {KIcon} from '@/components/icon';
import {KIconProps} from '@/components/icon/KIcon.interface';
// import kIcons from '@/common/base/icon';

const meta: Meta<KIconProps> = {
    component: KIcon,
    title: 'Components/Icon',
    argTypes: {
        icon: {description: '아이콘 형태를 설정합니다.'},
        size: {description: '크기를 설정합니다.', defaultValue: { summary: 'medium' }},
        color: {description: '아이콘 색상을 설정합니다.', defaultValue: { summary: 'undefined' }},
        onClick: {description: '아이콘 클릭 이벤트를 설정합니다.', defaultValue: { summary: 'undefined' }},
        clickable: {description: '클릭 형태로 스타일을 설정합니다.', defaultValue: { summary: 'false' }},
        disabled: {description: '클릭 불가능 스타일을 설정합니다.', defaultValue: { summary: 'false' }},
        id: {description: 'id 속성을 설정합니다.', defaultValue: { summary: 'undefined' }},
        className: {description: 'class 속성을 설정합니다.', defaultValue: { summary: 'undefined' }},
        style: {description: 'style 속성을 설정합니다.', defaultValue: { summary: 'undefined' }},
    }
};

export default meta;

type Story = StoryObj<typeof KIcon>

const Template = (args: KIconProps) => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px'}}>
            <KIcon {...args} size={'large'} />
            <KIcon {...args} size={'medium'} />
            <KIcon {...args} size={'small'} />
        </div>
    );
};

export const Default: Story = {
    render: Template,
    args: {
        icon: 'algorithm',
        clickable: false,
        disabled: false,
    },
};

