import React, { useCallback, useState } from 'react'
import styles from '../MobileLinkPopup/MobileLinkPopup.scss'
import cn from 'classnames'
import { CloseCross } from '../../common/CloseCross/CloseCross'

interface MobileCheckboxPopupProps extends CalculateCheckboxBlockProps{
  active: boolean;
  title: string;
  hidePopupCb: ()=>void;
}

interface CalculateCheckboxBlockProps {
  type: 'single'|'multiple';
  setSelectedItemsCb: ()=>void;
  data: Array<{id: string, text: string, link: string}>;
  selectedItems: any[];
  mode: 'popupGreen'|'popupYellow'|'popupBlue'|'popupDefault';
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
            setSelectedItemsCb={()=>{}}
          />
        </div>
      </div>
    </div>
  )
}


function CalculateCheckboxBlock({mode, selectedItems, data, setSelectedItemsCb, type}: CalculateCheckboxBlockProps) {
  return (
    <>
      {data.map((option: any) =>
        <label htmlFor={option.id} key={option.id} className={cn(styles.popupOption, {
          // [styles.active]: selectedItems.includes(option.id) !!!!!
        })}>
          {option.text}

          <input className={
            cn(
              styles.popupOptionCheckbox,
              styles.border,
              styles[mode],
              {[styles.hidden]: type === 'single'}
            )}
            type="checkbox"
            id={option.id}
            name={option.id}
            // checked={selectedItems.includes(option.id)} !!!!!
            onChange={setSelectedItemsCb}
          />
        </label>
      )}
    </>
  )
}