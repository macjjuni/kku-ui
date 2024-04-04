import type {Meta, StoryObj} from '@storybook/react';
import {KCard} from '@/components/card';
import {KCardProps} from '@/components';

const meta: Meta<KCardProps> = {
    component: KCard,
    title: 'Components/Card',
    argTypes: {
        onClick: {description: '아이콘 클릭 이벤트를 설정합니다.', defaultValue: {summary: 'undefined'}},
        id: {description: 'id 속성을 설정합니다.', defaultValue: {summary: 'undefined'}},
        className: {description: 'class 속성을 설정합니다.', defaultValue: {summary: 'undefined'}},
        style: {description: 'style 속성을 설정합니다.', defaultValue: {summary: 'undefined'}},
    },
};

export default meta;

type Story = StoryObj<typeof KCard>

const Template = (args: KCardProps) => {


    return (
        <div>
            <KCard {...args} rounded={false}/>
            <br/><br/>
            <KCard {...args} />
            <br/><br/>
            <KCard {...args} subTitle={undefined}/>
        </div>
    );
};

export const Default: Story = {
    render: Template,
    args: {
        title: 'What is Lorem Ipsum?\n',
        subTitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        // children: (<>Card</>),
        rounded: true,
    },
};

