import React from "react";
import styles from "./SuccessMessage.module.scss";
import { useTranslation } from "react-i18next";

const SuccessMessage = (props) => {
  const [t, i18n] = useTranslation();
  const go_to_home_page = () => {
    window.location.href = '/'
  }

  return (
    <>
      <div className={styles.dataContent}>
        <p className={styles.paragraph}>
          {t("reserved_message")} {props.dateName}.
        </p>
        <p className={styles.paragraph}>
          <b>{t("address")}:</b> 44 Rue Carnot, 02400 Château-Thierry{" "}
          <a
            href="https://www.google.com/maps/place/44+Rue+Carnot,+02400+Ch%C3%A2teau-Thierry,+France/@49.042267,3.4041139,17z/data=!3m1!4b1!4m6!3m5!1s0x47e8e63a7b68828b:0x65fb2b788858f12!8m2!3d49.042267!4d3.4041139!16s%2Fg%2F11b8z380xp?entry=ttu"
            target="_blank"
          >
            {t("view_on_maps")}
          </a>
        </p>
        <div className={styles.maps}></div>
        <p className={styles.paragraph}>{t("sent_address")}</p>
        <p className={styles.importantMessage}>{t("come_on_time")}</p>
      </div>
      <div className={styles.darkBg} onClick={()=> go_to_home_page()}></div>
    </>
  );
};

export default SuccessMessage;
