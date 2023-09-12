import React from 'react'
import styles from './SideBarBox.scss';
import { SideBarBoxItem } from '../SideBarBoxItem/SideBarBoxItem';
import cn from 'classnames';
import { LayoutProp } from '../LayoutProp';
import { DropdownItem } from '../SideBar/SideBar';

interface SideBarBoxInterFace extends LayoutProp{
  data: DropdownItem[];
  expandedIdArr: number[];
  onChange: (id: number) => void;
}

export function SideBarBox({layout, data, expandedIdArr, onChange}: SideBarBoxInterFace) {
  return (
    <div className={cn(styles.sideBarBox, styles[layout])}>
        {data.map((item, i) =>
          {
            return <SideBarBoxItem layout={layout} key={i} id={i} expandedIdArr={expandedIdArr} data={item} onChange={onChange} />;
          }
        )}
      </div>
  )
}
