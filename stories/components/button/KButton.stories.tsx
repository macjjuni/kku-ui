import type {Meta, StoryObj} from '@storybook/react';
import {Container, Item} from '../common/Container';
import {KButton, KButtonRefs} from '@/components';
import {KButtonProps} from '@/components/button/KButton.interface';
import {useEffect, useRef} from 'react';


const meta: Meta<typeof KButton> = {
    component: KButton,
    title: 'Button',
};

export default meta;

type Story = StoryObj<typeof KButton>

const Template = (args: KButtonProps) => {

    const loadButtonRef1 = useRef<KButtonRefs>(null);
    const loadButtonRef2 = useRef<KButtonRefs>(null);
    const loadButtonRef3 = useRef<KButtonRefs>(null);
    const loadButtonRef4 = useRef<KButtonRefs>(null);

    useEffect(() => {
        loadButtonRef1.current!.startLoading();
        loadButtonRef2.current!.startLoading();
        loadButtonRef3.current!.startLoading();
        loadButtonRef4.current!.startLoading();
    }, []);

    return (
        <Container>
            <Item label={'Default Button'}>
                <KButton {...args} large label={'안녕하세요'}/>
                <KButton {...args} large label={'Large'}/>
                <KButton {...args} medium label={'Medium'}/>
                <KButton {...args} small label={'Small'}/>
                <KButton {...args} large disabled label={'Disabled'}/>
            </Item>
            <Item label={'Primary Button'}>
                <KButton {...args} primary large label={'안녕하세요'}/>
                <KButton {...args} primary large label={'Large'}/>
                <KButton {...args} primary medium label={'Medium'}/>
                <KButton {...args} primary small label={'Small'}/>
                <KButton {...args} primary large disabled label={'Disabled'}/>
            </Item>
            <Item label={'Outlined Button'}>
                <KButton {...args} outlined large label={'안녕하세요'}/>
                <KButton {...args} outlined large label={'Large'}/>
                <KButton {...args} outlined medium label={'Medium'}/>
                <KButton {...args} outlined small label={'Small'}/>
                <KButton {...args} outlined large disabled label={'Disabled'}/>
            </Item>
            <Item label={'Custom Color Button'}>
                <KButton {...args} primary large label={'안녕하세요'} color={'#FF9B9B'}/>
                <KButton {...args} primary large label={'Large'} color={'#FF9B9B'}/>
                <KButton {...args} primary medium label={'Medium'} color={'#FFD6A5'}/>
                <KButton {...args} primary small label={'Small'} color={'#CBFFA9'}/>
                <KButton {...args} primary large label={'Disabled'} disabled color={'#FF9B9B'}/>
            </Item>
            <Item label={'Custom Outline Color Button'}>
                <KButton {...args} large label={'안녕하세요'} color={'#7B66FF'}/>
                <KButton {...args} large label={'Large'} color={'#7B66FF'}/>
                <KButton {...args} medium label={'Medium'} color={'#5FBDFF'}/>
                <KButton {...args} small label={'Small'} color={'#96EFFF'}/>
                <KButton {...args} large label={'Disabled'} disabled color={'#7B66FF'}/>
            </Item>
            <Item label={'Loading Button'}>
                <KButton ref={loadButtonRef1} {...args} primary color={'#7B66FF'} large label={'Large'}/>
                <KButton ref={loadButtonRef2} {...args} outlined medium label={'Medium'}/>
                <KButton ref={loadButtonRef3} {...args} primary color={'#FF9B9B'} small label={'Small'}/>
            </Item>
            <Item label={'Dark Mode Default Button'} className={'dark'}>
                <KButton {...args} large label={'안녕하세요'}/>
                <KButton {...args} medium label={'Hello'}/>
                <KButton {...args} small label={'こんにちは'}/>
                <KButton {...args} large disabled label={'Disabled'}/>
                <KButton ref={loadButtonRef4} {...args} large label={'Loading'} />
            </Item>
        </Container>
    );
};

export const Default: Story = {
    render: Template,
    args: {},
};
