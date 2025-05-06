import { KBaseProp, KSizeProp } from '@/common/base/base.interface';


export interface KSwitchProps extends KBaseProp, KSizeProp {

  value: boolean;
  onChange: (value: boolean) => void;
  onClick?: () => void;

  disabled?: boolean;
}


export interface KSwitchRefs {
  toggle: () => void;
}
