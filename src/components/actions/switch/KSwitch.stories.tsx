import { useCallback, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { KSwitch, KSwitchProps } from '@/components';
import { disabledArgType, onClickArgType, sizeArgType } from '@/common/storybook/argTypes';


const meta: Meta<typeof KSwitch> = {
  component: KSwitch,
  title: 'Actions/Switch',
  argTypes: {
    ...sizeArgType,
    ...disabledArgType,
    onChange: { description: '값 변경 이벤트를 설정합니다.' },
    ...onClickArgType,
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<KSwitchProps>


const Template = (args: KSwitchProps) => {

  const [value, setValue] = useState(true);

  const onChangeValue = useCallback((val: boolean) => {
    setValue(val);
  }, []);

  return (<KSwitch {...args} value={value} onChange={onChangeValue}/>);
};

export const Default: Story = {
  render: Template,
  args: { size: 'medium', disabled: false },
};