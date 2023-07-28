import React from 'react';
import logoSvg from '../../assets/icons/mobileLogo.svg';
import styles from './Logo.scss';

interface Props {
    title: string;
    href?: string;
}

export function Logo({ title, href = "/" }: Props) {
  return (
    <a href={href} className={styles.logo}>
        <img src={logoSvg} alt='logo'/>
        <div>
            <h1 className={styles.title}>{title}</h1>
        </div>
    </a>
  )
}
