import type {Meta, StoryObj} from '@storybook/react';
import { KAccordionProps, KAccordion, KAccordionSizes } from '../../../src/components';
import { baseArgTyp } from '../common/argTypes';

const meta: Meta<KAccordionProps> = {
    component: KAccordion,
    title: 'Components/Accordion',
    argTypes: {
        size: {description: '크기를 설정합니다.', defaultValue: {summary: 'medium'}, control: { type: 'radio' }, options: Object.keys(KAccordionSizes)},
        width: {description: 'width 속성을 설정합니다.', defaultValue: {summary: 'undefined'}, type: 'number' },
        ...baseArgTyp
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
            'specimen book. It has survived not only five centuries, but also the leap into electronic' +
            ' typesetting, remaining essentially unchanged. It was popularised in the 1960s with ' +
            'the release of Letraset sheets containing Lorem Ipsum passages, and more recently with ' +
            'desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        size: 'medium',
        width: undefined,
    },
};

