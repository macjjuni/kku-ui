import type { Meta, StoryObj } from '@storybook/react';
import { KDropHolder, KDropHolderProps, KIcon } from '@/components';

const meta: Meta<KDropHolderProps> = {
  component: KDropHolder,
  title: 'Actions/DropHolder',
  argTypes: {
    children: { description: '내부에 표시할 콘텐츠를 정의합니다.', type: 'function' },
    content: { description: '트리거 이후 표시될 컨텐츠를 정의합니다.', type: 'function' },
    offset: { description: '컨텐츠 위치를 조정합니다.' },
    openDelay: { description: '보이기까지 지연 시간을 밀리초 단위로 설정합니다.', type: 'number' },
    closeDelay: { description: '숨기기까지 지연 시간을 밀리초 단위로 설정합니다.', type: 'number' },
    trigger: {
      description: '사용자 인터랙션 방식 (hover 또는 click)을 지정합니다.',
      control: { type: 'radio' },
      options: ['hover', 'click'],
    },
    contentWidth: { description: '컨텐츠 width 를 고정으로 설정합니다.', type: 'number' },
    onClick: { description: 'onClick 이벤트를 설정합니다.', type: 'function' },
    onHover: { description: 'onHover 이벤트를 설정합니다.', type: 'function' },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof KDropHolder>

const Template = (args: KDropHolderProps) => {
  return (
    <center>
      <div style={{ display: 'flex', flexDirection: 'column', width: '400px', gap: '40px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '80px' }}>
          <KDropHolder {...args} position="bottom-start"><KIcon icon="arrow_down_left" size={20}/></KDropHolder>
          <KDropHolder {...args} position="bottom"><KIcon icon="arrow_down" size={20}/></KDropHolder>
          <KDropHolder {...args} position="bottom-end"><KIcon icon="arrow_down_right" size={20}/></KDropHolder>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '80px' }}>
            <KDropHolder {...args} position="right-start"><KIcon icon="arrow_right" size={20}/></KDropHolder>
            <KDropHolder {...args} position="right"><KIcon icon="arrow_right" size={20}/></KDropHolder>
            <KDropHolder {...args} position="right-end"><KIcon icon="arrow_right" size={20}/></KDropHolder>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '80px' }}>
            <KDropHolder {...args} position="left-start"><KIcon icon="arrow_left" size={20}/></KDropHolder>
            <KDropHolder {...args} position="left"><KIcon icon="arrow_left" size={20}/></KDropHolder>
            <KDropHolder {...args} position="left-end"><KIcon icon="arrow_left" size={20}/></KDropHolder>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '80px' }}>
          <KDropHolder {...args} position="top-start">
            <KIcon icon="arrow_up_left" size={20}/>
          </KDropHolder>
          <KDropHolder {...args} position="top"><KIcon icon="arrow_up" size={20}/></KDropHolder>
          <KDropHolder {...args} position="top-end"><KIcon icon="arrow_up_right" size={20}/></KDropHolder>
        </div>
      </div>
    </center>
  );
};

export const Default: Story = {
  render: Template,
  args: {
    children: <></>,
    content: (
      <div style={{
        backgroundColor: 'rgba(0, 0, 0, 0.88)',
        borderRadius: '3px',
        color: '#fff',
        padding: '8px 12px',
      }}>
        <p>This is a content</p>
      </div>
    ),
    offset: { x: 0, y: 0 },
    openDelay: 0,
    closeDelay: 160,
    trigger: 'hover',
    contentWidth: undefined,
    onClick: undefined,
    onHover: undefined,
  },
};