import { MotionType } from '@/common/base/base.interface';

const KBottomSheetMotion: MotionType = {
  initial: { opacity: 0, y: '100%' },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: '100%' },
  transition: { duration: 0.16, ease: 'easeInOut' },
};

export default KBottomSheetMotion;