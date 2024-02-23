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
            <Item label={'Disabled'}>
                <KButton {...args} label={'안녕하세요'}/>
                <KButton {...args} primary label={'안녕하세요'}/>
                <KButton {...args} outlined label={'안녕하세요'}/>
                <KButton {...args} primary label={'안녕하세요'} color={'#1D24CA'}/>
                <KButton {...args} label={'안녕하세요'} color={'#7B66FF'}/>
            </Item>
        </Container>
    );
};

export const Disabled: Story = {
    render: Template,
    args: {disabled: true},
};

