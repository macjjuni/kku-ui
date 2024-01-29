import {CSSProperties, ReactNode} from 'react';


const containerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '32px',
    padding: '1.5rem',
    borderRadius: '8px',
    border: '1px solid #d1d1d1',
};

export const Container = ({children}: { children: ReactNode }) => (
    <div style={containerStyle}>
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
export const Item = ({label, children}: { label: string; children: ReactNode }) => (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '20px', width: '100%'}}>
        <h2 style={titleStyle}>{label}</h2>
        <div style={{display: 'flex', alignItems: 'center', gap: '40px'}}>
            {children}
        </div>
    </div>
);
