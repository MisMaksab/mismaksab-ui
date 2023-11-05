import React from 'react'
import cn from 'classnames'
import { LayoutProp } from '../LayoutProp';
import { discountCN, small, discountPercentage, discountImage, img, expandedCN } from './styles';
import { MobileCN } from 'styles';

interface GoodCardDiscountProps extends LayoutProp {
  discount: number;
  image: string|null;
  expanded?: boolean;
  layout: 'mobile'|'desktop';
}

export function GoodCardDiscount({discount, image, expanded, layout}: GoodCardDiscountProps) {
  return (
    <div className={cn(discountCN, {
      [MobileCN]: layout === 'mobile',
      [expandedCN]: expanded,
      [small]: !expanded,
    })}>
        <div className={discountPercentage}>{discount}%</div>

        {image &&
        <div className={discountImage}>
          <img src={image} className={img} />
        </div>
      }
    </div>
  )
}
