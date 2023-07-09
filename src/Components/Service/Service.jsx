import React, {useEffect} from 'react'
import styles from './Service.module.scss' 
import { coupes } from '../../data/coupes'
import Card from '../../Components/Card/Card'
import { useTranslation } from 'react-i18next'

const Service = () => {
  const [t,i18n] = useTranslation()
  return (
    <div className={styles.service} id='service'>
      <h2 className={styles.serviceTitle}>{t('services')}</h2>
      <div className={styles.serviceCards}>
        {coupes.map(item => <Card key={item.id} data={item} />)}
      </div>
    </div>
  )
}

export default Service