import { useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { KBottomSheet, KBottomSheetProps, KButton } from '@/components';
import { KBottomSheetRefs } from '@/components/feedback/bottom-sheet/KBottomSheet.interface';

const meta: Meta<KBottomSheetProps> = {
  component: KBottomSheet,
  title: 'Feedbacks/BottomSheet',
  argTypes: {
    defaultOpen: { description: '초기 렌더링 여부를 설정합니다.', type: 'boolean' },
    height: {
      description: '요소 높이를 설정합니다.',
      table: {
        type: { summary: 'string | number' },
      },
    },
    overlayClosable: {
      description: '배경 요소 클릭 시 BottomSheet 종료 이벤트 실행 여부를 설정합니다.',
      type: 'boolean',
    },
    overlayOpacity: {
      description: '배경 요소 Opacity 스타일을 설정합니다.',
      type: 'number',
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof KBottomSheet>

const Template = (args: KBottomSheetProps) => {

  const bottomSheetRef = useRef<KBottomSheetRefs>(null);

  const onClickButton = () => {
    bottomSheetRef.current?.open();
  };

  return (
    <>
      <KButton label="열기" onClick={onClickButton}/>
      <KBottomSheet ref={bottomSheetRef} {...args}>
        Bottom Sheet Body!
      </KBottomSheet>
    </>
  );
};

export const Default: Story = {
  render: Template,
  args: {
    defaultOpen: false,
    height: 300,
    overlayClosable: true,
    overlayOpacity: undefined,
  },
};

