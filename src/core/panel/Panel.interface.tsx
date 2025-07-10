import { HTMLAttributes, ReactNode } from 'react';
import { JSX } from 'react/jsx-runtime';

type RatioString = `${number}/${number}`;

export type ElementFromTag<T extends keyof JSX.IntrinsicElements> =
  T extends 'ul' ? HTMLUListElement :
    T extends 'ol' ? HTMLOListElement :
      T extends 'li' ? HTMLLIElement :
        T extends 'div' ? HTMLDivElement :
          T extends 'p' ? HTMLParagraphElement :
            T extends 'span' ? HTMLSpanElement :
              HTMLElement;


export interface PanelProps<T extends keyof JSX.IntrinsicElements = 'div'>
  extends HTMLAttributes<ElementFromTag<T>> {
  as?: T;
  ratio?: RatioString;
  children?: ReactNode;
}
