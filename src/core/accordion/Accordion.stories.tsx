import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion, AccordionContent, AccordionProps, AccordionSummary } from './index';


const meta: Meta<AccordionProps> = {
  component: Accordion,
  subcomponents: {
    AccordionSummary,
    AccordionContent,
  },
  argTypes: {
    defaultOpen: {
      control: { type: 'boolean' },
    },
  },
  title: 'Core/Accordion',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Accordion>

const Template = (args: AccordionProps) => (
  <Accordion {...args}>
    <AccordionSummary>
      Lorem Ipsum
    </AccordionSummary>
    <AccordionContent>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
      <p>when an unknown printer took a galley of type and scrambled it to make a type</p>
      <p>specimen book. It has survived not only five centuries, but also the leap into electronic</p>
    </AccordionContent>
  </Accordion>
);

export const Default: Story = {
  render: Template,
  args: {
    defaultOpen: false,
  },
};

