import { MotionType } from '@/common/base/base.interface';

const KSelectMotion: MotionType = {
  initial: { y: 0, opacity: 0 },
  animate: { y: 8, opacity: 1 },
  exit: { y: 0, opacity: 0 },
  transition: { duration: 0.24, ease: 'easeInOut' },
};

export default KSelectMotion;