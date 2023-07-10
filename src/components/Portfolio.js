import React, { useState } from 'react';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

const Portfolio = () => {
    const images = [
      image1,
      image2,
      image3,
      // Add more image imports here
    ];
  

  const [currentImage, setCurrentImage] = useState(0);

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
console.log(process.env.PUBLIC_URL, images[1])
  return (
    <section id="portfolio" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl text-center mb-8">Portfolio</h2>
        <div className="relative">
          <img
            src={process.env.PUBLIC_URL + images[currentImage]}
            alt={`Image ${currentImage + 1}`}
            className="mx-auto rounded-lg"
          />
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2"
            onClick={prevImage}
          >
            Prev
          </button>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2"
            onClick={nextImage}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
