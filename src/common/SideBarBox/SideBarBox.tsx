import React from 'react'
import styles from './SideBarBox.scss';
import { SideBarBoxItem } from '../SideBarBoxItem/SideBarBoxItem';
import cn from 'classnames';
import { LayoutProp } from '../LayoutProp';

interface SideBarBoxInterFace extends LayoutProp{
  data: (
    { title: string; svg: any; subSvg: any; link: string; dropdownItems: never[]; } |
    { title: string; svg: any; dropdownItems: { title: string; link: string; }[]; subSvg?: undefined; link?: undefined; }
  )[];
  expandedId: number | null;
  onClick: (id: number) => void;
  isOpen?: boolean;
  onCategoryClick?: ()=>void;
}

export function SideBarBox({layout, data, expandedId, onClick, isOpen, onCategoryClick}: SideBarBoxInterFace) {
  return (
    <div className={cn(styles.sideBarBox, styles[layout])}>
        {data.map((item:any, i:number) =>
          <SideBarBoxItem layout={layout} key={i} id={i} expandedId={expandedId} data={item} onClick={onClick} isOpen={isOpen} onCategoryClick={onCategoryClick}/>
        )}
      </div>
  )
}
