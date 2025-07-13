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
      <KButton label="Open Modal" onClick={onOpen}/>
      <KModal {...args} isOpen={isOpen} setIsOpen={setIsOpen}>
        <KModal.Header>Title</KModal.Header>
        <KModal.Content>
          <p>Content</p>
        </KModal.Content>
        <KModal.Footer>
          <KButton variant="primary" label="Confirm" onClick={onClose}/>
          <KButton label="Cancel" onClick={onClose}/>
        </KModal.Footer>
      </KModal>
    </>
  );
};


export const Default: Story = {
  render: Template, args: {
    size: 'small',
    animation: 'slide',
    isOverlay: true,
    overlayOpacity: 0.48,
    overlayClosable: false,
    escClosable: false,
    width: undefined,
  },
};
