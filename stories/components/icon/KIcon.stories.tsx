import type { Meta, StoryObj } from '@storybook/react';
import { KIconProps, KIconSizeList, KIcon } from '@/components';
import { kIcons } from '@/common/icons/icons';
import { baseArgTyp, colorArgType, disabledArgType } from '../common/argTypes';

const ICON_LIST = Object.keys(kIcons);

const meta: Meta<KIconProps> = {
  component: KIcon,
  title: 'Foundations/Icon',
  argTypes: {
    icon: {
      description: '아이콘 형태를 설정합니다.',
      control: { type: 'select' },
      options: ICON_LIST,
    },
    size: {
      description: '크기를 설정합니다.',
      defaultValue: { summary: KIconSizeList[1] },
      control: { type: 'radio' },
      options: KIconSizeList,
    },
    ...colorArgType,
    ...disabledArgType,
    onClick: { description: '아이콘 클릭 이벤트를 설정합니다.', type: 'function' },
    ...baseArgTyp,
  },
  tags: ['autodocs'],
};

export default meta;


type Story = StoryObj<typeof KIcon>

const Template = (args: KIconProps) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
      {
        ICON_LIST.map((iconName) => (
          <KIcon key={iconName} {...args} icon={iconName} size={40}/>
        ))
      }
    </div>
  );
};

export const Default: Story = {
  args: { icon: ICON_LIST[30], size: 'medium' },
};
export const AllIcons: Story = {
  render: Template,
  args: {},
};

