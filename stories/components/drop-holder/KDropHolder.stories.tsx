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
        <>
            <center style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '120px'}}>
                <KDropHolder {...args} position={'bottom-left'}><KIcon icon={'arrow_down_left'} size={32}/></KDropHolder>
                <KDropHolder {...args}><KIcon icon={'arrow_down'} size={32}/></KDropHolder>
                <KDropHolder {...args} position={'bottom-right'}><KIcon icon={'arrow_down_right'} size={32}/></KDropHolder>
            </center>
            <br/><br/><br/><br/><br/><br/>
            <center style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '120px'}}>
                <KDropHolder {...args} position={'top-left'}>
                    <KIcon icon={'arrow_up_left'} size={32}/>
                </KDropHolder>
                <KDropHolder {...args} position={'top-center'}><KIcon icon={'arrow_up'} size={32}/></KDropHolder>
                <KDropHolder {...args} position={'top-right'}><KIcon icon={'arrow_up_right'} size={32}/></KDropHolder>
            </center>
        </>
    );
};

export const Default: Story = {
    render: Template,
    args: {
        children: <KIcon icon={'favorite'} size={'large'}/>,
        content: <><h1>hello world!</h1> <p>this is content</p></>
    },
};

