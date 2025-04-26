import { MotionType } from '@/common/base/base.interface';

const KDropHolderMotion: MotionType = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.24, ease: 'easeInOut' },
};


export default KDropHolderMotion;