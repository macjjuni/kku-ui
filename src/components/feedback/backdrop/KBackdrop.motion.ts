import { MotionType } from '@/common/base/base.interface';

const KBackdropMotion: MotionType = {
  initial: { opacity: 0 },
  animate: { opacity: 0.48 },
  exit: { opacity: 0 },
  transition: { duration: 0.24, ease: 'easeInOut' },
};

export default KBackdropMotion;