import React from 'react'
import SideBarHideSvg from '../../assets/icons/sideBarHide.svg';
import { hide, svg } from './styles';

interface ShrinkButtonProps {
  onClick: ()=>void;
}

export function ShrinkButton({onClick}: ShrinkButtonProps) {
  return (
    <div className={hide} onClick={onClick}>
      <img className={svg} src={SideBarHideSvg} />
    </div>
  )
}
