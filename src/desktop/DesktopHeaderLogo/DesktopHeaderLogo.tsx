import React from 'react';
import logoSvg from '../../assets/icons/logo.svg';
import styles from './DesktopHeaderLogo.scss';

interface DesktopHeaderLogoProps {
    title: string;
    subtitle: string;
    href?: string;
}

export function DesktopHeaderLogo({ title, subtitle, href = "/" }: DesktopHeaderLogoProps) {
  return (
    <a href={href} className={styles.logo}>
        <img className={styles.img} src={logoSvg} alt='logo'/>
        <div>
            <h1 className={styles.title}>{title}</h1>
            <h6 className={styles.subTitle}>{subtitle}</h6>
        </div>
    </a>
  )
}
