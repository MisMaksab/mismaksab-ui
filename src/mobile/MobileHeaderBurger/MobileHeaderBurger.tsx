import React from 'react'
import styles from './MobileHeaderBurger.scss';

export function MobileHeaderBurger() {
  return (
    <div className={styles.burger}>
      <span className={styles.burgerItem}></span>
      <span className={styles.burgerItem}></span>
      <span className={styles.burgerItem}></span>
    </div>
  )
}
