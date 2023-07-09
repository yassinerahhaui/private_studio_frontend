import React, { useEffect, useState } from 'react'
import styles from './Coupe.module.scss'
import { useTranslation } from 'react-i18next'
import { MdDeleteOutline } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { deleteCoupe } from '../../store/slices/appointmentSlice'

const Coupe = (props) => {
  const [t,i18n] = useTranslation()
  const data = props.data
  const [name,setName] = useState('')
  const dispatch = useDispatch()
  const language = () => {
    const lng = localStorage.getItem('language')
    if (lng === 'en') {
      setName(data.name_en)
    } else if (lng === 'fr') {
      setName(data.name_fr)
    } else {
      setName(data.name_it)
    }
  }
  useEffect(()=> {
    language()
  },[language])
  return (
    <div className={styles.element}>
      <p className={styles.elementText}>{`${name} - ${data.time} - ${data.price}`}</p>
      <button className={styles.elementButton} onClick={()=> dispatch(deleteCoupe(data.id))}><MdDeleteOutline /></button>
    </div>
  )
}

export default Coupe