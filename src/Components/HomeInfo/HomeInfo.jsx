import React from "react";
import styles from "./HomeInfo.module.scss";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { useTranslation } from "react-i18next";


const HomeInfo = () => {
  const [t,i18n] = useTranslation()
  const dateTime = [
    { id: 1, name: "Lun", time: "10:00 - 20:00" },
    { id: 2, name: "Mar", time: "10:00 - 20:00" },
    { id: 3, name: "Mer", time: "10:00 - 20:00" },
    { id: 4, name: "Jeu", time: "10:00 - 20:00" },
    { id: 5, name: "Ven", time: "10:00 - 20:00" },
    { id: 6, name: "Sam", time: "10:00 - 20:00" },
    { id: 7, name: "Dim", time: "Non travaillé" },
  ];
  const socialMedia = {
    id: 1,
    instagram: "",
    facebook: "",
    youtube: "",
    twitter: "",
  };
  const userInfo = {
    id: 1,
    phone: "212630034545",
    email: "yassinerahhaoui12@gmail.com",
    address: "260, route de Combault, La Queue-en-Brie, FR, 94510",
    domain: "said-taibi.com"
  };
  return (
    <main className={styles.homeInfo}>
      <div className={styles.homeInfoDate}>
        <h2 className={styles.homeInfoTitle}>{t('opening_hours')}</h2>
        <div className={styles.date}>
          {dateTime.map((day) => (
            <div key={day.id} className={styles.homeInfoDay}>
              <p className={styles.homeInfoDayName}>{day.name}</p>
              <p className={styles.homeInfoDayDispo}>{day.time}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.homeInfoBrand}>
        <h2 className={styles.homeInfoTitle}>Saiid Taibi</h2>
        <h6>saiid taibi</h6>
      </div>
      <div className={styles.homeInfoInfo}>
        <h2 className={styles.homeInfoTitle}>{t('contact_us')}</h2>
        <p>+{userInfo.phone}</p>
        <p>{userInfo.email}</p>
        <p>{userInfo.address}</p>
        <p>{userInfo.domain}</p>
        <div className={styles.socialMedia}>
          <a className={styles.instagram} href={socialMedia.instagram}>
            <AiOutlineInstagram />
          </a>
          <a className={styles.youtube} href={socialMedia.youtube}>
            <AiOutlineYoutube />
          </a>
          <a className={styles.facebook} href={socialMedia.facebook}>
            <FiFacebook />
          </a>
          <a className={styles.twitter} href={socialMedia.twitter}>
            <FiTwitter />
          </a>
        </div>
      </div>
    </main>
  );
};

export default HomeInfo;
