import { MotionType } from '@/common/base/base.interface';

export const KModalMotion: Record<string, MotionType> = {
  fade: {
    initial: { opacity: 0, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
    animate: { opacity: 1, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
    exit: { opacity: 0, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
    transition: { duration: 0.12, ease: 'easeInOut' },
  },
  slide: {
    initial: { opacity: 0, top: 'calc(50% - 8px)', left: '50%', transform: 'translate(-50%, -50%)' },
    animate: { opacity: 1, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
    exit: { opacity: 0, top: 'calc(50% - 8px)', left: '50%', transform: 'translate(-50%, -50%)' },
    transition: { duration: 0.12, ease: 'easeInOut' },
  },
  scale: {
    initial: { opacity: 0, top: '50%', left: '50%', transform: 'translate(-50%, -50%) scale(0.96)' },
    animate: { opacity: 1, top: '50%', left: '50%', transform: 'translate(-50%, -50%) scale(1)' },
    exit: { opacity: 0, top: '50%', left: '50%', transform: 'translate(-50%, -50%) scale(0.96)' },
    transition: { duration: 0.12, ease: 'easeInOut' },
  },
};