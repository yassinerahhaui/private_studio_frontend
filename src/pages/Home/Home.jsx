import React from 'react'
import styles from './Home.module.scss'
import SliderImages from '../../Components/SliderImages/SliderImages'
import Service from '../../Components/Service/Service'
import About from '../../Components/About/About'

const Home = () => {
  return (
    <div className={styles.home}>
      <Service />
      <About />
      <SliderImages />
    </div>
  )
}

export default Home