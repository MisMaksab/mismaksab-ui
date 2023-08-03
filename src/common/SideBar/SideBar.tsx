import React, { useCallback, useState } from 'react';
import styles from './SideBar.scss';
import SideBarHideSvg from '../../assets/icons/sideBarHide.svg';
import cn from 'classnames';

interface SideBarProps {
  title: string;
  data: [];
}

export function SideBar({data, title}: SideBarProps) {
  const [expandedId, setExpadedId] = useState(-1);
  const changeExpandedIdCb = useCallback((newId:number) => {
    let id = newId;
    
    if (expandedId === id) id = -1;
    setExpadedId(id);
  }, [expandedId]);

  return (
    <div className={styles.sideBar}>
      <SideBarHeader title={title} onHide={changeExpandedIdCb}/>

      <div className={styles.sideBarBox}>
        {data.map((item:[], i:number) =>
          <SideBarItem key={i} id={i} expandedId={expandedId} data={item} onChange={changeExpandedIdCb}/>
        )}
      </div>
    </div>
  )
}


interface SideBarHeaderProps {
  title: string;
  onHide: (newId: number) => void;
}

function SideBarHeader({title, onHide}: SideBarHeaderProps) {
  return (
    <div className={styles.sideBarHeader}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.hide} onClick={() => onHide(-1)}>
        <img className={styles.svg} src={SideBarHideSvg} />
      </div>
    </div>
  )
}


interface SideBarItemProps {
  id: number;
  expandedId: number;
  onChange: (newId: number) => void;
}

function SideBarItem({data, id, expandedId, onChange}: SideBarItemProps) {
  return (
    <div className={styles.sideBarBoxItem}>
      <div className={styles.sideBarBoxItemBtn}>
        <img className={styles.svg} src={data.svg}/>
        <p onClick={() => {onChange(id)}} className={cn(styles.title, {
          [styles.active]: id === expandedId
        })}>{data.title}</p>
      </div>

      <div className={cn(styles.sideBarBoxItemDropdown, {
        [styles.active]: id === expandedId
      })}>
        {data.dropdownItems.map(item =>
          <div className={styles.sideBarBoxItemDropdownItem}>
            <a className={styles.link} href={item.link}>{item.title}</a>
          </div>
        )}
      </div>
    </div>
  )
}