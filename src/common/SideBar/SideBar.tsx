import React, { useCallback, useState } from 'react';
import styles from './SideBar.scss';
import cn from 'classnames';

import { SideBarHeader } from "../../common/SideBarHeader/SideBarHeader";
import { SideBarBox } from '../SideBarBox/SideBarBox';
import { MobileSideBarControls } from '../../mobile/MobileSideBarControls/MobileSideBarControls';
import { LayoutProp } from '../LayoutProp';

interface SideBarProps extends LayoutProp{
  title: string;
  data: DropdownItem[];
}

export type DropdownItem = {
  title: string,
  svg?: string,
  subSvg?: string,
  link?: string,
  dropdownItems: dropdownItem[]
}

type dropdownItem = {
  title: string;
  link: string;
}

export function SideBar({title, layout, data}: SideBarProps) {
  const [expandedIdArr, setExpadedIdArr] = useState<number[]>([]);
  const changeExpandedIdArrCb = useCallback((id: number) => {
    if (expandedIdArr.includes(id)) {
      setExpadedIdArr(expandedIdArr.filter(oldId => oldId != id));
    } else {
      setExpadedIdArr([...expandedIdArr, id]);
    }
  }, [expandedIdArr]);
  const clearExpandedIdArrCb = useCallback(() => {
    setExpadedIdArr([]);
  }, [])

  return (
    <div className={cn(styles.sideBar, styles[layout])}>
      <SideBarHeader layout={layout} title={title} onHide={clearExpandedIdArrCb}/>
      <SideBarBox layout={layout} data={data} expandedIdArr={expandedIdArr} onChange={changeExpandedIdArrCb}/>
    </div>
  )
}