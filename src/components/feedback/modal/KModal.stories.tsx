import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { KButton, KModal, KModalProps } from '@/components';


const meta: Meta<KModalProps> = {
  component: KModal,
  title: 'Feedbacks/Modal',
  argTypes: {
    size: {
      description: '모달 사이즈 속성을 설정합니다.',
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
    title: { description: '모달 제목을 설정합니다.', control: { type: 'text' } },
    content: { description: '모달 컨텐츠를 설정합니다.', type: 'function' },
    footer: { description: '모달 푸터 컨텐츠를 설정합니다.', type: 'function' },
    isOverlay: { description: '오버레이 여부를 설정합니다.', type: 'boolean', defaultValue: { summary: true } },
    overlayOpacity: { description: '오버레이 불투명도 설정합니다.', type: 'number', defaultValue: { summary: 0.48 } },
    overlayClosable: { description: '오버레이 클릭시 모달 종료 여부를 설정합니다.', type: 'boolean', defaultValue: { summary: false } },
    animation: {
      description: '모달 에니메이션 효과를 설정합니다.',
      type: 'string',
      control: { type: 'radio' },
      options: ['slide', 'fade', 'scale'],
    },
    width: { description: '모달 width 사이즈를 설정합니다.', type: 'number' },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof KModal>

const Template = (args: KModalProps) => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <KButton label="모달 열기" onClick={onOpen} />
      <KModal {...args} isOpen={isOpen} setIsOpen={setIsOpen} footer={(
        <>
          <KButton variant="primary" label="확인" onClick={onClose}/>
          <KButton label="취소" onClick={onClose} />
        </>
      )}/>
    </>
  );
};


export const Default: Story = {
  render: Template, args: {
    title: '제목',
    content: '컨텐츠',
    footer: <></>,
    size: 'small',
    animation: 'slide',
    isOverlay: true,
    overlayOpacity: 0.48,
    overlayClosable: false,
    width: undefined,
  },
};
