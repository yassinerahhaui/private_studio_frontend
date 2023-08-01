import React from "react";
import { aboutData } from "../../data/about";
import styles from "./About.module.scss";
import { useTranslation } from "react-i18next";
import Logo from '../Logo/Logo'

const About = () => {
  const [t, i18n] = useTranslation();
  const language = (en, fr, it) => {
    if (localStorage.getItem("language") === "en") {
      return en;
    } else if (localStorage.getItem("language") === "fr") {
      return fr;
    } else {
      return it;
    }
  };
  return (
    <div className={styles.about} id="about">
      <div className={styles.aboutLogo}>
        <Logo scale={1.2} />
      </div>
      <div className={styles.aboutItems}>
        {aboutData.map((el) => (
          <div key={el.id} className={styles.aboutItem}>
            <h3 className={styles.aboutItemTitle}>
              {language(el.title_en, el.title_fr, el.title_it)}
            </h3>
            <p className={styles.aboutItemDescription}>
              {language(el.description_en, el.description_fr, el.description_it)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
