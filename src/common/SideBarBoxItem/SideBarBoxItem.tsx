import React from "react";
import cn from 'classnames';
import styles from './SideBarBoxItem.scss';
import {LayoutProp}  from "../LayoutProp";
import { DropdownItem } from "../SideBar/SideBar";

interface SideBarBoxItemProps extends LayoutProp{
  data: DropdownItem;
  id: number;
  expandedIdArr: number[];
  onChange: (id: number) => void;
}

export function SideBarBoxItem({layout, data, id, expandedIdArr, onChange}: SideBarBoxItemProps) {
  const isExpanded = expandedIdArr.includes(id);

  return (
    <div className={cn(styles.sideBarBoxItem, styles[layout])}>
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

      {!data.subSvg &&
        <div className={cn(styles.sideBarBoxItemDropdown, {
          [styles.expanded]: isExpanded
        })}>
          <div className={styles.sideBarBoxItemDropdownContainer}>
            {data.dropdownItems.map(item =>
              <div className={styles.sideBarBoxItemDropdownItem}>
                <a className={styles.link} href={item.link}>{item.title}</a>
              </div>
            )}
          </div>
        </div>
      }
    </div>
  )
}