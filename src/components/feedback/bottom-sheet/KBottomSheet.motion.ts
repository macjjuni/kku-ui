import { MotionType } from '@/common/base/base.interface';

const KBottomSheetMotion: MotionType = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 24 },
  transition: { duration: 0.24, ease: 'easeOut' },
};

export default KBottomSheetMotion;