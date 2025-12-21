import type { Meta, StoryObj } from "@storybook/react-vite";
import { KSkeleton } from "./KSkeleton";

const meta: Meta<typeof KSkeleton> = {
  title: "Feedback/Skeleton",
  component: KSkeleton,
  tags: ["autodocs"],
  argTypes: {
    circle: {
      control: "boolean",
      description: "스켈레톤을 원형으로 표시할지 여부",
    },
    className: {
      control: "text",
      description: "Tailwind CSS 클래스를 직접 지정하여 크기 및 기타 스타일 제어",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KSkeleton>;

export const Default: Story = {
  args: {
    className: "w-[360px] h-8",
    circle: false,
  },
};

export const Circle: Story = {
  args: {
    className: "h-12 w-12",
    circle: true,
  },
};

export const ProfileCard: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <KSkeleton circle className="h-12 w-12 shrink-0" />
      <div className="flex flex-col gap-2">
        <KSkeleton className="h-4 w-[240px]" />
        <KSkeleton className="h-4 w-[160px]" />
      </div>
    </div>
  ),
  name: "프로필 카드 로딩",
};

export const MixedGallery: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-3">
        <KSkeleton className="h-[125px] w-[250px]" />
        <KSkeleton className="h-4 w-[250px]" />
        <KSkeleton className="h-4 w-[200px]" />
      </div>
      <div className="space-y-3">
        <KSkeleton className="h-[125px] w-[250px]" />
        <KSkeleton className="h-4 w-[250px]" />
        <KSkeleton className="h-4 w-[200px]" />
      </div>
    </div>
  ),
  name: "복합 리스트 로딩",
};

export const ImageCard: Story = {
  render: () => (
    <div className="flex flex-col space-y-3">
      <KSkeleton className="h-40 w-64 rounded-lg" />
      <div className="space-y-2">
        <KSkeleton className="h-4 w-64" />
        <KSkeleton className="h-4 w-48" />
      </div>
    </div>
  ),
  name: "이미지 카드 로딩",
};

export const TextBlock: Story = {
  render: () => (
    <div className="space-y-2">
      <KSkeleton className="h-4 w-full" />
      <KSkeleton className="h-4 w-5/6" />
      <KSkeleton className="h-4 w-4/6" />
      <KSkeleton className="h-4 w-full" />
      <KSkeleton className="h-4 w-3/4" />
    </div>
  ),
  name: "텍스트 블록 로딩",
};