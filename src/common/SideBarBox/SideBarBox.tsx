import React from 'react'
import styles from './SideBarBox.scss';
import { SideBarBoxItem } from '../SideBarBoxItem/SideBarBoxItem';
import cn from 'classnames';
import { LayoutProp } from '../LayoutProp';
import { DropdownItem } from '../SideBar/SideBar';

interface SideBarBoxInterFace extends LayoutProp{
  data: [];
  expandedId: number | null;
  onClick: (id: number) => void;
}

export function SideBarBox({layout, data, expandedId, onClick}: SideBarBoxInterFace) {
  return (
    <div className={cn(styles.sideBarBox, styles[layout])}>
        {data.map((item:[], i:number) =>
          <SideBarBoxItem layout={layout} key={i} id={i} expandedId={expandedId} data={item} onClick={onClick}/>
        )}
      </div>
  )
}
