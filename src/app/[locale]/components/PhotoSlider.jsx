"use client";

import { useEffect, useState } from "react";

const desktopSlides = [
  "/profile-1.png",
  "/profile-2.png",
  "/profile-3.png",
];

const mobileSlides = [
  "/profile-2.png",
  "/profile-3.png",
];

export default function PhotoSlider() {
  const [isMobile, setIsMobile] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");

    const updateDevice = () => {
      setIsMobile(mediaQuery.matches);
      setActive(0);
    };

    updateDevice();

    mediaQuery.addEventListener("change", updateDevice);

    return () => {
      mediaQuery.removeEventListener("change", updateDevice);
    };
  }, []);

  const slides = isMobile
    ? mobileSlides
    : desktopSlides;

  useEffect(() => {
    if (slides.length <= 1) {
      return;
    }

    const timer = setInterval(() => {
      setActive((current) =>
        current === slides.length - 1
          ? 0
          : current + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="photo-slider">
      {slides.map((src, index) => {
        const isProfileOne =
          src.includes("profile-1");

        return (
          <img
            key={src}
            src={src}
            alt=""
            draggable="false"
            className={`
              slider-image
              ${
                isProfileOne
                  ? "slider-profile-1"
                  : ""
              }
              ${
                index === active
                  ? "slider-active"
                  : "slider-hidden"
              }
            `}
          />
        );
      })}

      <div className="photo-overlay" />

      <div className="photo-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`Slide ${index + 1}`}
            className={`dot ${
              active === index
                ? "dot-active"
                : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}