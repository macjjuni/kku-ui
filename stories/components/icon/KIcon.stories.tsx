import type {Meta, StoryObj} from '@storybook/react';
import {Container, Item} from '../common/Container';
import {KIcon} from '@/components/icon';
import {KIconProps} from '@/components/icon/KIcon.interface';

const meta: Meta<KIconProps> = {
    component: KIcon,
    title: 'Icon',
};

export default meta;

type Story = StoryObj<typeof KIcon>

const Template = (args: KIconProps) => {
    return (
        <Container>
            <Item label={'Default Button'}>
                <KIcon {...args} icon={'play_circle'} size={'large'} />
                <KIcon {...args} icon={'play_circle'} size={'medium'} />
                <KIcon {...args} icon={'play_circle'} size={'small'} />
            </Item>
            <Item label={'Color Button'}>
                <KIcon {...args} icon={'play_circle'} size={'large'} color={'orange'} />
                <KIcon {...args} icon={'play_circle'} size={'medium'} color={'skyblue'} />
                <KIcon {...args} icon={'play_circle'} size={'small'} color={'violet'} />
            </Item>
            <Item label={'Custom Size Button'}>
                <KIcon {...args} icon={'play_circle'} size={60} color={'blue'} />
                <KIcon {...args} icon={'play_circle'} size={72} color={'skyblue'} />
                <KIcon {...args} icon={'play_circle'} size={120} color={'violet'} />
            </Item>
            <Item label={'Clickable Button'}>
                <KIcon {...args} icon={'search'} size={60} color={'pink'} clickable />
                <KIcon {...args} icon={'search'} size={72} color={'skyblue'} clickable />
                <KIcon {...args} icon={'search'} size={120} color={'violet'} clickable />
            </Item>
            <Item label={'Disabled Button'}>
                <KIcon {...args} icon={'search'} size={60} color={'pink'} disabled />
                <KIcon {...args} icon={'search'} size={72} color={'skyblue'} disabled />
                <KIcon {...args} icon={'search'} size={120} color={'violet'} disabled />
            </Item>
        </Container>
    );
};

export const Default: Story = {
    render: Template,
    args: {},
};

