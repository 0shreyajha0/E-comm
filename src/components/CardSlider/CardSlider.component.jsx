import React, { useState } from "react";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import { Card } from "../Card";
import styles from "./CardSlider.module.scss";
import "./CardSlider.css";

export const CardSlider = ({ images }) => {
  const [selectedSlide, setSelectedSlide] = useState(1);

  const handleSlideChange = (index) => {
    setSelectedSlide(index + 1);
  };

  const nextSlide = () => {
    setSelectedSlide((prevSlide) =>
      prevSlide === images.length ? 1 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setSelectedSlide((prevSlide) =>
      prevSlide === 1 ? images.length : prevSlide - 1
    );
  };

  return (
    <div className={styles.cardSlider}>
      <div className={styles.container}>
        {images.map((image, index) => (
          <input
            key={index}
            type="radio"
            name="slider"
            style={{ display: "none" }}
            id={`s${index + 1}`}
            checked={selectedSlide === index + 1}
            onChange={() => handleSlideChange(index)}
          />
        ))}

        <div className="cards">
          {images.map((image, index) => (
            <Card
              key={index}
              currentCard={selectedSlide === index + 1}
              imgSrc={image.src}
              label={image.label}
              labelFor={`s${index + 1}`}
              id={`slide${index + 1}`}
            />
          ))}
        </div>
        <div className={styles.sliderButtonsWrapper}>
          <div className={styles.buttonsWrapper}>
            <div className={styles.navigationIcons}>
              <IoArrowBack onClick={prevSlide} />
            </div>
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`${styles.sliderButton} ${
                  selectedSlide === index + 1 ? `${styles.active}` : ""
                }`}
              ></button>
            ))}
            <div className={styles.navigationIcons}>
              <IoArrowForward onClick={nextSlide} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
