import React from 'react'
import cn from 'classnames';
import YellowButton from '../YellowButton/YellowButton';
import { LayoutProp } from '../LayoutProp';
import { ShrinkButton } from '../ShrinkButton/ShrinkButton';
import {blockHeader, blockHeaderGoBackBtn, justifyCenter, removePaddingTop, thin,} from "./styles";

interface BlockHeaderProps extends LayoutProp{
  title: string;
  yellowButtonText?: string;
  moreBtnEnabled?: boolean;
  yellowButtonLink?: string;
  noPaddingTop?: boolean;
  isTitleThin?: boolean;
  subTitle?: string | null;
  shrinkBtnEnabled?: boolean;
}

export function BlockHeader({title, layout, yellowButtonText, yellowButtonLink, moreBtnEnabled = true, isTitleThin = false, subTitle=null, noPaddingTop = false, shrinkBtnEnabled = false}: BlockHeaderProps) {
  return (
    <div className={cn(blockHeader, {
      [removePaddingTop]: noPaddingTop,
      [justifyCenter]: layout === 'mobile' && !moreBtnEnabled
    })}>
      <h1 className={cn(title, {[thin]: isTitleThin})}>{title}</h1>
      {subTitle &&
        <p className={subTitle}>{subTitle}</p>
      }
      {moreBtnEnabled &&
        <YellowButton
          layout={layout}
          text={yellowButtonText}
          link={yellowButtonLink}
          isArrowRotated={true}
        />
      }
      {shrinkBtnEnabled &&
        <a className={blockHeaderGoBackBtn}>
          <ShrinkButton onClick={()=>{}}/>
        </a>
      }
    </div>
  )
}
