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
                <KButton {...args} large />
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
            <Item label={'Contained Custom Color'}>
                <KButton {...args} large contained color={'#FF9B9B'} />
                <KButton {...args} medium contained color={'#CBFFA9'} />
                <KButton {...args} small contained color={'#FFD6A5'} />
            </Item>
            <Item label={'Outlined Custom Color'}>
                <KButton {...args} large outlined color={'#7B66FF'} />
                <KButton {...args} medium outlined color={'#525CEB'} />
                <KButton {...args} small outlined color={'#5FBDFF'} />
            </Item>
        </Container>
    );
};

export const Variant: Story = {
    render: Template,
    args: { label: '안녕하세요'},
};

