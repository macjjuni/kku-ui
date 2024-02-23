import type {Meta, StoryObj} from '@storybook/react';
import {Container, Item} from '../common/Container';
import {KButton, KButtonRefs} from '@/components';
import {KButtonProps} from '@/components/button/KButton.interface';
import {useEffect, useRef} from 'react';

const meta: Meta<KButtonProps> = {title: 'Components/Button', component: KButton};

export default meta;

type Story = StoryObj<typeof KButton>

const Template = (args: KButtonProps) => {

    const loadingButtonRef1 = useRef<KButtonRefs>(null);
    const loadingButtonRef2 = useRef<KButtonRefs>(null);
    const loadingButtonRef3 = useRef<KButtonRefs>(null);
    const loadingButtonRef4 = useRef<KButtonRefs>(null);
    const loadingButtonRef5 = useRef<KButtonRefs>(null);

    useEffect(() => {
        loadingButtonRef1.current?.startLoading();
        loadingButtonRef2.current?.startLoading();
        loadingButtonRef3.current?.startLoading();
        loadingButtonRef4.current?.startLoading();
        loadingButtonRef5.current?.startLoading();
    }, []);

    return (
        <Container>
            <Item label={'Loading'}>
                <KButton ref={loadingButtonRef1} {...args} label={'안녕하세요'}/>
                <KButton ref={loadingButtonRef2} primary label={'안녕하세요'}/>
                <KButton ref={loadingButtonRef3} outlined label={'안녕하세요'}/>
                <KButton ref={loadingButtonRef4} primary label={'안녕하세요'} color={'#FF9B9B'}/>
                <KButton ref={loadingButtonRef5} label={'안녕하세요'} color={'#7B66FF'}/>
            </Item>
        </Container>
    );
};

export const Loading: Story = {
    render: Template,
    args: {},
};

