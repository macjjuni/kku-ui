import type { Meta, StoryObj } from '@storybook/react-vite';
import { KAspectRatio } from './KAspectRatio';

const meta: Meta<typeof KAspectRatio> = {
  title: 'Layout/AspectRatio',
  component: KAspectRatio,
  tags: ['autodocs'],
  argTypes: {
    ratio: {
      control: { type: 'number' },
      description: '가로/세로 비율을 설정합니다. (예: 16/9 = 1.77, 4/3 = 1.33)',
      table: {
        defaultValue: { summary: '1' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof KAspectRatio>;


const imageUrl = 'https://media.istockphoto.com/id/1361394182/ko/%EC%82%AC%EC%A7%84/%EC%9E%AC%EB%AF%B8-%EC%98%81%EA%B5%AD-%EC%A7%A7%EC%9D%80-%EB%A8%B8%EB%A6%AC-%EA%B3%A0%EC%96%91%EC%9D%B4-%EC%B4%88%EC%83%81%ED%99%94-%EB%8A%94-%EC%B6%A9%EA%B2%A9%EB%98%90%EB%8A%94-%EB%86%80%EB%9D%BC%EA%B2%8C-%EC%B0%BE%EA%B3%A0.jpg?s=2048x2048&w=is&k=20&c=pT06EYZ86Jx70uV4YuKv2lX80YFsRFcYq-dqc4yfbMA=';

export const Square: Story = {
  args: {
    ratio: 1,
  },
  render: (args) => (
    <div className="w-[300px] border rounded-md overflow-hidden">
      <KAspectRatio {...args}>
        <img src={imageUrl} alt="Square" className="h-full w-full object-cover" />
      </KAspectRatio>
    </div>
  ),
};

export const Video: Story = {
  args: {
    ratio: 16 / 9,
  },
  render: (args) => (
    <div className="w-[450px] border rounded-md overflow-hidden">
      <KAspectRatio {...args}>
        <img src={imageUrl} alt="Landscape" className="h-full w-full object-cover"/>
      </KAspectRatio>
    </div>
  ),
};

export const Portrait: Story = {
  args: {
    ratio: 3 / 4,
  },
  render: (args) => (
    <div className="w-[300px] border rounded-md overflow-hidden">
      <KAspectRatio {...args}>
        <img src={imageUrl} alt="Portrait" className="h-full w-full object-cover" />
      </KAspectRatio>
    </div>
  ),
};