import React, { useCallback, useState } from 'react'
import styles from '../MobileLinkPopup/MobileLinkPopup.scss'
import cn from 'classnames'
import { CloseCross } from '../../common/CloseCross/CloseCross'

interface MobileCheckboxPopupProps{
  mode: 'popupGreen'|'popupYellow'|'popupBlue'|'popupDefault';
  active: boolean;
  data: Array<{id: string, text: string, link: string}>;
  title: string;
  selectedItems: [];
  hidePopupCb: ()=>void;
  setSelectedItemsCb: ()=>void;
  type: 'single'|'multiple';
}

export function MobileCheckboxPopup({mode, active, hidePopupCb, type, data, title, selectedItems, setSelectedItemsCb}: MobileCheckboxPopupProps) {
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
          <CalculateCheckboxBlock
            mode={mode}
            selectedItems={selectedItems}
            data={data}
            type={type}
            changeSelectedItemsCb={()=>{}}
          />
        </div>
      </div>
    </div>
  )
}


function CalculateCheckboxBlock({mode, selectedItems, data, changeSelectedItemsCb, type}) {
  return (
    <>
      {data.map((option) =>
        <label htmlFor={option.id} key={option.id} className={cn(styles.popupOption, {
          [styles.active]: selectedItems.includes(option.id)
        })}>
          {option.text}

          <input className={
            cn(
              styles.customInputCheckbox,
              styles.popupOptionCheckbox,
              styles.border,
              styles[mode],
              {[styles.hidden]: type === 'single'}
            )}
            type="checkbox"
            id={option.id}
            name={option.id}
            checked={selectedItems.includes(option.id)}
            onChange={changeSelectedItemsCb}
          />
        </label>
      )}
    </>
  )
}