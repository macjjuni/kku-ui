import { MotionType } from '@/common/base/base.interface';

export const KModalMotion: Record<string, MotionType> = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.16, ease: 'easeInOut' },
  },
  slide: {
    initial: { opacity: 0, y: -4 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -4 },
    transition: { duration: 0.16, ease: 'easeInOut' },
  },
};