import React, { useState } from "react";
import cn from 'classnames';
import styles from './SideBarBoxItem.scss';
import {LayoutProp}  from "../LayoutProp";
import { DropdownItem } from "../SideBar/SideBar";

import mobileSideBarArrow from '../../assets/icons/mobileSidebarArrow.svg';

interface SideBarBoxItemProps extends LayoutProp{
  data: DropdownItem;
  id: number;
  expandedId: number | null;
  onClick: (id: number) => void;
}

export function SideBarBoxItem({layout, data, id, expandedId, onClick}: SideBarBoxItemProps) {
  const [expandedArrow, setExpandedArrow] = useState(false);
  const isExpanded = expandedId === id;

  return (
    <div className={cn(styles.sideBarBoxItem, styles[layout])}>
      <div className={cn(styles.sideBarBoxItemBtn,{
          [styles.active]: isExpanded
        })}
        onClick={() => {onClick(id)}}
      >
        <img className={styles.logoSvg} src={data.svg}/>
        <a href={data.link} className={styles.title}>
          {data.title}
          {data.subSvg && <img className={styles.arrowSvg} src={data.subSvg} />}
        </a>
        {layout === 'mobile' && !data.subSvg && 
          <div className={styles.mobileSideBarArrow} onClick={() => setExpandedArrow(val => !val)}>
            <img className={cn(styles.svg, {[styles.rotate]: isExpanded})} src={mobileSideBarArrow}/>
          </div>
        }
      </div>

      {!data.subSvg &&
        <div className={cn(styles.sideBarBoxItemDropdown, {
          [styles.expanded]: isExpanded
        })}>
          <div className={styles.sideBarBoxItemDropdownContainer}>
            {data.dropdownItems.map(item =>
              <div key={item.title} className={styles.sideBarBoxItemDropdownItem}>
                <a className={styles.link} href={item.link}>{item.title}</a>
              </div>
            )}
          </div>
        </div>
      }
    </div>
  )
}