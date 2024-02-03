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
export const Item = ({label, children, className}: { label: string; children: ReactNode, className?: string }) => (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '20px', width: '100%'}}
        className={className}>
        <h2 style={titleStyle}>{label}</h2>
        <div style={{display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap'}}>
            {children}
        </div>
    </div>
);
