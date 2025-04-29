import type { Meta, StoryObj } from '@storybook/react';
import { KDropHolder, KIcon } from '@/components';
import { KDropHolderProps } from '@/components';

const meta: Meta<KDropHolderProps> = {
  component: KDropHolder,
  title: 'Components/DropHolder',
  argTypes: {},
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof KDropHolder>

const Template = (args: KDropHolderProps) => {
  return (
    <center>
    <div style={{ display: 'flex', flexDirection: 'column', width: '400px', gap: '40px'}}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '80px' }}>
        <KDropHolder {...args} position={'bottom-start'}><KIcon icon={'arrow_down_left'} size={32}/></KDropHolder>
        <KDropHolder {...args} position={'bottom'}><KIcon icon={'arrow_down'} size={32}/></KDropHolder>
        <KDropHolder {...args} position={'bottom-end'}><KIcon icon={'arrow_down_right'} size={32}/></KDropHolder>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '48px' }}>
          <KDropHolder {...args} position={'right-start'}><KIcon icon={'arrow_right'} size={32}/></KDropHolder>
          <KDropHolder {...args} position={'right'}><KIcon icon={'arrow_right'} size={32}/></KDropHolder>
          <KDropHolder {...args} position={'right-end'}><KIcon icon={'arrow_right'} size={32}/></KDropHolder>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '48px' }}>
          <KDropHolder {...args} position={'left-start'}><KIcon icon={'arrow_left'} size={32}/></KDropHolder>
          <KDropHolder {...args} position={'left'}><KIcon icon={'arrow_left'} size={32}/></KDropHolder>
          <KDropHolder {...args} position={'left-end'}><KIcon icon={'arrow_left'} size={32}/></KDropHolder>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '80px' }}>
        <KDropHolder {...args} position={'top-start'}>
          <KIcon icon={'arrow_up_left'} size={32}/>
        </KDropHolder>
        <KDropHolder {...args} position={'top'}><KIcon icon={'arrow_up'} size={32}/></KDropHolder>
        <KDropHolder {...args} position={'top-end'}><KIcon icon={'arrow_up_right'} size={32}/></KDropHolder>
      </div>
    </div>
    </center>
  );
};

export const Default: Story = {
  render: Template,
  args: {
    content: (
      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.88)',
                    borderRadius: '3px',
                    color: '#fff',
                    padding: '12px'}}>
        <p>This is a content</p>
      </div>
    ),
  },
};

