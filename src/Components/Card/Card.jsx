import React, { useEffect, useState } from "react";
import styles from "./Card.module.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addCoupe, addData } from "../../store/slices/appointmentSlice";

const Card = (props) => {
  const [t, i18n] = useTranslation();
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [desc, setDesc] = useState([]);
  const appointment = useSelector((state) => state.appointment);
  const [myfrom, setMyFrom] = useState();
  const data = props.data;
  const language = () => {
    if (localStorage.getItem("language") === "en") {
      setName(data.name_en);
      setDesc(data.description_en);
      setMyFrom("from");
    } else if (localStorage.getItem("language") === "fr") {
      setName(data.name_fr);
      setDesc(data.description_fr);
      setMyFrom("a partir de");
    } else {
      setName(data.name_it);
      setDesc(data.description_it);
      setMyFrom("da");
    }
  };
  useEffect(() => {
    language();
  }, [language]);
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <img
          className={styles.image}
          src={data.image}
          alt="barber shop image"
        />
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{name}</h3>
        {desc.map((d) => (
          <p key={d} className={styles.descItem}>
            {d}
          </p>
        ))}
      </div>
      <div className={styles.cardFooter}>
        <p className={styles.time}>{data.time}</p>
        {data.id === 4 ? (
          <p className={styles.price}>
            {myfrom} {data.price}
          </p>
        ) : (
          <p className={styles.price}>{data.price}</p>
        )}
      </div>
      <Link
        to="/date"
        onClick={() => {
          dispatch(
            addCoupe({
              id: data.id,
              name_fr: data.name_fr,
              name_en: data.name_en,
              name_it: data.name_it,
              time: data.time,
              price: data.price,
            })
          )
          dispatch(
            addData(`${data.name_fr} - ${data.time} - ${data.price}`)
          )
        }
        }
        className={styles.cardButton}
      >
        {t("selectioner")}
      </Link>
    </div>
  );
};

export default Card;
