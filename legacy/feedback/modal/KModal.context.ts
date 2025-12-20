import { createContext, useContext } from 'react';
import { KModalContextProps } from './KModal.interface';


export const ModalContext = createContext<KModalContextProps | null>(null);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error('useModal must be used within a ModalProvider');
  return context;
};
