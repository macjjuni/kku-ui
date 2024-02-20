import type {Meta, StoryObj} from '@storybook/react';
import {Container, Item} from '../../common/Container';
import {KCheckbox} from '@/components/input/checkbox';
import {useEffect, useState} from 'react';
import {KCheckboxProps} from '@/components/input/checkbox/KCheckbox.interface';

const meta: Meta<typeof KCheckbox> = {
    component: KCheckbox,
    title: 'Checkbox',
};

export default meta;

type Story = StoryObj<KCheckboxProps>


const Template = (args: KCheckboxProps) => {

    const [value, setValue] = useState<boolean>(false);
    // const [value2, setValue2] = useState('playground');
    // const [value3, setValue3] = useState('library');


    const onChange = (value: boolean) => { setValue(value); };
    // const onChange2 = (value: string) => { setValue2(value); };
    // const onChange3 = (value: string) => { setValue3(value); };

    // const [mediumValue, setMediumValue] = useState('');
    // const [small width={'132px'}Value, setSmallValue] = useState('');

    useEffect(() => {
        console.log(value);
    }, [value]);


    return (
        <Container>
            <Item label={'Select(size: large)'}>
                <KCheckbox {...args} large checked={value} label={'Checkbox1'} onChange={onChange} />
                <KCheckbox {...args} large circle checked={value} label={'Checkbox1'} onChange={onChange} />
            </Item>
            <Item label={'Select(size: Medium)'}>
                <KCheckbox {...args} type={'square'} checked={value} label={'Checkbox1'} onChange={onChange} />
                <KCheckbox {...args} type={'circle'} checked={value} label={'Checkbox1'} onChange={onChange} />
            </Item>
            <Item label={'Select(size: Small)'}>
                <KCheckbox {...args} small type={'square'} checked={value} label={'Checkbox1'} onChange={onChange} />
                <KCheckbox {...args} small type={'circle'} checked={value} label={'Checkbox1'} onChange={onChange} />
            </Item>

        </Container>
    );
};

export const Default: Story = {
    render: Template,
    args: {},
};
