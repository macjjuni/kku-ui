import { SwitchProps } from '@/core/switch/Switch.interface';
import { SizeType } from '@/common/base/base.interface';


export interface KSwitchProps extends SwitchProps {
  size?: SizeType
}


export interface KSwitchRefs {
  toggle: () => void;
}
