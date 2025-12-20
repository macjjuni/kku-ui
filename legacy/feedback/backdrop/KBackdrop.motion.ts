import { MotionType } from 'src/common/base/base.interface';

const KBackdropMotion: MotionType = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.24, ease: 'easeInOut' },
};

export default KBackdropMotion;