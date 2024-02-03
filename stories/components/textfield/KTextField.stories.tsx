import type {Meta, StoryObj} from '@storybook/react';
import {Container, Item} from '../common/Container';
import {KButton, KButtonProps} from '@/components';


const meta: Meta<typeof KButton> = {
    component: KButton,
    title: 'TextField',
};

export default meta;

type Story = StoryObj<typeof KButton>

const Template = (args: KButtonProps) => {

    return (
        <Container>
            <Item label={'Primary TextField'}  {...args}>
                TextField
            </Item>
            <Item label={'Outlined TextField'}>
                TextField
            </Item>
            <Item label={'Custom Color TextField'}>
                TextField
            </Item>
            <Item label={'Default TextField'}>
                TextField
            </Item>
        </Container>
    );
};

export const Default: Story = {
    render: Template,
    args: {},
};
