import {CSSProperties, ReactNode} from 'react';

const containerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderRadius: '8px',
    border: '1px solid #d1d1d1',
};

const darkContainerStyle: CSSProperties = {
    ...containerStyle,
    background: '#212121',
    color: '#fff',
    marginTop: '16px',
};

export const Container = ({children}: { children: ReactNode }) => (
    <div style={containerStyle}>
        {children}
    </div>
);

export const DarkContainer = ({children}: { children: ReactNode }) => (
    <div style={darkContainerStyle}>
        {children}
    </div>
);

const titleStyle: CSSProperties = {
    display: 'block',
    width: '100%',
    fontSize: '18px',
    fontWeight: '500',
    padding:'0 0 16px 0',
    borderBottom: '1px solid #d1d1d1',
}

const defaultItemStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '20px',
    width: '100%',
    padding: '16px'
}


export const Item = ({label, children, className}: { label: string; children: ReactNode, className?: string }) => (
    <div style={defaultItemStyle}
        className={className}>
        <h2 style={titleStyle}>{label}</h2>
        <div style={{display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap'}}>
            {children}
        </div>
    </div>
);
