import type {Meta, StoryObj} from '@storybook/react';
import {Container, Item} from '../../common/Container';
import { KCheckboxGroup } from '@/components';
import {useState} from 'react';
import {KCheckboxProps} from '@/components/input/checkbox/KCheckbox.interface';

const meta: Meta<typeof KCheckboxGroup> = {
    component: KCheckboxGroup,
    title: 'CheckboxGroup',
};

export default meta;

type Story = StoryObj<KCheckboxProps>


const items = [
    { label: 'text1', value: 'value1' },
    { label: 'text2', value: 'value2' },
    { label: 'text3', value: 'value3' },
]

const Template = (args: KCheckboxProps) => {

    const [value, setValue] = useState<string[]>([]);
    // const [value2, setValue2] = useState('playground');
    // const [value3, setValue3] = useState('library');


    const onChange = (value: string[]) => {
        console.log('story', value);
        setValue(value);
    };
    // const onChange2 = (value: string) => { setValue2(value); };
    // const onChange3 = (value: string) => { setValue3(value); };

    // const [mediumValue, setMediumValue] = useState('');
    // const [small width={'132px'}Value, setSmallValue] = useState('');


    return (
        <Container>
            <Item label={'Select(size: large)'}>
                <KCheckboxGroup {...args} items={items} value={value} onChange={onChange} />
            </Item>
            {/* <Item label={'Select(size: Medium)'}> */}
            {/*     <KCheckbox {...args} type={'square'} value={value} label={'Checkbox1'} onChange={onChange}/> */}
            {/*     <KCheckbox {...args} type={'circle'} value={value} label={'Checkbox1'} onChange={onChange}/> */}
            {/* </Item> */}
            {/* <Item label={'Select(size: Small)'}> */}
            {/*     <KCheckbox {...args} small type={'square'} value={value} label={'Checkbox1'} onChange={onChange}/> */}
            {/*     <KCheckbox {...args} small type={'circle'} value={value} label={'Checkbox1'} onChange={onChange}/> */}
            {/* </Item> */}

        </Container>
    );
};

export const Default: Story = {
    render: Template,
    args: {},
};
