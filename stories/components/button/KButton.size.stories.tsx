import type {Meta, StoryObj} from '@storybook/react';
import {Container, Item} from '../common/Container';
import {KButton} from '@/components';
import {KButtonProps} from '@/components/button/KButton.interface';

const meta: Meta<KButtonProps> = {
    title: 'Button',
    component: KButton,
};

export default meta;

type Story = StoryObj<typeof KButton>

const Template = (args: KButtonProps) => {


    return (
        <Container>
            <Item label={'Large'}>
                <KButton {...args} primary large label={'안녕하세요'}/>
                <KButton primary large label={'Hello'}/>
                <KButton primary large label={'こんにちは'}/>
            </Item>
            <Item label={'Medium'}>
                <KButton primary medium label={'안녕하세요'}/>
                <KButton primary medium label={'Hello'}/>
                <KButton primary medium label={'こんにちは'}/>
            </Item>
            <Item label={'Small'}>
                <KButton outlined small label={'안녕하세요'}/>
                <KButton outlined small label={'Hello'}/>
                <KButton outlined small label={'こんにちは'}/>
            </Item>
        </Container>
    );
};

export const Size: Story = {
    render: Template,
    args: {},
};

