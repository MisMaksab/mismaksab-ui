import React, { useCallback, useState } from 'react'
import styles from './MobilePopup.scss'
import cn from 'classnames'
import mark from "../../assets/icons/languageDropdownIcon.svg"
import { CloseCross } from '../../common/CloseCross/CloseCross'

interface MobilePopupProps {
  active: boolean;
  type: 'checkbox'|'radio';
  data: Array<{id: string, text: string, link: string}>;
  title: string;
  selectedItems: [];
  hidePopupCb: ()=>void;
}

export function MobilePopup({active, hidePopupCb, type, data, title, selectedItems}: MobilePopupProps) {
  return (
    <div className={cn(styles.popup, {
      [styles.active]: active
    })}>
      <div className={styles.popupContent}>
        <div className={styles.popupCloseCross}>
          <CloseCross onClick={hidePopupCb} mode='black'/>
        </div>

        <h1 className={styles.title}>{title}</h1>
        <div className={styles.popupOptions}>
          {type === 'checkbox'
            ? <CalculateCheckboxBlock selectedItems={selectedItems} data={data}/>
            : <CalculateRadioBlock selectedItem={selectedItems} data={data}/>
          }
        </div>
      </div>
    </div>
  )
}

function CalculateCheckboxBlock({selectedItems, data}) {
  return (
    <>
      
    </>
  )
}

function CalculateRadioBlock({selectedItem, data}) {
  return (
    <>
      {data.map((option) =>
        <a key={option.id} href={option.link} className={styles.popupOption}>
          {option.text}
          {selectedItem[0] === option.id &&
            <img className={styles.mark} src={mark}/>
          }
        </a>
      )}
    </>
  )
}