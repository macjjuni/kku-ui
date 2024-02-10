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

    const [largeValue, setLargeValue] = useState('Large');
    const [mediumValue, setMediumValue] = useState('Medium');
    const [smallValue, setSmallValue] = useState('Small');

    const RightAction = useMemo(() => {
        const style: CSSProperties = {fontSize: '12px', textDecoration: 'underline'};
        return <a href={'#'} onClick={(e) => { e.preventDefault();}} style={style}>비밀번호 찾기</a>;
    }, []);

    return (
        <Container>
            <Item label={'Default TextField'}>
                <KTextField {...args} large value={largeValue} placeholder={'Default TextField'} onChange={(v) => {setLargeValue(v);}}/>
                <KTextField medium value={mediumValue} placeholder={'Default TextField'} onChange={(v) => {setMediumValue(v);}}/>
                <KTextField small value={smallValue} placeholder={'Default TextField'} onChange={(v) => {setSmallValue(v);}}/>
            </Item>
            <Item label={'Password / required / right-action'}>
                <KTextField large password required labelDirection={'column'}  label={'비밀번호'} rightAction={RightAction} value={largeValue}
                            onChange={(v) => {setLargeValue(v);}}/>
                <KTextField medium password required column label={'비밀번호'} rightAction={RightAction} value={mediumValue}
                            onChange={(v) => {setMediumValue(v);}}/>
                <KTextField small password required label={'비밀번호'} rightAction={RightAction} value={smallValue}
                            onChange={(v) => {setSmallValue(v);}}/>
            </Item>
            <Item label={'Label - Direction: Column'}>
                <KTextField label={'아이디'} column placeholder={'Label - Direction: Column'} large value={largeValue}
                            onChange={(v) => {setLargeValue(v);}}/>
                <KTextField label={'아이디'} column placeholder={'Label - Direction: Column'} medium value={mediumValue}
                            onChange={(v) => {setMediumValue(v);}}/>
                <KTextField label={'아이디'} column placeholder={'Label - Direction: Column'} small value={smallValue}
                            onChange={(v) => {setSmallValue(v);}}/>
            </Item>
            <Item label={'Label - Direction: Row'}>
                <KTextField label={'아이디'} row placeholder={'Label - Direction: Row'} large value={largeValue}
                            onChange={(v) => {setLargeValue(v);}} rightAction={RightAction}/>
                <KTextField label={'아이디'} labelDirection={'row'} placeholder={'Label - Direction: Row'} medium value={mediumValue}
                            onChange={(v) => {setMediumValue(v);}} rightAction={RightAction}/>
                <KTextField label={'아이디'} row placeholder={'Label - Direction: Row'} small value={smallValue}
                            onChange={(v) => {setSmallValue(v);}}/>
            </Item>
            <Item label={'Placeholder'}>
                <KTextField label={'아이디'} large placeholder={'아이디를 입력해주세요.'} value={''} onChange={(v) => {setLargeValue(v);}}/>
                <KTextField label={'아이디'} medium placeholder={'아이디를 입력해주세요.'} value={''} onChange={(v) => {setMediumValue(v);}}/>
                <KTextField label={'아이디'} small placeholder={'아이디를 입력해주세요.'} value={''} onChange={(v) => {setSmallValue(v);}}/>
            </Item>
            <Item label={'Disabled'}>
                <KTextField label={'아이디'} large value={largeValue} disabled onChange={(v) => {setLargeValue(v);}}/>
                <KTextField label={'아이디'} medium value={mediumValue} disabled onChange={(v) => {setMediumValue(v);}}/>
                <KTextField label={'아이디'} small value={smallValue} disabled onChange={(v) => {setSmallValue(v);}}/>
            </Item>
        </Container>
    );
};

export const Default: Story = {
    render: Template,
    args: {},
};
