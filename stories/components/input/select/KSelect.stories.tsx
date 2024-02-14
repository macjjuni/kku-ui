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
    { title: 'Playground ⚽️', value: 'playground' },
    { title: 'Library 📚', value: 'library' },
    { title: 'Home 🏠', value: 'home' },
    { title: 'Mountain ⛰️', value: 'mountain' },
]
const Template = (args: KSelectProps) => {

    const [value, setValue] = useState('playground');

    const onChange = (value: string) => {
        setValue(value);
    }
    // const [mediumValue, setMediumValue] = useState('');
    // const [smallValue, setSmallValue] = useState('');


    return (
        <Container>
            <Item label={'Default TextField'}>
                <KSelect {...args} value={value} onChange={onChange} items={itemTemplates} />
            </Item>
            {/* <Item label={'Password / required / right-action'}> */}

            {/* </Item> */}
            {/* <Item label={'Label(Direction: Column)'}> */}

            {/* </Item> */}
            {/* <Item label={'Label(Direction: Row)'}> */}

            {/* </Item> */}
            {/* <Item label={'Disabled'}> */}

            {/* </Item> */}
            {/* <Item label={'Clearable'}> */}

            {/* </Item> */}
        </Container>
    );
};

export const Default: Story = {
    render: Template,
    args: {},
};
