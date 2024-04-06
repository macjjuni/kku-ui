import {CSSProperties, ReactNode, memo} from 'react';
import DarkModeButton from './DarkModeButton';

const containerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '24px',
};

const darkContainerStyle: CSSProperties = {...containerStyle, background: '#212121', color: '#fff'};

const YetMemoContainer = ({children, dark}: { children: ReactNode, dark?: boolean }) => (
    <div style={!dark ? containerStyle : darkContainerStyle} className={dark ? 'dark' : ''}>
        <DarkModeButton />
        {children}
    </div>
);

export const Container = memo(YetMemoContainer);

const titleStyle: CSSProperties = {
    display: 'block',
    width: '100%',
    fontSize: '24px',
    fontWeight: '500',
};

const defaultItemStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '20px',
};


const YetMemoItem = ({label, children, className}: { label: string; children: ReactNode, className?: string }) => (
    <div style={defaultItemStyle}
         className={className}>
        <h2 style={titleStyle}>{label}</h2>
        <div style={{borderBottom: '1px solid #d4d4d4', width: '100%', margin: '8px 0 16px'}} />
        <div style={{display: 'flex', alignItems: 'flex-start', gap: '24px', flexWrap: 'wrap'}}>
            {children}
        </div>
    </div>
);

export const Item = memo(YetMemoItem);
