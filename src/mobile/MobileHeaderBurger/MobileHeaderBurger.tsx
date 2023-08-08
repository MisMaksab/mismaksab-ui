import React from 'react'
import styles from './MobileHeaderBurger.scss';

interface MobileHeaderBurgerProps {
  onClick?: () => void;
}

export function MobileHeaderBurger({ onClick }: MobileHeaderBurgerProps) {
  return (
    <div onClick={onClick} className={styles.burger}>
      <span className={styles.burgerItem}></span>
      <span className={styles.burgerItem}></span>
      <span className={styles.burgerItem}></span>
    </div>
  )
}
