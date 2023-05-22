import React, { useState, useEffect } from 'react';
// Import the CSS file for the component
// import './Carousel.css'; 

export default function Carousel() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    './images/hero/hero_graphite.jpg',
    './images/hero/hero_01.jpg',
    './images/hero/hero_02.jpg',
  ];

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [currentImage, images.length]);

  return (
    <div className="carousel">
      <button className="prev" onClick={prevImage}>Prev</button>
      <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} className="carousel-image" />
      <button className="next" onClick={nextImage}>Next</button>
    </div>
  );
};



