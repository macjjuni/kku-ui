import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { KMenu, KMenuProps } from '.';
import { sizeArgType } from '@/common/storybook/argTypes';


const meta: Meta<KMenuProps> = {
  component: KMenu,
  subcomponents: {
    MenuItem: KMenu.Item,
  },
  title: 'Data Display/Menu',
  argTypes: {
    ...sizeArgType,
    width: {
      control: { type: 'number' },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof KMenu>

const Template = (args: KMenuProps) => (
  <KMenu {...args}>
    <KMenu.Item label="복사" shortcut="⌘C"/>
    <KMenu.Item label="붙여넣기" disabled shortcut="⌘V"/>
    <KMenu.Item label="잘라내기" shortcut="⌘X"/>
    <KMenu.Item label="모두선택" shortcut="⌘A"/>
    <KMenu.ItemDivider />
    <KMenu.Item label="더보기" shortcut="⌘E"/>
  </KMenu>
);


const SelectableTemplate = (args: KMenuProps) => {

  const [selected, setSelected] = useState<string | null>('1');
  const onChangeSelected = (val: string) => {
    setSelected(val);
  };
  return (
    <KMenu {...args}>
      <KMenu.Item label="복사" shortcut="⌘C"/>
      <KMenu.Item label="붙여넣기" disabled shortcut="⌘V"/>
      <KMenu.ItemDivider />
      <KMenu.ItemSelectable selected={selected === '1'} label="선택1" onClick={() => onChangeSelected('1')}/>
      <KMenu.ItemSelectable selected={selected === '2'} label="선택2" onClick={() => onChangeSelected('2')}/>
      <KMenu.ItemSelectable selected={selected === '3'} label="선택3" onClick={() => onChangeSelected('3')}/>
      <KMenu.ItemSelectable selected={selected === '4'} label="선택4" disabled onClick={() => onChangeSelected('3')}/>
    </KMenu>
  );
};


export const Default: Story = {
  render: Template,
  args: {
    size: 'medium',
  },
};


export const Selectable: Story = {
  render: SelectableTemplate,
  args: {
    size: 'medium',
  },
};

