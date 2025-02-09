import type {Meta, StoryObj} from '@storybook/react';
import {KSelect} from '@/components/input/select';
import {useState} from 'react';
import {KSelectProps} from '@/components/input/select/KSelect.interface';
import {baseArgTyp, disabledArgType, sizeArgType} from '../../common/argTypes';

const meta: Meta<typeof KSelect> = {
    component: KSelect,
    title: 'Input/Select',
    argTypes: {
        items: {description: '선택 요소를 설정합니다. { title: string, value: string }', defaultValue: {summary: '[]'}},
        width: {description: '요소의 width 크기를 설정합니다.', defaultValue: {summary: 'undefined'}},
        noDataText: {description: '값이 없을 때 보여줄 텍스트를 설정합니다.', defaultValue: {summary: 'No Data'}},
        ...disabledArgType, ...sizeArgType, ...baseArgTyp,
    }
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

    const [value, setValue] = useState('');

    return (
        <>
            <KSelect {...args} value={value} onChange={(val) => { setValue(val);}} items={itemTemplates}/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </>
    );
};

export const Default: Story = {
    render: Template,
    args: {
        items: itemTemplates,
        placeholder: 'placeholder',
        size: 'medium',
        // width: '280px',
        disabled: false
    },
};
