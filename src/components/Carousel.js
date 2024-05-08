import React, { useEffect, useState } from "react";

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 3000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [currentSlide, slides.length]);

  return (
    <div
      id="default-carousel"
      className="relative w-full max-w-96 h-full"
      data-carousel="slide"
    >
      <div className="relative overflow-hidden rounded-lg mb-12 pb-2">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`h-full transition-all ease-linear duration-1000 ${
              index === currentSlide ? "block" : "hidden"
            }`}
            data-carousel-item
          >
            <h2 className="text-4xl font-semibold leading-10">{slide.data}</h2>
          </div>
        ))}
      </div>

      <div className="z-30 flex bottom-5 space-x-3 rtl:space-x-reverse">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-2.5 h-2.5 rounded-full duration-300 ${
              index === currentSlide
                ? "bg-[#2DA950]"
                : "bg-[#E4E3E3] hover:bg-[#CAD0CB]"
            }`}
            aria-current={index === currentSlide}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
            data-carousel-slide-to={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
