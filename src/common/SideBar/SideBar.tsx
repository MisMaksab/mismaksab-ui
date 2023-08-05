import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './SideBar.scss';
import cn from 'classnames';

import { SideBarHeader } from "../../common/SideBarHeader/SideBarHeader";
import { SideBarBox } from '../SideBarBox/SideBarBox';
import { MobileSideBarControls } from '../../mobile/MobileSideBarControls/MobileSideBarControls';

interface SideBarProps {
  mobile: boolean;
  title: string;
  data: [];
}

export function SideBar({title, mobile, data}: SideBarProps) {
  const [expandedIdArr, setExpadedIdArr] = useState([]);
  const changeExpandedIdArrCb = useCallback((id:number) => {
    if (expandedIdArr.includes(id)) {
      setExpadedIdArr([...expandedIdArr].filter(oldId => oldId != id));
    } else {
      setExpadedIdArr([...expandedIdArr, id]);
    }
  }, [expandedIdArr]);
  const clearExpandedIdArrCb = useCallback(() => {
    setExpadedIdArr([]);
  }, [])

  return (
    <div className={cn(styles.sideBar, {
      [styles.mobile]: mobile
    })}>
      {mobile && <MobileSideBarControls/>}
      <SideBarHeader mobile={mobile} title={title} onHide={clearExpandedIdArrCb}/>
      <SideBarBox mobile={mobile} data={data} expandedIdArr={expandedIdArr} onChange={changeExpandedIdArrCb}/>
    </div>
  )
}