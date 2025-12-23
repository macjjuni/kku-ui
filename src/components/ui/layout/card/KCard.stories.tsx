import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  KCard,
  KCardHeader,
  KCardTitle,
  KCardDescription,
  KCardContent,
  KCardFooter,
} from './KCard';
import { KButton } from '@/components'; // 기존에 만든 버튼이 있다고 가정

const meta: Meta<typeof KCard> = {
  title: 'Layout/Card',
  component: KCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof KCard>;

export const Default: Story = {
  render: () => (
    <KCard className="w-[350px]">
      <KCardHeader>
        <KCardTitle>카드 제목</KCardTitle>
        <KCardDescription>카드의 상세 설명을 여기에 적습니다.</KCardDescription>
      </KCardHeader>
      <KCardContent>
        <div className="grid w-full items-center gap-4">
          <p className="text-sm">카드 본문 내용이 들어가는 영역입니다.</p>
        </div>
      </KCardContent>
      <KCardFooter className="flex justify-between">
        <KButton variant="outline">취소</KButton>
        <KButton>확인</KButton>
      </KCardFooter>
    </KCard>
  ),
};

export const ContentOnly: Story = {
  render: () => (
    <KCard className="w-[350px]">
      <KCardContent className="pt-6">
        패딩이 적용된 본문 전용 카드입니다.
      </KCardContent>
    </KCard>
  ),
};