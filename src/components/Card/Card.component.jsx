import React from "react";
import styles from "./Card.module.scss";

export const Card = ({ imgSrc, labelFor, id, currentCard, label }) => (
  <label htmlFor={labelFor} id={id}>
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img className={styles.cardImage} src={imgSrc} alt={label} />
      </div>
      <div
        className={`${styles.cardHeading} ${
          currentCard ? `${styles.activeCard}` : ""
        }`}
      >
        <p>{label}</p>
      </div>
    </div>
  </label>
);
