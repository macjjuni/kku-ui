import { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { KBackdrop, KBackdropProps, KButton } from 'src/components';

const meta: Meta<KBackdropProps> = {
  component: KBackdrop,
  title: 'Feedbacks/Backdrop',
  argTypes: {
    isOpen: { description: '렌더링 여부를 설정합니다.', type: 'boolean' },
    opacity: { description: '불투명도를 설정합니다.', type: 'number' },
    zIndex: { description: 'z-index 값을 설정합니다.', type: 'number' },
    onClick: { description: '클릭 이벤트를 설정합니다', type: 'function' },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof KBackdrop>

const Template = (args: KBackdropProps) => {
  const [open, setOpen] = useState(args.isOpen);

  const onClickButton = () => {
    setOpen((prev) => !prev);
  };

  const onClickBackdrop = () => {
    setOpen(false);
  };

  useEffect(() => {
    setOpen(args.isOpen);
  }, [args.isOpen]);

  return (
    <>
      <KButton label="열기" onClick={onClickButton}/>
      <KBackdrop isOpen={open} opacity={args.opacity} onClick={onClickBackdrop}/>
    </>
  );
};

export const Default: Story = {
  render: Template,
  args: {
    isOpen: false,
    zIndex: undefined,
    onClick: () => {
    },
  },
};

