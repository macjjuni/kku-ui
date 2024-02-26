import type {Meta, StoryObj} from '@storybook/react';
import {KDropHolder, KIcon} from '@/components';
import {KDropHolderProps} from '@/components';

const meta: Meta<KDropHolderProps> = {
    component: KDropHolder,
    title: 'Components/DropHolder',
    argTypes: {

    }
};

export default meta;

type Story = StoryObj<typeof KDropHolder>

const Template = (args: KDropHolderProps) => {
    return (
        <center style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '120px'}}>
            <KDropHolder {...args} position={'bottom-left'} />
            <KDropHolder {...args} />
            <KDropHolder {...args} position={'bottom-right'} />
        </center>
    );
};

export const Default: Story = {
    render: Template,
    args: {
        children: <KIcon icon={'favorite'} size={'large'} />,
        content: <><h1>hello world!</h1> <p>this is content</p></>
    },
};

