import React, { useEffect, useState } from "react";
import styles from "./DateHeure.module.scss";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Coupe from "../../Components/Coupe/Coupe";
import { MdOutlineEdit } from "react-icons/md";
import { urlName } from "../../data/global";
import SuccessMessage from "../../Components/SuccessMessage/SuccessMessage";

const DateHeure = () => {
  const [t, i18n] = useTranslation();
  const appointment = useSelector((state) => state.appointment);
  const [dateName, setDateName] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState("");
  const successMessage = document.querySelector("#successMessage")
  const newEl = (el, cl) => {
    const nl = document.createElement(el);
    nl.classList = cl;
    return nl;
  };
  const setChild = (pr, ch) => {
    pr.appendChild(ch);
  };
  const dateTimeLoop = () => {
    let date = new Date();
    const dateBox = document.querySelector("#dateTimeBox");
    dateBox.style.width = "max-content";
    dateBox.textContent = "";
    for (let d = 1; d <= 10; d++) {
      let dayStr = date.toDateString().split(" ")[0];
      let dayNum = date.toDateString().split(" ")[2];
      let mount = date.toDateString().split(" ")[1];
      const dayBox = newEl("div", styles.dayBox);
      const dateDay = newEl("h6", styles.dateDay);
      dateDay.innerHTML = `${dayStr}<br />${dayNum} ${mount}`;
      setChild(dateBox, dayBox);
      setChild(dayBox, dateDay);
      date.setHours("10", "30");
      if (dayStr !== "Sun") {
        for (let t = 0; t <= 20; t++) {
          date.setMinutes(date.getMinutes() + 30);
          let hours = date
            .toISOString()
            .split(".")[0]
            .split(":")[0]
            .split("T")[1];
          let minutes = date.toISOString().split(".")[0].split(":")[1];
          const time = newEl("p", styles.timeEl);
          time.textContent = `${hours}:${minutes}`;
          time.onclick = () => {
            setDateName(`${dayStr} ${dayNum} ${mount} - ${hours}:${minutes}`);
            selectedDateTime();
          };
          setChild(dayBox, time);
        }
      }
      date.setDate(date.getDate() + 1);
    }
  };
  const selectedDateTime = () => {
    const dateBox = document.querySelector("#dateTime");
    const selected_time_box = document.querySelector("#selected_time");
    const new_coupe_btn = document.querySelector("#new_coupe_btn");
    const edit_btn = document.querySelector("#edit_btn");
    const identification = document.querySelector("#identification");
    const form_box = document.querySelector("#form_box");
    dateBox.style.display = "none";
    new_coupe_btn.style.display = "none";
    selected_time_box.style.display = "flex";
    identification.style.display = "block";
    form_box.style.display = "block";
    edit_btn.onclick = () => edit_time();
  };
  const edit_time = () => {
    const dateBox = document.querySelector("#dateTime");
    const selected_time_box = document.querySelector("#selected_time");
    const new_coupe_btn = document.querySelector("#new_coupe_btn");
    const identification = document.querySelector("#identification");
    const form_box = document.querySelector("#form_box");
    dateBox.style.display = "block";
    new_coupe_btn.style.display = "flex";
    selected_time_box.style.display = "none";
    identification.style.display = "none";
    form_box.style.display = "none";
  };
  const get_appointment = async (e) => {
    e.preventDefault();
    if (fullname !== "" && email !== "" && phone !== "") {
      setErrors("");
      await fetch(`${urlName}/create-order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: fullname,
          email: email,
          phone: phone,
          time: dateName,
          coupe: `${appointment.data.toString()} ,`,
        }),
      })
        .then((res) => {
          successMessage.style.display = "block"
          console.log("201 created!")
        })
        .catch((err) => {
          console.log("somthing is wrong!")
        });
    } else {
      setErrors("All fields is required!");
    }
  };
  useEffect(() => {
    dateTimeLoop();
    window.location.href = "/date#dateHeure";
  }, []);
  useEffect(() => {
    appointment.coupe.length < 1 ? (window.location.href = "/#service") : "";
  }, [appointment.coupe]);
  return (
    <div className={styles.DateHeure} id="dateHeure">
      <div className={styles.elementsBox}>
        {appointment.coupe.map((el) => (
          <Coupe key={el.id} data={el} />
        ))}
      </div>
      <Link to="/#service" className={styles.button} id="new_coupe_btn">
        {t("add_service")}
      </Link>
      <h2 className={styles.title}>2.{t("date_title")}</h2>
      <section className={styles.dateTime} id="dateTime">
        <div className={styles.dateTimeBox} id="dateTimeBox"></div>
      </section>
      <div className={styles.selectedTime} id="selected_time">
        <p className={styles.selectedTimeName}>{dateName}</p>
        <button className={styles.selectedTimeButton} id="edit_btn">
          <MdOutlineEdit />
        </button>
      </div>
      <h2 className={styles.title2} id="identification">
        3.{t("identification")}
      </h2>
      <div className={styles.formBox} style={{ display: "none" }} id="form_box">
        <form onSubmit={get_appointment} method="POST">
          <label htmlFor="form_name">{t("name")}*</label>
          <input
            type="text"
            name="name"
            onChange={(e) => setFullname(e.target.value)}
            id="form_name"
          />
          <label htmlFor="form_email">{t("email")}*</label>
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            id="form_email"
          />
          <label htmlFor="form_phone">{t("phone")}*</label>
          <input
            type="tel"
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            id="form_phone"
          />
          <div className={styles.errors}>{errors}</div>
          <button type="submit" className={styles.button}>
            {t("submit")}
          </button>
        </form>
      </div>
      <div id="successMessage">
        <SuccessMessage dateName={dateName} />
      </div>
    </div>
  );
};

export default DateHeure;
