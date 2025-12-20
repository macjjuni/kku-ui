import { SwitchProps } from 'src/core/switch/Switch.interface';
import { SizeType } from 'src/common/base/base.interface';


export interface KSwitchProps extends SwitchProps {
  size?: SizeType
}


export interface KSwitchRefs {
  toggle: () => void;
}
