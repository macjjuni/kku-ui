import type {Meta, StoryObj} from '@storybook/react';
import {KSelect} from '@/components/input/select';
import {KSelectProps, KSelectRefs } from '@/components/input/select/KSelect.interface';
import { baseArgTyp, disabledArgType, sizeArgType } from '../../common/argTypes';
import { RefAttributes } from 'react';
import { JSX } from 'react/jsx-runtime';

const meta: Meta<typeof KSelect> = {
    component: KSelect,
    title: 'Input/Select',
    tags: ['autodocs'],
    argTypes: {
        value: {
            description: '선택된 요소의 값',
            defaultValue: { summary: 'undefined' },
            control: { type: 'text' },
        },
        items: { description: '선택 요소를 설정합니다. { title: string, value: string }', defaultValue: { summary: '[]' } },
        width: {
            description: '요소의 width 크기를 설정합니다.',
            defaultValue: { summary: 'undefined' },
            control: { type: 'number' },
        },
        noDataText: { description: '값이 없을 때 보여줄 텍스트를 설정합니다.', defaultValue: { summary: 'No Data' } },
        ...disabledArgType, ...sizeArgType, ...baseArgTyp,
    },
};

export default meta;

type Story = StoryObj<KSelectProps>


const itemTemplates = [
    { label: 'Home 🏠', value: 'home' },
    { label: 'Playground ⚽️', value: 'playground' },
    { label: 'Library 📚', value: 'library' },
    { label: 'Mountain ⛰️', value: 'mountain' },
];

const SelectStory = (args: JSX.IntrinsicAttributes & KSelectProps & RefAttributes<KSelectRefs>) => {
    return (
      <>
          <KSelect {...args} />
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </>
    )
}


export const Default: Story = {
    render: SelectStory,
    args: {
        items: itemTemplates,
        value: undefined,
        width: undefined,
        placeholder: 'placeholder',
        size: 'medium',
        disabled: false,
        onChange: () => {}
    },
};
