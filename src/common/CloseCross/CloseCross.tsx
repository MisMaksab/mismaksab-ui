import React from 'react'
import cn from 'classnames';
import { popupGreen, popupYellow, popupBlue, popupDefault, cross, crossBar, one, bg, two } from './styles';

interface CloseCrossProps{
  mode: 'popupGreen'|'popupYellow'|'popupBlue'|'popupDefault';
  onClick: ()=>void;
}

const stylesMap = {
  popupGreen,
  popupYellow,
  popupBlue,
  popupDefault
}

export function CloseCross({mode, onClick}: CloseCrossProps) {
  return (
    <div onClick={onClick} className={cross}>
      <div className={cn(crossBar, one, stylesMap[mode], bg)}></div>
      <div className={cn(crossBar, two, stylesMap[mode], bg)}></div>
    </div>
  )
}
