import type { Meta, StoryObj } from '@storybook/react-vite';
import { KButton, KButtonGroup } from '@/components';

const meta: Meta<typeof KButtonGroup> = {
  title: 'Actions/ButtonGroup',
  component: KButtonGroup,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      description: '그룹 내 모든 버튼의 기본 variant를 설정합니다.',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'icon'],
      description: '그룹 내 모든 버튼의 기본 size를 설정합니다.',
    },
    width: {
      control: 'select',
      options: ['default', 'full', 240],
      description: '그룹 내 모든 버튼의 기본 size를 설정합니다.',
    },
    vertical: {
      control: 'boolean',
      description: '버튼을 수직으로 배치합니다.',
    },
    disabled: {
      control: 'boolean',
      description: '그룹 내 모든 버튼을 비활성화합니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof KButtonGroup>;


export const Default: Story = {
  args: {
    variant: 'outline',
    size: 'md',
  },
  render: (args) => (
    <KButtonGroup {...args}>
      <KButton>개인별</KButton>
      <KButton>맞춤</KButton>
      <KButton>설정</KButton>
    </KButtonGroup>
  ),
};

export const Vertical: Story = {
  args: {
    variant: 'primary',
    vertical: true,
  },
  render: (args) => (
    <KButtonGroup {...args}>
      <KButton>프로필 수정</KButton>
      <KButton>비밀번호 변경</KButton>
      <KButton>계정 삭제</KButton>
    </KButtonGroup>
  ),
};

export const IconGroup: Story = {
  args: {
    variant: 'outline',
    size: 'icon',
  },
  render: (args) => (
    <KButtonGroup {...args}>
      <KButton>A</KButton>
      <KButton>B</KButton>
      <KButton>C</KButton>
    </KButtonGroup>
  ),
};