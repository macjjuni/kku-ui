import type { Meta, StoryObj } from '@storybook/react-vite';
import { KAccordion, KAccordionProps } from 'src/components';
import { sizeArgType } from 'src/common/storybook/argTypes';


const meta: Meta<KAccordionProps> = {
  component: KAccordion,
  title: 'Data Display/KAccordion',
  argTypes: {
    defaultOpen: {
      control: { type: 'boolean' },
    },
    ...sizeArgType,
    children: {
      description: '컨텐츠 내용을 설정합니다.',
      table: { type: { summary: 'ReactNode' } },
    },
    width: { description: '요소의 width 크기를 설정합니다.', type: 'number' },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof KAccordion>

const Template = (args: KAccordionProps) => (<KAccordion {...args}>{args.children}</KAccordion>);

export const Default: Story = {
  render: Template,
  args: {
    summary: 'Lorem Ipsum',
    children: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
      'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, ' +
      'when an unknown printer took a galley of type and scrambled it to make a type ' +
      'specimen book. It has survived not only five centuries, but also the leap into electronic',
    size: 'medium',
    width: undefined,
  },
};

