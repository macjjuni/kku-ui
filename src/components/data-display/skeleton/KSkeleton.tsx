import { memo, useMemo } from 'react';
import { KSkeletonProps } from '@/components';


const Skeleton = ({ ...restProps }: KSkeletonProps) => {

  // region [Hooks]

  const { id, className, style } = restProps;
  const { width = '100%', height = 'auto', animation = "pulse", borderRadius } = restProps;
  const { onClick } = restProps;

  // endregion


  // region [Styles]

  const rootClass = useMemo(() => {
    const clazz = ['k-skeleton'];

    if (className) { clazz.push(className); }
    if (animation) { clazz.push(`k-skeleton--${animation}`); }

    return clazz.join(' ');
  }, [className, animation]);

  const rootStyle = useMemo(() => {
    return { ...style, width, height, borderRadius };
  }, [style, width, height, borderRadius]);

  // endregion


  // region [Events]

  // endregion

  return (<div id={id} className={rootClass} style={rootStyle} aria-hidden="true" onClick={onClick} />);
};

const KSkeleton = memo(Skeleton);
KSkeleton.displayName = 'KSkeleton';
Skeleton.displayName = 'KSkeleton';

export default KSkeleton;
