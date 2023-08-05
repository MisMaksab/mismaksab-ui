import React, { useRef } from "react";
import cn from 'classnames';
import styles from './SideBarBoxItem.scss';

interface SideBarBoxItemProps {
  mobile: boolean;
  data: [];
  id: number;
  expandedIdArr: [];
  onChange: (id: number) => void;
}

export function SideBarBoxItem({mobile, data, id, expandedIdArr, onChange}: SideBarBoxItemProps) {
  const isExpanded = expandedIdArr.includes(id);
  const dropdownContainerRef = useRef();

  return (
    <div className={cn(styles.sideBarBoxItem, {
      [styles.mobile]: mobile
    })}>
      <div className={styles.sideBarBoxItemBtn}>
        <img className={styles.logoSvg} src={data.svg}/>
        <a href={data.link} onClick={() => {onChange(id)}} className={cn(styles.title, {
          [styles.active]: isExpanded
        })}>
          {data.title}
          {data.subSvg && 
            <img className={styles.arrowSvg} src={data.subSvg} />
          }
        </a>
      </div>

      <div style={{maxHeight: isExpanded? dropdownContainerRef.current.offsetHeight: 0}} className={styles.sideBarBoxItemDropdown}>
        <div ref={dropdownContainerRef} className={styles.sideBarBoxItemDropdownContainer}>
          {data.dropdownItems.map(item =>
            <div className={styles.sideBarBoxItemDropdownItem}>
              <a className={styles.link} href={item.link}>{item.title}</a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}