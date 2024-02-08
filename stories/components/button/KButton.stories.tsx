import type {Meta, StoryObj} from '@storybook/react';
import {Container, Item} from '../common/Container';
import {KButton, KButtonRefs} from '@/components';
import {KButtonProps} from '@/components/button/KButton.interface';
import {useEffect, useRef} from 'react';

const meta: Meta<KButtonProps> = {
    component: KButton,
    title: 'Button',
};

export default meta;

type Story = StoryObj<typeof KButton>

const Template = (args: KButtonProps) => {

    const loadButtonRef1 = useRef<KButtonRefs>(null);
    const loadButtonRef2 = useRef<KButtonRefs>(null);
    const loadButtonRef3 = useRef<KButtonRefs>(null);

    useEffect(() => {
        loadButtonRef1.current!.startLoading();
        loadButtonRef2.current!.startLoading();
        loadButtonRef3.current!.startLoading();
    }, []);

    return (
        <Container>
            <Item label={'Default Button'}>
                <KButton {...args} large label={'안녕하세요'}/>
                <KButton large label={'Hello'}/>
                <KButton medium label={'こんにちは'}/>
                <KButton small label={'Dev'}/>
                <KButton large disabled label={'Disabled'}/>
            </Item>
            <Item label={'Primary Button'}>
                <KButton primary large label={'안녕하세요'}/>
                <KButton primary large label={'Large'}/>
                <KButton primary medium label={'Medium'}/>
                <KButton primary small label={'Small'}/>
                <KButton primary large disabled label={'Disabled'}/>
            </Item>
            <Item label={'Outlined Button'}>
                <KButton outlined large label={'안녕하세요'}/>
                <KButton outlined large label={'Large'}/>
                <KButton outlined medium label={'Medium'}/>
                <KButton outlined small label={'Small'}/>
                <KButton outlined large disabled label={'Disabled'}/>
            </Item>
            <Item label={'Custom Color Button'}>
                <KButton primary large label={'안녕하세요'} color={'#FF9B9B'}/>
                <KButton primary large label={'Large'} color={'#FF9B9B'}/>
                <KButton primary medium label={'Medium'} color={'#FFD6A5'}/>
                <KButton primary small label={'Small'} color={'#CBFFA9'}/>
                <KButton primary large label={'Disabled'} disabled color={'#FF9B9B'}/>
            </Item>
            <Item label={'Custom Outline Color Button'}>
                <KButton large label={'안녕하세요'} color={'#7B66FF'}/>
                <KButton large label={'Large'} color={'#7B66FF'}/>
                <KButton medium label={'Medium'} color={'#5FBDFF'}/>
                <KButton small label={'Small'} color={'#96EFFF'}/>
                <KButton large label={'Disabled'} disabled color={'#7B66FF'}/>
            </Item>
            <Item label={'Loading Button'}>
                <KButton ref={loadButtonRef1} primary color={'#7B66FF'} large label={'Large'}/>
                <KButton ref={loadButtonRef2} outlined medium label={'Medium'}/>
                <KButton ref={loadButtonRef3} primary color={'#FF9B9B'} small label={'Small'}/>
            </Item>
        </Container>
    );
};

export const Default: Story = {
    render: Template,
    args: {},
};

