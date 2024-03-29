import type {Meta, StoryObj} from '@storybook/react';
import {Container, Item} from '../common/Container';
import {KButton} from '@/components';
import {KButtonProps} from '@/components/button/KButton.interface';

const meta: Meta<KButtonProps> = {title: 'Components/Button', component: KButton};

export default meta;

type Story = StoryObj<typeof KButton>

const Template = (args: KButtonProps) => {


    return (
        <Container>
            <Item label={'Default'}>
                <KButton {...args} label={'안녕하세요'}/>
                <KButton label={'Hello'}/>
                <KButton label={'こんにちは'}/>
            </Item>
            <Item label={'Contained'}>
                <KButton contained label={'안녕하세요'}/>
                <KButton contained label={'Hello'}/>
                <KButton contained label={'こんにちは'}/>
            </Item>
            <Item label={'Outlined'}>
                <KButton outlined label={'안녕하세요'}/>
                <KButton outlined label={'Hello'}/>
                <KButton outlined label={'こんにちは'}/>
            </Item>
            <Item label={'Contained Custom Color'}>
                <KButton contained label={'안녕하세요'} color={'#FF9B9B'}/>
                <KButton contained label={'Hello'} color={'#CBFFA9'}/>
                <KButton contained label={'こんにちは'} color={'#FFD6A5'}/>
            </Item>
            <Item label={'Outlined Custom Color'}>
                <KButton label={'안녕하세요'} color={'#7B66FF'}/>
                <KButton label={'Hello'} color={'#525CEB'}/>
                <KButton label={'こんにちは'} color={'#5FBDFF'}/>
            </Item>
        </Container>
    );
};

export const Variant: Story = {
    render: Template,
    args: {},
};

