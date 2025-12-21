import type { Meta, StoryObj } from '@storybook/react-vite';
import { KIcon, ICON_SIZES } from './KIcon';
import { kIcons } from '@/common/icons/icons';

const ICON_LIST = Object.keys(kIcons);

const meta: Meta<typeof KIcon> = {
  title: 'Foundations/KIcon',
  component: KIcon,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      description: '표시할 아이콘의 이름을 선택합니다.',
      control: 'select',
      options: ICON_LIST,
    },
    size: {
      description: '아이콘의 크기를 조절합니다. (미리 정의된 문자열 혹은 숫자 px)',
      control: 'radio',
      options: ICON_SIZES,
    },
    color: {
      description: '아이콘의 색상을 설정합니다.',
      control: 'color',
    },
    disabled: {
      description: '비활성화 상태를 설정합니다.',
      control: 'boolean',
    },
    onClick: {
      description: '클릭 시 실행될 함수를 설정합니다.',
      action: 'clicked',
    },
  },
};

export default meta;

type Story = StoryObj<typeof KIcon>;

/**
 * 기본 아이콘 형태입니다.
 */
export const Default: Story = {
  args: {
    icon: ICON_LIST[0] || 'check',
    size: 'medium',
  },
};

/**
 * 숫자를 이용한 커스텀 사이즈 적용 예시입니다.
 */
export const CustomSize: Story = {
  args: {
    icon: ICON_LIST[0] || 'check',
    size: 48,
    color: '#3b82f6',
  },
};

/**
 * 프로젝트 내의 모든 아이콘 목록을 확인합니다.
 */
export const AllIcons: Story = {
  args: {
    size: 'medium',
  },
  render: (args) => (
    <div className="flex flex-wrap gap-6 items-center justify-start p-4 border rounded-lg bg-card">
      {ICON_LIST.map((iconName) => (
        <div key={iconName} className="flex flex-col items-center gap-2 w-20 overflow-hidden">
          <KIcon {...args} icon={iconName} />
          <span className="text-[10px] text-muted-foreground truncate w-full text-center">
            {iconName}
          </span>
        </div>
      ))}
    </div>
  ),
};