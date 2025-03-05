import { memo, useCallback, useMemo } from 'react';
import { KLoadingBarProps } from '@/components/loading/KLoadingBar.interface';
import '@/styles/components/loading/KLoading.scss';

const KLoadingBar = ({ ...restProps }: KLoadingBarProps) => {

  // region [Hooks]

  const {
    id, className, style, value = 0,
    width = '100%', gap = 4, blockHeight = 24, barColor = '#000', blankColor = '#fff',
    borderWidth = 2, padding = 2, totalBlocks = 10,
  } = { ...restProps };

  if (value > 100) {
    throw Error(`Invalid value. ${value}`);
  }

  const filledBlocks = useMemo(() => Math.floor(value / (100 / totalBlocks)), [value]); // 가득 찬 칸 개수
  const flashingBlock = useMemo(() => (filledBlocks < totalBlocks ? filledBlocks : -1), [filledBlocks]); // 깜빡이는 칸

  // endregion


  // region [Styles]

  const rootWidth = useMemo(() => {
    if (typeof width === 'string') {
      return width;
    }
    return `${width}px`;
  }, [width]);

  const rootClass = useMemo(() => {
    const clazz = ['k-loading'];
    if (className) {
      clazz.push(className);
    }
    return clazz.join(' ');
  }, [className]);

  const rootStyle = useMemo(() => {
    const styles = {
      ...style, width: rootWidth, height: `${blockHeight}px`, padding: `${padding}px`, gap: `${gap}px`,
    };
    if (borderWidth) {
      styles.borderWidth = borderWidth;
    }

    return styles;
  }, [style, rootWidth, blockHeight, borderWidth, gap, padding]);

  const barClass = useCallback((idx: number, flashingCount: number) => {
    const clazz = [];
    const isFilled = idx <= flashingCount;
    const flag = isFilled && idx <= flashingCount ? 'filled' : 'blank';

    if (flashingCount === idx) { clazz.push('count'); }
    clazz.push(flag);

    return clazz.join(' ');
  }, []);

  // endregion


  return (
    <div id={id} className={rootClass} style={rootStyle}>
      {[...Array(totalBlocks)].map((_, i) => (
        <div key={_} style={{ backgroundColor: i <= filledBlocks ? barColor : blankColor }}
             className={`k-loading__block ${barClass(i, flashingBlock)}`}/>
      ))}
    </div>
  );
};

export default memo(KLoadingBar);
