import { MotionType } from '@/common/base/base.interface';

export const KModalMotion: Record<string, MotionType> = {
  fade: {
    initial: { opacity: 0, transform: 'translate(-50%, -50%)' },
    animate: { opacity: 1, transform: 'translate(-50%, -50%)' },
    exit: { opacity: 0, transform: 'translate(-50%, -50%)' },
    transition: { duration: 0.16, ease: 'easeInOut' },
  },
  slide: {
    initial: { opacity: 0, y: -4, transform: 'translate(-50%, -50%)' },
    animate: { opacity: 1, y: 0, transform: 'translate(-50%, -50%)' },
    exit: { opacity: 0, y: -4, transform: 'translate(-50%, -50%)' },
    transition: { duration: 0.16, ease: 'easeInOut' },
  },
};