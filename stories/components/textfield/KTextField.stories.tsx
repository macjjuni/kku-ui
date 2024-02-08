import type {Meta, StoryObj} from '@storybook/react';
import {Container, Item} from '../common/Container';
import KTextField from '@/components/textfield/KTextField';
import {useState} from 'react';
import {KTextFieldProps} from '@/components/textfield/KTextField.interface';


const meta: Meta<typeof KTextField> = {
    component: KTextField,
    title: 'TextField',
};

export default meta;

type Story = StoryObj<KTextFieldProps>

const Template = (args: KTextFieldProps) => {

    const [largeValue, setLargeValue] = useState('Large');
    const [mediumValue, setMediumValue] = useState('Medium');
    const [smallValue, setSmallValue] = useState('Small');

    return (
        <Container>
            <Item label={'Default TextField'}>
                <KTextField {...args} large value={largeValue} onChange={(v) => {setLargeValue(v);}}/>
                <KTextField medium value={mediumValue} onChange={(v) => {setMediumValue(v);}}/>
                <KTextField small value={smallValue} onChange={(v) => {setSmallValue(v);}}/>
            </Item>
            <Item label={'Password'}>
                <KTextField large password value={largeValue} onChange={(v) => {setLargeValue(v);}}/>
                <KTextField medium password value={mediumValue} onChange={(v) => {setMediumValue(v);}}/>
                <KTextField small password value={smallValue} onChange={(v) => {setSmallValue(v);}}/>
            </Item>
            <Item label={'Label - Direction: Column'}>
                <KTextField label={'아이디'} column large value={largeValue} onChange={(v) => {setLargeValue(v);}}/>
                <KTextField label={'아이디'} column medium value={mediumValue} onChange={(v) => {setMediumValue(v);}}/>
                <KTextField label={'아이디'} column small value={smallValue} onChange={(v) => {setSmallValue(v);}}/>
            </Item>
            <Item label={'Label - Direction: Row'}>
                <KTextField label={'아이디'} row large value={largeValue} onChange={(v) => {setLargeValue(v);}}/>
                <KTextField label={'아이디'} row medium value={mediumValue} onChange={(v) => {setMediumValue(v);}}/>
                <KTextField label={'아이디'} row small value={smallValue} onChange={(v) => {setSmallValue(v);}}/>
            </Item>
            <Item label={'Disabled'}>
                <KTextField label={'아이디'} large value={largeValue} disabled onChange={(v) => {setLargeValue(v);}}/>
                <KTextField label={'아이디'} medium value={mediumValue} disabled onChange={(v) => {setMediumValue(v);}}/>
                <KTextField label={'아이디'} small value={smallValue} disabled onChange={(v) => {setSmallValue(v);}}/>
            </Item>
        </Container>
    );
};

export const Default: Story = {
    render: Template,
    args: {},
};
