import { ReactNode } from 'react';
interface Icons {
    [key: string]: ReactNode;
}
declare const kIcons: Icons;
declare const getIcon: (iconName: string) => ReactNode | null;
export { kIcons, getIcon };
