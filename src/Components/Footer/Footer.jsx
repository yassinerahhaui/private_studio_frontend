import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
  const date = new Date()
  return (
    <footer className={styles.footer}>
      <p className={styles.footerCopyright}>©copyright {date.getFullYear()}</p>
    </footer>
  )
}

export default Footer