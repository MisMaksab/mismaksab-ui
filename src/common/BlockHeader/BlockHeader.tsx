import React from 'react'
import styles from './BlockHeader.scss'
import YellowButton from '../YellowButton/YellowButton';
import { LayoutProp } from '../LayoutProp';
import cn from 'classnames';
import { ShrinkButton } from '../ShrinkButton/ShrinkButton';

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

export function BlockHeader({title, layout, yellowButtonText, yellowButtonLink, moreBtnEnabled = false, isTitleThin = false, subTitle=null, noPaddingTop = false, shrinkBtnEnabled = false}: BlockHeaderProps) {
  return (
    <div className={cn(styles.blockHeader, styles[layout], {
      [styles.removePaddingTop]: noPaddingTop,
      [styles.justifyCenter]: layout === 'mobile' && !moreBtnEnabled
    })}>
      <h1 className={cn(styles.title, {[styles.thin]: isTitleThin})}>{title}</h1>
      {subTitle &&
        <p className={styles.subTitle}>{subTitle}</p>
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
        <a className={styles.blockHeaderGoBackBtn}>
          <ShrinkButton onClick={()=>{}}/>
        </a>
      }
    </div>
  )
}
