import type {Meta, StoryObj} from '@storybook/react';
import {KButton} from '@/components';
import {KButtonProps} from '@/components/button/KButton.interface';

const meta: Meta<KButtonProps> = {
    component: KButton,
    title: 'Button',
};

export default meta;

type Story = StoryObj<typeof KButton>

const Template = (args: KButtonProps) => {


    return (<KButton {...args}/>);
};

export const Default: Story = {
    render: Template,
    args: {
        label: '안녕하세요',
        variant: 'default',
        size: 'medium',
    },
};

