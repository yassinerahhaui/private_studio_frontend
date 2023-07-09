import React, { useEffect } from "react";
import styles from './Logo.module.scss'

const Logo = (props) => {
  useEffect(()=> {
    const logo = document.querySelector('#logo')
    logo.style.scale = props.scale
  },[props.scale])
  return (
    <div className={styles.logo_box} id='logo'>
      <div className={styles.logo_box_left}>PRIVATE</div>
      <div className={styles.logo_box_right}>STUDIO</div>
    </div>
  );
};

export default Logo;
