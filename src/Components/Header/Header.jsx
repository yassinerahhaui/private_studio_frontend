import React from "react";
import styles from "./Header.module.scss";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom'
// import Logo from ''

const Header = () => {
  const [t,i18n] = useTranslation()
  return ( 
    <header className={styles.header}>
      <motion.div
        className={styles.headerContent}
        initial={{x: '-100%'}}
        animate={{x: 0}}
        transition={{duration: 1}}
      >
        <h1 className={styles.headerTitle}>PRIVATE STUDIO</h1>
        <p className={styles.headerParagraph}>BY SAIID TAIBI</p>
        {/* <Logo /> */}
        <div className={styles.headerButtons}>
          {/* <Link to='/' className={styles.button_outlined}>{t('show_on_map')}</Link> */}
          <a href='/#service' className={styles.button_contained}>{t('reserve')}</a>  
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
