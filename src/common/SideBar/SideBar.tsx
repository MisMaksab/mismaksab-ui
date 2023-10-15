import React, { useCallback, useState } from 'react';
import styles from './SideBar.scss';
import cn from 'classnames';

import { SideBarHeader } from "../../common/SideBarHeader/SideBarHeader";
import { SideBarBox } from '../SideBarBox/SideBarBox';
import { LayoutProp } from '../LayoutProp';

interface SideBarProps extends LayoutProp{
  title: string;
  data: [];
  isOpen: boolean;
  onCategoryClick: ()=>void;
}

export function SideBar({title, layout, data, isOpen, onCategoryClick}: SideBarProps) {
  const [expandedId, setExpadedId] = useState(null);
  const changeExpandedIdCb = useCallback((id:number) => {
    if (id === expandedId) {
      setExpadedId(null);
    } else {
      setExpadedId(id)
    }
  }, [expandedId]);

  return (
    <div className={cn(styles.sideBar, styles[layout], {
      [styles.open]: isOpen
    })}>
      <SideBarHeader layout={layout} title={title} onCategoryClick={onCategoryClick} isOpen={isOpen}/>
      <SideBarBox layout={layout} data={data} expandedId={expandedId} onClick={changeExpandedIdCb}/>
    </div>
  )
}