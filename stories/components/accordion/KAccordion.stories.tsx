import type {Meta, StoryObj} from '@storybook/react';
import {KAccordionProps, KAccordion} from '../../../src/components';

const meta: Meta<KAccordionProps> = {
    component: KAccordion,
    title: 'Components/Accordion',
    argTypes: {
        size: {description: '크기를 설정합니다.', defaultValue: {summary: 'medium'}},
        id: {description: 'id 속성을 설정합니다.', defaultValue: {summary: 'undefined'}},
        className: {description: 'class 속성을 설정합니다.', defaultValue: {summary: 'undefined'}},
        width: {description: 'width 속성을 설정합니다.', defaultValue: {summary: 'undefined'}},
        style: {description: 'style 속성을 설정합니다.', defaultValue: {summary: 'undefined'}},
    },
};

export default meta;

type Story = StoryObj<typeof KAccordion>

const Template = (args: KAccordionProps) => {


    return (
        <>
            <KAccordion {...args} />
        </>
    );
};

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
    },
};

