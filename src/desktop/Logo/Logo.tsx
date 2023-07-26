import React from 'react';
import logoSvg from '../../assets/icons/logo.svg';
import styles from './Logo.scss';

interface Props {
    title: string;
    subtitle: string;
    href?: string;
}

export function Logo({ title, subtitle, href = "/" }: Props) {
  return (
    <a href={href} className={styles.logo}>
        <img src={logoSvg} alt='logo'/>
        <div>
            <h1 className={styles.title}>{title}</h1>
            <h6 className={styles.subTitle}>{subtitle}</h6>
        </div>
    </a>
  )
}
