import type {Meta, StoryObj} from '@storybook/react';
import {Container, Item} from '../common/Container';
import {KButton} from '@/components';
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
            <Item label={'Primary Button'}>
                <KButton {...args} primary large label={'Large'} />
                <KButton {...args} primary medium label={'Medium'} />
                <KButton {...args} primary small label={'Small'} />
            </Item>
            <Item label={'Outlined Button'}>
                <KButton {...args} outlined large label={'Large'} />
                <KButton {...args} outlined medium label={'Medium'} />
                <KButton {...args} outlined small label={'Small'} />
            </Item>
            <Item label={'Default Button'}>
                <KButton {...args} large label={'Large'} />
                <KButton {...args} medium label={'Medium'} />
                <KButton {...args} small label={'Small'} />
            </Item>

            {/* <Item label={'Small'}> */}
            {/*     <KButton small {...args} /> */}
            {/* </Item> */}
        </Container>
    );
};

export const Default: Story = {
    render: Template,
    args: {},
};
