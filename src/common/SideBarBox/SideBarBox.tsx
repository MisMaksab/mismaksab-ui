import React from 'react'
import styles from './SideBarBox.scss';
import { SideBarBoxItem } from '../SideBarBoxItem/SideBarBoxItem';
import cn from 'classnames';

interface SideBarBoxInterFace {
  layout: 'mobile'|'desktop';
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
