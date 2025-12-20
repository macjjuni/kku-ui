import { createContext, useContext } from 'react';
import { KDropdownContextProps } from './KDropdown.interface';


export const KDropdownContext = createContext<KDropdownContextProps | null>(null);

export function useKDropdownContext(): KDropdownContextProps {
  const ctx = useContext(KDropdownContext);
  if (!ctx) throw new Error('KDropdown must be used within <KDropdown>');
  return ctx;
}
