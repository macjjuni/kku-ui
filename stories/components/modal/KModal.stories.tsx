import type {Meta, StoryObj} from '@storybook/react';
import {useState} from 'react';
import {KModal, KModalProps} from '@/components/modal';
import {KButton} from '@/components';
// import {variantArgType} from '../common/argTypes';

const meta: Meta<KModalProps> = {
    component: KModal,
    title: 'Components/Modal',
    argTypes: {
        id: {description: 'id 속성을 설정합니다.', defaultValue: {summary: 'undefined'}},
        className: {description: 'class 속성을 설정합니다.', defaultValue: {summary: 'undefined'}},
        style: {description: 'style 속성을 설정합니다.', defaultValue: {summary: 'undefined'}},
    },
};

export default meta;

type Story = StoryObj<typeof KModal>

const Template = (args: KModalProps) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const changeOpen = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <>
            <KButton onClick={changeOpen}>Open Modal!</KButton>
            <KModal {...args} isOpen={isOpen}/>
        </>
    );
};


export const Default: Story = {
    render: Template, args: {
        title: 'What is Lorem Ipsum?',
        content: <>Hello World!</>,
        footer: <><KButton>확인</KButton><KButton>취소</KButton></>
    },
};
