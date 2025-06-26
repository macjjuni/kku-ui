import { ElementType, forwardRef, memo, ReactElement, Ref } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { CTransitionProps, MotionTag } from './Transition.interface';

const Transition = <Tag extends MotionTag = 'div'>(
  props: CTransitionProps<Tag>,
  ref: Ref<HTMLElementTagNameMap[Tag]>,
) => {
  const { isOpen, as = 'div' as Tag, children, ...restProps } = props;
  const Component = motion[as] as ElementType;

  return (
    <AnimatePresence>
      {isOpen && (
        <Component ref={ref} {...restProps}>
          {children}
        </Component>
      )}
    </AnimatePresence>
  );
};

const ForwardedTransition = forwardRef(Transition) as <Tag extends MotionTag = 'div'>(
  // eslint-disable-next-line no-use-before-define
  props: CTransitionProps<Tag> & { ref?: Ref<HTMLElementTagNameMap[Tag]> },
) => ReactElement | null;

const MemoizedTransition = memo(ForwardedTransition);
MemoizedTransition.displayName = 'CTransition';

export default MemoizedTransition;