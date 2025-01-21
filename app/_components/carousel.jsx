"use client"
import React, { useEffect, useState } from 'react';

const Carousel = () => {
  const slides = ['./slide1.jpg', './slide2.jpg', './slide3.jpg', './slide4.jpg'];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [slides.length]);

  return (
    <div className="carousel w-full relative">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-item relative w-full ${
            currentSlide === index ? 'block' : 'hidden'
          }`}
        >
          <img src={slide} alt={`Slide ${index + 1}`} className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <button
              onClick={() => setCurrentSlide((index - 1 + slides.length) % slides.length)}
              className="btn btn-circle"
            >
              ❮
            </button>
            <button
              onClick={() => setCurrentSlide((index + 1) % slides.length)}
              className="btn btn-circle"
            >
              ❯
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
