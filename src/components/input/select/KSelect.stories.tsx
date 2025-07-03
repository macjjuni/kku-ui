import { RefAttributes, useCallback, useRef, useState } from 'react';
import { JSX } from 'react/jsx-runtime';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { KSelect, KSelectProps, KSelectRefs } from '@/components';
import {  disabledArgType, sizeArgType } from '@/common/storybook/argTypes';

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
    noDataText: { description: '값이 없을 때 보여줄 텍스트를 설정합니다.', control: { type: 'text' } },
    ...disabledArgType, ...sizeArgType
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

  const rootRef = useRef(null);
  const [value, setValue] = useState('');

  const onChangeValue = useCallback((val: string) => {
    setValue(val);
  }, []);

  return (
    <>
      <KSelect ref={rootRef} {...args} value={value} onChange={onChangeValue}/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </>
  );
};


export const Default: Story = {
  render: SelectStory,
  args: {
    items: itemTemplates,
    value: undefined,
    width: undefined,
    placeholder: 'placeholder',
    size: 'medium',
    disabled: false,
    onChange: () => {
    },
    noDataText: undefined,
  },
};
