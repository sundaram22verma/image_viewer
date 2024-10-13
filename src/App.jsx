import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image_1 from './assets/Designer-1.png';
import image_2 from './assets/Designer-2.png';
import image_3 from './assets/Designer-3.png';
import image_4 from './assets/Designer-4.png';
import image_5 from './assets/Designer-5.png';
import image_6 from './assets/Designer-6.png';
import image_7 from './assets/Designer-7.png';
import image_8 from './assets/Designer-8.png';

import React, { useState, useEffect } from "react";
import Slider from "react-slick"; 
import './App.css';

const images = [
  { id: 1, src: image_1, alt: "Image 1" },
  { id: 2, src: image_2, alt: "Image 2" },
  { id: 3, src: image_3, alt: "Image 3" },
  { id: 4, src: image_4, alt: "Image 4" },
  { id: 5, src: image_5, alt: "Image 5" },
  { id: 6, src: image_6, alt: "Image 6" },
  { id: 7, src: image_7, alt: "Image 7" },
  { id: 8, src: image_8, alt: "Image 8" },
];

function App() {
  const [selectedImage, setSelectedImage] = useState(images[0].src);
  const [isFading, setIsFading] = useState(false);

  // Function to handle image switching with fade effect
  const handleImageChange = (newImage) => {
    if (selectedImage !== newImage) {
      setIsFading(true);  // Start fade-out
      setTimeout(() => {
        setSelectedImage(newImage); // Change image after fade-out
        setIsFading(false);  // Trigger fade-in
      }, 500); // Adjust this time to match the fade-out duration
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, 
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="app">
      {/* Main Image with Fade-in/Fade-out Effect */}
      <div className="main-image-container">
        <img
          className={`main-image ${isFading ? "fade-out" : "fade-in"}`}
          src={selectedImage}
          alt="Selected"
        />
      </div>

      {/* Thumbnail Slider */}
      <Slider {...settings} className="thumbnail-slider">
        {images.map((image) => (
          <div key={image.id} onClick={() => handleImageChange(image.src)}>
            <img
              src={image.src}
              alt={image.alt}
              className={`thumbnail ${selectedImage === image.src ? "active" : ""}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default App;
