import type {Meta, StoryObj} from '@storybook/react';
import {Container, DarkContainer, Item} from '../common/Container';
import KTextField from '@/components/textfield/KTextField';
import {KTextFieldProps} from '@/components/textfield/KTextField.interface';
import {useState} from 'react';


const meta: Meta<typeof KTextField> = {
    component: KTextField,
    title: 'TextField',
};

export default meta;

type Story = StoryObj<typeof KTextField>

const Template = (args: KTextFieldProps) => {

    const [largeValue, setLargeValue] = useState('Large');
    const [mediumValue, setMediumValue] = useState('Medium');
    const [smallValue, setSmallValue] = useState('Small');

    return (
        <>
            <Container>
                <Item label={'Default TextField'}>
                    <KTextField {...args} large value={largeValue} onChange={(v) => {setLargeValue(v);}}/>
                    <KTextField {...args} medium value={mediumValue} onChange={(v) => {setMediumValue(v);}}/>
                    <KTextField {...args} small value={smallValue} onChange={(v) => {setSmallValue(v);}}/>
                </Item>
                <Item label={'Disabled TextField'}>
                    <KTextField {...args} large value={largeValue} disabled onChange={(v) => {setLargeValue(v);}}/>
                    <KTextField {...args} medium value={mediumValue} disabled onChange={(v) => {setMediumValue(v);}}/>
                    <KTextField {...args} small value={smallValue} disabled onChange={(v) => {setSmallValue(v);}}/>
                </Item>

            </Container>
            <DarkContainer>
                <Item label={'Dark Mode - Default TextField'} className={'dark'}>
                    <KTextField {...args} large value={largeValue} onChange={(v) => {setLargeValue(v);}}/>
                    <KTextField {...args} medium value={mediumValue} onChange={(v) => {setMediumValue(v);}}/>
                    <KTextField {...args} small value={smallValue} onChange={(v) => {setSmallValue(v);}}/>
                </Item>
                <Item label={'Dark Mode - Disabled TextField'} className={'dark'}>
                    <KTextField {...args} large value={largeValue} disabled onChange={(v) => {setLargeValue(v);}}/>
                    <KTextField {...args} medium value={mediumValue} disabled onChange={(v) => {setMediumValue(v);}}/>
                    <KTextField {...args} small value={smallValue} disabled onChange={(v) => {setSmallValue(v);}}/>
                </Item>
            </DarkContainer>
        </>
    );
};

export const Default: Story = {
    render: Template,
    args: {},
};
