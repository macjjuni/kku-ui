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
                <KDropHolder {...args} position={'bottom-left'}><KIcon icon={'south_west'}/></KDropHolder>
                <KDropHolder {...args}><KIcon icon={'south'}/></KDropHolder>
                <KDropHolder {...args} position={'bottom-right'}><KIcon icon={'south_east'}/></KDropHolder>
            </center>
            <br/><br/><br/><br/><br/><br/>
            <center style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '120px'}}>
                <KDropHolder {...args} position={'top-left'}>
                    <KIcon icon={'north_west'} />
                </KDropHolder>
                <KDropHolder {...args} position={'top-center'}><KIcon icon={'north'} /></KDropHolder>
                <KDropHolder {...args} position={'top-right'}><KIcon icon={'north_east'} /></KDropHolder>
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

