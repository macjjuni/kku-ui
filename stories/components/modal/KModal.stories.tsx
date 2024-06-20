import type {Meta, StoryObj} from '@storybook/react';
import {useState, useMemo} from 'react';
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
    const [state, setState] = useState(0);

    const onOpen = () => {
        setIsOpen(true);
    };

    const onClose = () => {
        setIsOpen(false);
    };

    const increaseState = () => {
        setState(prev => prev + 1);
    };

    const content = useMemo(() => (
        <>
            <div>{state}</div>
            <button onClick={increaseState}>Increase</button>
        </>
    ), [state, increaseState]);


    return (
        <>
            <KButton onClick={onOpen}>Open Modal!</KButton>
            <KModal {...args}
                    title={'What is Lorem Ipsum?'}
                    isOpen={isOpen}
                    size={"small"}
                    onClose={onClose}
                    overlayClosable
                    content={content}
                    footer={<KButton onClick={onClose}>취소</KButton>}
            />
        </>
    );
};


export const Default: Story = {
    render: Template, args: {},
};
