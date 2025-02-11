import type {Meta, StoryObj} from '@storybook/react';
import {KIcon} from '@/components/icon';
import {KIconProps} from '@/components/icon/KIcon.interface';
import {kIcons} from '@/common/base/icon';

const meta: Meta<KIconProps> = {
    component: KIcon,
    title: 'Components/Icon',
    argTypes: {
        icon: {description: '아이콘 형태를 설정합니다.'},
        size: {description: '크기를 설정합니다.'},
        color: {description: '아이콘 색상을 설정합니다.'},
        onClick: {description: '아이콘 클릭 이벤트를 설정합니다.'},
        clickable: {description: '클릭 형태로 스타일을 설정합니다.'},
        disabled: {description: '클릭 불가능 스타일을 설정합니다.'},
        id: {description: 'id 속성을 설정합니다.'},
        className: {description: 'class 속성을 설정합니다.'},
        style: {description: 'style 속성을 설정합니다.'},
    }
};

export default meta;

type Story = StoryObj<typeof KIcon>

const Template = (args: KIconProps) => {
    return (
        <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '12px', flexWrap: 'wrap'}}>
            {
                Object.keys(kIcons).map((iconName) => (
                    <KIcon key={iconName} {...args} icon={iconName} size={40}/>
                ))
            }
        </div>
    );
};

export const Default: Story = {
    render: Template,
    args: {    },
};

