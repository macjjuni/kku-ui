import type {Meta, StoryObj} from '@storybook/react';
import {Container, Item} from '../common/Container';
import {KButton} from '@/components';
import {KButtonProps} from '@/components/button/KButton.interface';

const meta: Meta<KButtonProps> = {
    title: 'Components/Button',
    component: KButton,
};

export default meta;

type Story = StoryObj<typeof KButton>

const Template = (args: KButtonProps) => {


    return (
        <Container>
            <Item label={'Default'}>
                <KButton {...args} large label={'안녕하세요'}/>
                <KButton label={'こんにちは'}/>
                <KButton small label={'Hello'}/>
            </Item>
            <Item label={'Contained'}>
                <KButton large contained label={'안녕하세요'}/>
                <KButton contained medium label={'Hello'}/>
                <KButton small contained label={'こんにちは'}/>
            </Item>
            <Item label={'Outlined'}>
                <KButton large outlined label={'안녕하세요'}/>
                <KButton outlined small label={'Hello'}/>
                <KButton small outlined label={'こんにちは'}/>
            </Item>
        </Container>
    );
};

export const Size: Story = {
    render: Template,
    args: {},
};

