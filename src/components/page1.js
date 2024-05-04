import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './styles.css';
import './Carousel.js' ;


const Page1 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex === 2 ? 0 : prevIndex + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevSlide = () => {
    setActiveIndex(prevIndex => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const handleNextSlide = () => {
    setActiveIndex(prevIndex => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  return (
    <section style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="carousel" id="myCarousel">
        <Carousel
          selectedItem={activeIndex}
          onChange={setActiveIndex}
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          infiniteLoop={true}
          autoPlay={false}
          interval={5000}
        >
          <div>
            <img src="one.png" alt="Slide 1" />
          </div>
          <div>
            <img src="two.png" alt="Slide 2" />
          </div>
          <div>
            <img src="three.png" alt="Slide 3" />
          </div>
        </Carousel>
        <button className="carousel-control-prev" onClick={handlePrevSlide}>
          &lt;
        </button>
        <button className="carousel-control-next" onClick={handleNextSlide}>
          &gt;
        </button>
      </div>
    </section>
  );
};

export default Page1;





