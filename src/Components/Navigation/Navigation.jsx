import React, { useEffect, useState } from "react";
import styles from "./Navigation.module.scss";
import { NavLink, Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { FaLanguage } from 'react-icons/fa'
import Footer from "../Footer/Footer";
import { useTranslation } from "react-i18next";

const Navigation = () => {
  const [navbar,setNavbar] = useState(false)
  const [srn,setSrn] = useState(window.innerWidth)
  const [t,i18n] = useTranslation()
  const showNav = () => {
    const nav = document.querySelector('#navigation')
    if (navbar) {
      setNavbar(false)
      nav.style.display = 'none'
    } else {
      setNavbar(true)
      nav.style.display = 'block'
    }
  }
  useEffect(()=> {
    window.addEventListener('resize',() => {
      const nav = document.querySelector('#navigation')
      setSrn(window.innerWidth)
      setNavbar(false)
      srn > 768 ? nav.style.display = 'none' : undefined
    })
  },[srn])
  return (
    <div className={styles.project}>
      <div className={styles.navPhone}>
        {/* <img src="" alt="" /> */}
        <button
          className={styles.navMenu}
          onClick={() => showNav()}
        >
          {navbar ? <AiOutlineClose />: <AiOutlineMenu />}
        </button>
      </div>
      <nav className={styles.navigation}>
        {/* <img src="" alt="" /> */}
        <ul>
          <li className="navLink">
            <NavLink to='/'>Home</NavLink>
          </li>
          <li className="navLink">
            <NavLink to='/reviews'>Reviews</NavLink>
          </li>
          <li className="navLink">
            <NavLink to='/cart'>Cart</NavLink>
          </li>
        </ul>
      </nav>
      <nav className={styles.navigation_phone} id="navigation">
        <ul>
          <li className="navLink">
            <NavLink to='/'>Home</NavLink>
          </li>
          <li className="navLink">
            <NavLink to='/reviews'>Reviews</NavLink>
          </li>
          <li className="navLink">
            <NavLink to='/cart'>Cart</NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles.changeLanguage}>
        <FaLanguage />
        <ul className={styles.languages}>
          <hr />
          <li onClick={() => {
            i18n.changeLanguage('en')
            localStorage.setItem('language','en')
          }}>English</li>
          <li onClick={() => {
            i18n.changeLanguage('fr')
            localStorage.setItem('language','fr')
          }}>Française</li>
          <li onClick={() => {
            i18n.changeLanguage('it')
            localStorage.setItem('language','it')
          }}>Italiano</li>
        </ul>
      </div>
      <Header />
      <div className={styles.content}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Navigation;
