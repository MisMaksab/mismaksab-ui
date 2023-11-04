import React, { useCallback, useState } from 'react'
import { SideBar } from '../../common/SideBar/SideBar';
import styles from './DesktopSideBarWrapper.scss';
import cn from 'classnames';

interface DesktopSideBarWrapperProps {
  data: any[];
  title: string;
}

export function DesktopSideBarWrapper({data, title}: DesktopSideBarWrapperProps) {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const onCategoryClick = useCallback(() => {
    setIsCategoryOpen(val => !val);
    
  }, [isCategoryOpen])

  return (
    <div className={cn(styles.sideBarWrapper, {
      [styles.open]: isCategoryOpen
    })}>
      <SideBar
        data={data}
        title={title}
        isOpen={isCategoryOpen}
        onCategoryClick={onCategoryClick}
        layout='desktop'
      />
    </div>
  )
}
