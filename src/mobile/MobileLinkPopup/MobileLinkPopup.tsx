import React, { useCallback, useState } from 'react'
import styles from './MobileLinkPopup.scss'
import cn from 'classnames'
import mark from "../../assets/icons/languageDropdownIcon.svg"
import { CloseCross } from '../../common/CloseCross/CloseCross'

interface MobileLinkPopupProps{
  mode: 'popupGreen'|'popupYellow'|'popupBlue'|'popupDefault';
  active: boolean;
  data: Array<{id: string, text: string, link: string}>;
  title: string;
  selectedItem: number|string;
  hidePopupCb: ()=>void;
}

export function MobileLinkPopup({mode, active, hidePopupCb, data, title, selectedItem}: MobileLinkPopupProps) {
  return (
    <div className={cn(styles.popup, {
      [styles.active]: active
    })}>
      <div className={styles.popupContent}>
        <div className={styles.popupCloseCross}>
          <CloseCross onClick={hidePopupCb} mode={mode}/>
        </div>

        <h1 className={cn(styles.title, styles[mode], styles.color)}>{title}</h1>
        <div className={styles.popupOptionsWrapper}>
          <CalculateRadioBlock
            selectedItem={selectedItem}
            data={data}
          />
        </div>
      </div>
    </div>
  )
}

function CalculateRadioBlock({selectedItem, data}) {
  return (
    <>
      {data.map((option) =>
        <a key={option.id} href={option.link} className={cn(styles.popupOption, {
          [styles.active]: selectedItem === option.id
        })}>
          {option.text}
          {selectedItem === option.id &&
            <img className={styles.mark} src={mark}/>
          }
        </a>
      )}
    </>
  )
}