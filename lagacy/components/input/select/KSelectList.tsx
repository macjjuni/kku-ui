import { memo } from 'react';
import { KSelectListProps } from '@/components/input/select/KSelect.interface';


const KSelectList = ({ id, open, items, noDataText, onClick, onFocus, onKeyDown }: KSelectListProps) => {

  return (
    open && (
      <ul id={id} className='k-select__menu-list' data-testid='k-select-list'>
        {items.map((item, idx) => (
          <li key={item.value} role='menuitem' tabIndex={0} onFocus={onFocus}
              onClick={() => { onClick(item); }} onKeyDown={(e) => { onKeyDown(e, item, idx); }}
              className='k-select__menu-list__item'>
            {item.title}
          </li>
        ))}
        {
          items.length === 0 && (
            <li role='menuitem' tabIndex={0} onFocus={onFocus} onClick={() => { onClick(null); }}
                onKeyDown={(e) => { onKeyDown(e, null, -1); }}
                className='k-select__menu-list__item k-select__menu-list__item-no-data'>
              {noDataText}
            </li>
          )
        }
      </ul>
    ));
};

export default memo(KSelectList);
