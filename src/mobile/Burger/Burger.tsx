import React from 'react'
import styles from './Burger.scss';

export function Burger() {
  return (
    <div className={styles.burger}>
      <span className={styles.burgerItem}></span>
      <span className={styles.burgerItem}></span>
      <span className={styles.burgerItem}></span>
    </div>
  )
}
