import React from 'react'
import styles from './Reserve.module.scss'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Logo from '../Logo/Logo'

const Reserve = () => {
  const [t,i18n] = useTranslation()
  return (
    <div className={styles.reserve}>
      <div className={styles.reserveBox}>
        {/* <img className={styles.image} src="/barber-shop.png" alt="barber-shop image" /> */}
        <Logo scale={1.5} />
        <p className={styles.reservePhone}>+212 6 30 03 45 45</p>
        <Link to='/service' className={styles.reserveBtn}>{t('reserve')}</Link>
      </div>
    </div>
  )
}

export default Reserve