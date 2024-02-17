import type {Meta, StoryObj} from '@storybook/react';
import {Container, Item} from '../../common/Container';
import {KSelect} from '@/components/input/select';
import {useState} from 'react';
import {KSelectProps} from '@/components/input/select/KSelect.interface';

const meta: Meta<typeof KSelect> = {
    component: KSelect,
    title: 'Select',
};

export default meta;

type Story = StoryObj<KSelectProps>


const itemTemplates = [
    {title: 'Home 🏠', value: 'home'},
    {title: 'Playground ⚽️', value: 'playground'},
    {title: 'Library 📚', value: 'library'},
    {title: 'Mountain ⛰️', value: 'mountain'},
];
const Template = (args: KSelectProps) => {

    const [value, setValue] = useState('home');
    const [value2, setValue2] = useState('playground');
    const [value3, setValue3] = useState('library');


    const onChange = (value: string) => { setValue(value); };
    const onChange2 = (value: string) => { setValue2(value); };
    const onChange3 = (value: string) => { setValue3(value); };

    // const [mediumValue, setMediumValue] = useState('');
    // const [small width={'132px'}Value, setSmallValue] = useState('');


    return (
        <Container>
            <Item label={'Select(size: large)'}>
                <KSelect {...args} width={'180px'} large value={value} onChange={onChange} items={itemTemplates}/>
                <KSelect {...args} width={'180px'} large value={value} onChange={onChange} items={itemTemplates}/>
                <KSelect {...args} width={'180px'} large value={value} onChange={onChange} items={itemTemplates}/>
                <KSelect {...args} width={'180px'} large value={''} placeholder={'placeholder'} onChange={onChange} items={[]}/>
                <KSelect {...args} width={'180px'} large disabled value={value} onChange={onChange} items={itemTemplates}/>
            </Item>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Item label={'Select(size: medium)'}>
                <KSelect {...args} value={value2} width={'160px'} onChange={onChange2} items={itemTemplates}/>
                <KSelect {...args} value={value2} width={'160px'} onChange={onChange2} items={itemTemplates}/>
                <KSelect {...args} value={value2} width={'160px'} onChange={onChange2} items={itemTemplates}/>
                <KSelect {...args} value={''} width={'160px'} placeholder={'placeholder'} onChange={onChange2} items={[]}/>
                <KSelect {...args} value={value2} width={'160px'} onChange={onChange2} disabled items={itemTemplates}/>
            </Item>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Item label={'Select(size: small'}>
                <KSelect {...args} small width={'132px'} value={value3} onChange={onChange3} items={itemTemplates}/>
                <KSelect {...args} small width={'132px'} value={value3} onChange={onChange3} items={itemTemplates}/>
                <KSelect {...args} small width={'132px'} value={value3} onChange={onChange3} items={itemTemplates}/>
                <KSelect {...args} small width={'132px'} value={''} placeholder={'placeholder'} onChange={onChange2} items={[]}/>
                <KSelect {...args} small width={'132px'} value={value3} onChange={onChange3} disabled items={itemTemplates}/>
            </Item>
        </Container>
    );
};

export const Default: Story = {
    render: Template,
    args: {},
};
