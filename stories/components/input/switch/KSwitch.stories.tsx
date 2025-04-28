import type { Meta, StoryObj } from '@storybook/react';
import { KSwitch } from '@/components/input/switch';
import { KSwitchProps } from '@/components/input/switch';
import { useCallback, useState } from 'react';
import { baseArgTyp, disabledArgType, onClickArgType, sizeArgType } from '../../common/argTypes';


const meta: Meta<typeof KSwitch> = {
  component: KSwitch,
  title: 'Input/Switch',
  argTypes: {
    ...sizeArgType,
    ...disabledArgType,
    ...baseArgTyp,
    onChange: {description: '값 변경 이벤트를 설정합니다.', defaultValue: {summary: () => {}}},
    ...onClickArgType,
  },
};

export default meta;

type Story = StoryObj<KSwitchProps>


const Template = (args: KSwitchProps) => {

  const [value, setValue] = useState(true);

  const onChangeValue = useCallback((value: boolean) => {
    setValue(value);
  }, []);

  return (<KSwitch {...args} value={value} onChange={onChangeValue}/>);
};

export const Default: Story = {
  render: Template,
  args: { size: 'medium', disabled: false },
};