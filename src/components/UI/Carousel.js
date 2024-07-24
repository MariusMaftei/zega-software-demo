import React, { useEffect, useState, useRef } from "react";
import classes from "./Carousel.module.css";
import CarouselCard from "../cards/CarouselCard";

const TRANSITION_INTERVAL = 3000;
const TRANSITION_DURATION = 1000;

export default function Carousel({ carouselData, onClick }) {
  const [images, setImages] = useState(carouselData);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    if (images.length <= 1) return;

    let interval;

    if (!isPaused) {
      interval = setInterval(() => {
        if (carouselRef.current) {
          carouselRef.current.style.transition = `transform ${TRANSITION_DURATION}ms ease-in-out`;
          carouselRef.current.style.transform = `translateX(-200%)`;
        }
      }, TRANSITION_INTERVAL);
    }

    return () => clearInterval(interval);
  }, [isPaused, images]);

  const handleTransitionEnd = () => {
    if (images.length <= 1) return;

    if (carouselRef.current) {
      setImages((prevImages) => {
        const newImages = [...prevImages];
        const movedImage = newImages.shift();
        newImages.push(movedImage);

        carouselRef.current.style.transition = "none";
        carouselRef.current.style.transform = `translateX(-100%)`;

        void carouselRef.current.offsetWidth;

        carouselRef.current.style.transition = `transform ${TRANSITION_DURATION}ms ease-in-out`;

        return newImages;
      });
    }
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div
      className={classes.carousel}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={carouselRef}
        className={classes.carouselInner}
        style={{
          transform: `translateX(${images.length <= 1 ? "0%" : "-100%"})`,
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {images.map((data, index) => (
          <div key={index} className={classes.carouselSlide}>
            <div
              className={classes.carouselImage}
              style={{ backgroundImage: `url(${data.url})` }}
            >
              <div className={classes.carouselText}>
                <CarouselCard
                  title={data.title}
                  description={data.description}
                  secondDescription={data.secondDescription}
                  buttonText={data.buttonText}
                  buttonType={data.buttonType}
                  onClick={() => onClick(data.buttonText)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
