import type {Meta, StoryObj} from '@storybook/react';
import {Container, Item} from '../common/Container';
import KTextField from '@/components/textfield/KTextField';
import {useState, useMemo, CSSProperties} from 'react';
import {KTextFieldProps} from '@/components/textfield/KTextField.interface';


const meta: Meta<typeof KTextField> = {
    component: KTextField,
    title: 'TextField',
};

export default meta;

type Story = StoryObj<KTextFieldProps>

const Template = (args: KTextFieldProps) => {

    const [largeValue, setLargeValue] = useState('');
    const [mediumValue, setMediumValue] = useState('');
    const [smallValue, setSmallValue] = useState('');

    const RightAction = useMemo(() => {
        const style: CSSProperties = {fontSize: '12px', textDecoration: 'underline'};
        return <a href={'#'} onClick={(e) => { e.preventDefault();}} style={style}>비밀번호 찾기</a>;
    }, []);

    return (
        <Container>
            <Item label={'Default TextField'}>
                <KTextField {...args} large value={largeValue} placeholder={'Large'} onChange={(v) => {setLargeValue(v);}}/>
                <KTextField medium value={mediumValue} placeholder={'Medium'} onChange={(v) => {setMediumValue(v);}}/>
                <KTextField small value={smallValue} placeholder={'Small'} onChange={(v) => {setSmallValue(v);}}/>
            </Item>
            <Item label={'Password / required / right-action'}>
                <KTextField password labelDirection={'column'} label={'비밀번호'} value={largeValue}
                            onChange={(v) => {setLargeValue(v);}}/>
                <KTextField  password required column label={'비밀번호'} value={mediumValue}
                            onChange={(v) => {setMediumValue(v);}}/>
                <KTextField  password required label={'비밀번호'} rightAction={RightAction} value={smallValue}
                            onChange={(v) => {setSmallValue(v);}}/>
            </Item>
            <Item label={'Label(Direction: Column)'}>
                <KTextField label={'Column'} column placeholder={'Column'} large value={largeValue}
                            onChange={(v) => {setLargeValue(v);}}/>
                <KTextField label={'Column'} column placeholder={'Column'} medium value={mediumValue}
                            onChange={(v) => {setMediumValue(v);}}/>
                <KTextField label={'Column'} column placeholder={'Column'} small value={smallValue}
                            onChange={(v) => {setSmallValue(v);}}/>
            </Item>
            <Item label={'Label(Direction: Row)'}>
                <KTextField label={'Row'} row placeholder={'Row'} large value={largeValue}
                            onChange={(v) => {setLargeValue(v);}} rightAction={RightAction}/>
                <KTextField label={'Row'} labelDirection={'row'} placeholder={'Row'} medium value={mediumValue}
                            onChange={(v) => {setMediumValue(v);}} rightAction={RightAction}/>
                <KTextField label={'Row'} row placeholder={'Row'} small value={smallValue}
                            onChange={(v) => {setSmallValue(v);}} maxLength={10}/>
            </Item>
            <Item label={'Disabled'}>
                <KTextField label={'아이디'} large value={'Disabled'} disabled />
                <KTextField label={'아이디'} medium value={'Disabled'} disabled />
                <KTextField label={'아이디'} small value={'Disabled'} disabled />
            </Item>
            <Item label={'Clearable'}>
                <KTextField placeholder={'Clearable'} clearable value={largeValue} onChange={(v) => {setLargeValue(v);}}/>
                <KTextField placeholder={'Clearable'} value={mediumValue}  onChange={(v) => {setMediumValue(v);}}/>
                <KTextField placeholder={'Clearable'} value={smallValue}  onChange={(v) => {setSmallValue(v);}}/>
            </Item>
        </Container>
    );
};

export const Default: Story = {
    render: Template,
    args: {},
};
