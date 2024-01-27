import type {Meta, StoryObj} from '@storybook/react';
import {Container, Item} from '../common/Container';
import KButton from '../../../src/components/button/KButton';
import KButtonProps from '../../../src/components/button/KButton.interface';


const meta: Meta<typeof KButton> = {
    component: KButton,
    title: 'KButton',
};

export default meta;

type Story = StoryObj<typeof KButton>

const Template = (args: KButtonProps) => {
    return (
        <Container>
            <Item label={'Large'}>
                <KButton large {...args} />
            </Item>
            <Item label={'Medium'}>
                <KButton medium {...args} />
            </Item>
            <Item label={'Small'}>
                <KButton small {...args} />
            </Item>

        </Container>
    );
};

export const Default: Story = {
    render: Template,
    args: {label: 'Button'},
};
