import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { KMenu, KMenuProps } from './index';
import { sizeArgType } from 'src/common/storybook/argTypes';


const meta: Meta<KMenuProps> = {
  component: KMenu,
  subcomponents: {
    MenuItem: KMenu.Item,
    MenuItemSelectable: KMenu.ItemSelectable,
    MenuItemDivider: KMenu.ItemDivider,
  },
  title: 'Data Display/Menu',
  argTypes: {
    ...sizeArgType,
    width: {
      description: '요소의 width 크기를 설정합니다.',
      control: { type: 'number' },
      table: { type: { summary: 'number | string' } },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof KMenu>

const Template = (args: KMenuProps) => (
  <KMenu {...args}>
    <KMenu.Item label="Copy" shortcut="⌘C"/>
    <KMenu.Item label="Paste" disabled shortcut="⌘V"/>
    <KMenu.Item label="Cut" shortcut="⌘X"/>
    <KMenu.Item label="Select All" shortcut="⌘A"/>
    <KMenu.ItemDivider />
    <KMenu.Item label="More" shortcut="⌘M"/>
  </KMenu>
);


const SelectableTemplate = (args: KMenuProps) => {

  const [selected, setSelected] = useState<string | null>('1');
  const onChangeSelected = (val: string) => {
    setSelected(val);
  };
  return (
    <KMenu {...args}>
      <KMenu.Item label="Copy" shortcut="⌘C"/>
      <KMenu.Item label="Paste" disabled shortcut="⌘V"/>
      <KMenu.ItemDivider />
      <KMenu.ItemSelectable selected={selected === '1'} label="Select1" onClick={() => onChangeSelected('1')}/>
      <KMenu.ItemSelectable selected={selected === '2'} label="Select2" onClick={() => onChangeSelected('2')}/>
      <KMenu.ItemSelectable selected={selected === '3'} label="Select3" onClick={() => onChangeSelected('3')}/>
      <KMenu.ItemSelectable selected={selected === '4'} label="Select4" disabled onClick={() => onChangeSelected('3')}/>
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

