import React, {useRef} from "react";
import cn from 'classnames';
import styles from './SideBarBoxItem.scss';
import {LayoutProp}  from "../LayoutProp";

import mobileSideBarArrow from '../../assets/icons/mobileSidebarArrow.svg';

interface SideBarBoxItemDropdownData {
  title: string;
  link: string;
}

interface SideBarBoxItemProps extends LayoutProp{
  data: SideBarItemData;
  id: number;
  expandedId: number | null;
  onClick: (id: number) => void;
  isOpen?: boolean;
  onCategoryClick?: ()=>void;
}

interface SideBarItemData {
  link: string;
  svg: string;
  subSvg: string;
  title: string;
  dropdownItems: SideBarBoxItemDropdownData[];
}

export function SideBarBoxItem({layout, data, id, expandedId, onClick, isOpen, onCategoryClick}: SideBarBoxItemProps) {
  const isExpanded = expandedId === id;
  const linkRef = useRef<any>(null);

  function handleCategoryClick() {
    if (linkRef.current.href) return false;

    if (!isOpen) {
      if (typeof onCategoryClick !== 'undefined') {
        onCategoryClick()
      }
    }
    onClick(id)
  }

  function handleCategoryItemClick() {
    onClick(id)
  }

  return (
    <div className={cn(styles.sideBarBoxItem, styles[layout])}>
      <a
       href={data.link}
       className={styles.sideBarBoxItemBtn} 
       ref={linkRef}
      
      >
        <img 
          className={styles.logoSvg} 
          src={data.svg}
          onClick={handleCategoryClick}
        />
        <span className={cn(
          styles.sideBarBoxItemBtnText, {
          [styles.shown]: isOpen && layout === 'desktop',
          [styles.active]: isExpanded 
        })}
        onClick={handleCategoryItemClick}
        >
          {data.title}
          {data.subSvg && <img className={styles.arrowSvg} src={data.subSvg} />}
          {layout === 'mobile' && !data.subSvg && 
            <img className={cn(styles.mobileSideBarArrow, {[styles.rotate]: isExpanded})} src={mobileSideBarArrow}/>
          }
        </span>
      </a>

      {!data.subSvg &&
        <SideBarBoxItemSubItems data={data.dropdownItems} isExpanded={isExpanded}/>
      }
    </div>
  )
}


interface SideBarBoxItemSubItemsProps {
  data: SideBarBoxItemDropdownData[];
  isExpanded: boolean;
}

function SideBarBoxItemSubItems({data, isExpanded}: SideBarBoxItemSubItemsProps) {
  return (
    <div className={cn(styles.sideBarBoxItemDropdown, {
      [styles.expanded]: isExpanded
    })}>
      <div className={styles.sideBarBoxItemDropdownContainer}>
        {data.map((item:any) =>
          <div key={item.title} className={styles.sideBarBoxItemDropdownItem}>
            <a className={styles.link} href={item.link}>{item.title}</a>
          </div>
        )}
      </div>
    </div>
  )
}
