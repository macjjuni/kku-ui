import { memo, useCallback } from 'react';
import { KSelectListProps } from '@/components/input/select/KSelect.interface';
import { KIcon } from '@/components';


const SelectList = ({ ...restProp }: KSelectListProps) => {

  // region [Hooks]

  const { value, items, noDataText, onClick, onFocus, onKeyDown } = { ...restProp };

  const rootClass = useCallback((val: string) => {

    const clazz = ['k-select__list__item'];

    if (value === val) { clazz.push('k-select__list__item--active') }

    return clazz.join(' ');
  }, [value, items]);

  // endregion


  return (
    <>
      {
        items.map((item, idx) => (
          <li key={item.value} className={rootClass(item.value)} role='menuitem' tabIndex={0} onFocus={onFocus}
              onClick={() => { onClick(item); }} onKeyDown={(e) => { onKeyDown(e, item, idx); }}>
            { value === item.value && (<KIcon icon='check' size={14} className='select__list__item--check-icon'/>) }
            <span className='k-select__list__item__text'>{item.label}</span>
          </li>
        ))
      }
      {
        items.length === 0 && (
          <li role='menuitem' tabIndex={0} className='k-select__list__item k-select__list__item--no-data'
              onFocus={onFocus} onClick={() => { onClick(null); }}
              onKeyDown={(e) => { onKeyDown(e, null, -1); }}>
            <span className='k-select__list__item__text'>{noDataText}</span>
          </li>
        )
      }
    </>
  );
};

const KSelectList = memo(SelectList);
KSelectList.displayName = 'KSelectList';
KSelectList.displayName = 'KSelectList';

export default KSelectList;
