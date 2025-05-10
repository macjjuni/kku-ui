import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { KBackdrop, KBackdropProps, KButton } from '@/components';

const meta: Meta<KBackdropProps> = {
  component: KBackdrop,
  title: 'Feedbacks/Backdrop',
  argTypes: {
    open: { description: '렌더링 여부를 설정합니다.', type: 'boolean' },
    opacity: { description: '불투명도를 설정합니다.', type: 'number' },
    zIndex: { description: 'z-index 값을 설정합니다.', type: 'number' },
    onClick: { description: '클릭 이벤트를 설정합니다', type: 'function' },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof KBackdrop>

const Template = (args: KBackdropProps) => {

  const [open, setOpen] = useState(args.open);

  const onClickButton = () => {
    setOpen((prev) => !prev);
  };

  const onClickBackdrop = () => {
    setOpen(false);
  };

  return (
    <>
      <KButton label="Open" onClick={onClickButton}/>
      <KBackdrop open={open} opacity={args.opacity} onClick={onClickBackdrop} />
    </>
  );
};

export const Default: Story = {
  render: Template,
  args: {
    open: false,
    opacity: 0.4,
    zIndex: undefined,
    onClick: () => {},
  },
};

