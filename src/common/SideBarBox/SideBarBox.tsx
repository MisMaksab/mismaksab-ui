import React from 'react'
import styles from './SideBarBox.scss';
import { SideBarBoxItem } from '../SideBarBoxItem/SideBarBoxItem';
import cn from 'classnames';
import { LayoutProp } from '../LayoutProp';

interface SideBarBoxInterFace extends LayoutProp{
  data: [];
  expandedIdArr: [];
  onChange: (id: number) => void;
}

export function SideBarBox({layout, data, expandedIdArr, onChange}: SideBarBoxInterFace) {
  return (
    <div className={cn(styles.sideBarBox, styles[layout])}>
        {data.map((item:[], i:number) =>
          <SideBarBoxItem layout={layout} key={i} id={i} expandedIdArr={expandedIdArr} data={item} onChange={onChange}/>
        )}
      </div>
  )
}
