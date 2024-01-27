import {ReactNode} from 'react';


export const Container = ({children}: { children: ReactNode }) => (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '32px'}}>
        {children}
    </div>
);

export const Item = ({label, children}: { label: string; children: ReactNode }) => (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px'}}>
        <h2 style={{fontSize: '20px', fontWeight: '600'}}>{label}</h2>
        <div>{children}</div>
    </div>
);
