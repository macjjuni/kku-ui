import type { Meta, StoryObj } from '@storybook/react';
import { KIcon } from '@/components/icon';
import { KIconProps } from '@/components/icon/KIcon.interface';
import { kIcons } from '@/common/icons/icons';
import { baseArgTyp } from '../common/argTypes';

const ICON_LIST = Object.keys(kIcons);

const meta: Meta<KIconProps> = {
  component: KIcon,
  title: 'Components/Icon',
  argTypes: {
    icon: {
      description: '아이콘 형태를 설정합니다.',
      control: { type: 'select' },
      options: ICON_LIST,
    },
    size: { description: '크기를 설정합니다.' },
    color: { description: '아이콘 색상을 설정합니다.' },
    onClick: { description: '아이콘 클릭 이벤트를 설정합니다.' },
    disabled: { description: '클릭 불가능 스타일을 설정합니다.' },
    ...baseArgTyp
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

