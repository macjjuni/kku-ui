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
    // const [smallValue, setSmallValue] = useState('');


    return (
        <Container>
            <Item label={'Select(size: large)'}>
                <KSelect {...args} large value={value} onChange={onChange} items={itemTemplates}/>
                <KSelect {...args} large value={value} onChange={onChange} items={itemTemplates}/>
                <KSelect {...args} large value={value} onChange={onChange} items={itemTemplates}/>
                <KSelect {...args} large value={''} placeholder={'placeholder'} width={'162px'} onChange={onChange} items={[]}/>
                <KSelect {...args} large disabled value={value} onChange={onChange} items={itemTemplates}/>
            </Item>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Item label={'Select(size: medium)'}>
                <KSelect {...args} value={value2} onChange={onChange2} items={itemTemplates}/>
                <KSelect {...args} value={value2} onChange={onChange2} items={itemTemplates}/>
                <KSelect {...args} value={value2} onChange={onChange2} items={itemTemplates}/>
                <KSelect {...args} value={''} placeholder={'placeholder'} width={'148px'} onChange={onChange2} items={[]}/>
                <KSelect {...args} value={value2} onChange={onChange2} disabled items={itemTemplates}/>
            </Item>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Item label={'Select(size: small)'}>
                <KSelect {...args} small value={value3} onChange={onChange3} items={itemTemplates}/>
                <KSelect {...args} small value={value3} onChange={onChange3} items={itemTemplates}/>
                <KSelect {...args} small value={value3} onChange={onChange3} items={itemTemplates}/>
                <KSelect {...args} small value={''} placeholder={'placeholder'} width={'130px'} onChange={onChange2} items={[]}/>
                <KSelect {...args} small value={value3} onChange={onChange3} disabled items={itemTemplates}/>
            </Item>
        </Container>
    );
};

export const Default: Story = {
    render: Template,
    args: {},
};
