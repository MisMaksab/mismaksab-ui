import React from 'react'
import styles from './SideBarBox.scss';
import { SideBarBoxItem } from '../SideBarBoxItem/SideBarBoxItem';
import cn from 'classnames';

interface SideBarBoxInterFace {
  mobile: boolean;
  data: [];
  expandedIdArr: [];
  onChange: (id: number) => void;
}

export function SideBarBox({mobile, data, expandedIdArr, onChange}: SideBarBoxInterFace) {
  return (
    <div className={cn(styles.sideBarBox, {
      [styles.mobile]: mobile
    })}>
        {data.map((item:[], i:number) =>
          <SideBarBoxItem mobile={mobile} key={i} id={i} expandedIdArr={expandedIdArr} data={item} onChange={onChange}/>
        )}
      </div>
  )
}
