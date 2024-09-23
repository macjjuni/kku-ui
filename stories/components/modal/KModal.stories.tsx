import type {Meta, StoryObj} from '@storybook/react';
import {useState, useMemo} from 'react';
import {KModal, KModalProps} from '@/components/modal';
import {KButton} from '@/components';

const meta: Meta<KModalProps> = {
    component: KModal,
    title: 'Components/Modal',
    argTypes: {
        id: {description: 'id 속성을 설정합니다.', defaultValue: {summary: 'undefined'}},
        className: {description: 'class 속성을 설정합니다.', defaultValue: {summary: 'undefined'}},
        style: {description: 'style 속성을 설정합니다.', defaultValue: {summary: 'undefined'}},
        size: {description: '모달 사이즈 속성을 설정합니다.', defaultValue: {summary: 'medium'}},
    },
};

export default meta;

type Story = StoryObj<typeof KModal>

const Template = (args: KModalProps) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const onOpen = () => {
        setIsOpen(true);
    };


    const onClose = () => {
        setIsOpen(false);
    };

    const content = useMemo(() => (
        <>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book.
        </>
    ), []);


    return (
        <>
            <KButton onClick={onOpen}>Open Modal!</KButton>
            <KModal {...args}
                    title={'What is Lorem Ipsum?'}
                    isOpen={isOpen}
                    onClose={onClose}
                    content={content}
                    footer={<KButton onClick={onClose}>취소</KButton>}
            />
        </>
    );
};


export const Default: Story = {
    render: Template, args: {},
};
