import { forwardRef, memo, Ref, useMemo } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { MotionComponentProps } from '@/common/component/motion/Motion.interface'


const MotionComponent = forwardRef(({ ...restProp }: MotionComponentProps, ref: Ref<HTMLElement>) => {

  // region [Hooks]

  const { id, className, style } = { ...restProp };
  const { element = 'div', isOpen, children, ...motionProps } = { ...restProp };
  const { role, ariaDescribedby } = { ...restProp };
  const MotionElement = motion(element)

  const rootClass = useMemo(() => {

    const clazz = [];

    if (className) { clazz.push(className); }

    return clazz.join(' ');
  }, [className])

  // endregion


  return (
    <AnimatePresence>
      {isOpen && (
        <MotionElement ref={ref} id={id} className={rootClass} role={role} style={style} {...motionProps}
                       aria-describedby={ariaDescribedby} aria-hidden={isOpen}>
          {children}
        </MotionElement>
      )}
    </AnimatePresence>
  )
})

const Motion = memo(MotionComponent);

MotionComponent.displayName = 'Motion'
Motion.displayName = 'Motion'

export default Motion;
