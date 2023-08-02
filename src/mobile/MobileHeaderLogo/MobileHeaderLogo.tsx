import React from 'react';
import logoSvg from '../../assets/icons/mobileLogo.svg';
import styles from './MobileHeaderLogo.scss';

interface MobileHeaderLogoProps {
    title: string;
    href?: string;
}

export function MobileHeaderLogo({ title, href = "/" }: MobileHeaderLogoProps) {
  return (
    <a href={href} className={styles.logo}>
        <img src={logoSvg} alt='logo'/>
        <div>
            <h1 className={styles.title}>{title}</h1>
        </div>
    </a>
  )
}
