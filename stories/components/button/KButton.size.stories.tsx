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
                <KButton {...args} large/>
                <KButton {...args} medium />
                <KButton {...args} small />
            </Item>
            <Item label={'Contained'}>
                <KButton {...args} large contained />
                <KButton {...args} medium contained />
                <KButton {...args} small contained />
            </Item>
            <Item label={'Outlined'}>
                <KButton {...args} large outlined />
                <KButton {...args} medium outlined />
                <KButton {...args} small outlined />
            </Item>
        </Container>
    );
};

export const size: Story = {
    render: Template,
    args: {label: '안녕하세요'},
};

