import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export function Slider({ slider }) {
  const [currentSlide, setCurrentSlides] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    if (currentSlide !== slider.length) {
      setCurrentSlides(currentSlide + 1);
    } else {
      setCurrentSlides(1);
    }
  };

  const prevSlide = () => {
    if (currentSlide !== 1) {
      setCurrentSlides(currentSlide - 1);
    } else {
      setCurrentSlides(slider.length);
    }
  };

  const moveCircle = (index) => {
    setCurrentSlides(index);
  };

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="w-full h-[100vh]">
        {
          slider.map((slide, index) => (
            <div
              key={slide.id}
              className={`
                ${currentSlide === index + 1 ? "opacity-100" : "opacity-0"}
                absolute top-0 left-0 right-0 bottom-0 text-center flex-col flex items-center justify-center 
                transition-timing-function: linear transition-opacity ease-linear
              `}
              style={{
                backgroundImage: `url(${slide?.image})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <h3
                className={`w-[80%] mx-auto text-center drop-shadow-lg text-white text-shadow uppercase lg:text-6xl md:text-3xl sm:text-2xl text-xl lg:leading-tight font-bold
                `}
              >
                {slide?.title}
              </h3>

              <Link
                to={slide?.btn_text.route}
                className={`bg-red-500 hover:bg-red-700 block lg:px-10 md:px-6 px-4 mt-5 font-bold text-white cursor-pointer lg:text-[16px] text-[13px] lg:py-5 py-3 tracking-wider`}
              >
                {slide?.btn_text.text}
              </Link>
            </div>
          ))
        }
      </div>

      <button
        onClick={nextSlide}
        className={`w-12 h-12 bg-transparent absolute top-1/2 border-none cursor-pointer text-slate-300 text-lg hover:text-slate right-4`}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>

      <button
        onClick={prevSlide}
        className={`w-12 h-12 bg-transparent absolute top-1/2 border-none cursor-pointer text-slate-300 text-lg hover:text-slate left-4`}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      <div className="flex gap-3 absolute z-10 bottom-8 left-1/2 transform -translate-x-1/2">
        {slider.map((obj, index) => (
          <div
            key={obj.id}
            onClick={() => moveCircle(index + 1)}
            className={`${currentSlide === index + 1
              ? "cursor-pointer w-[13px] h-[13px] rounded-full bg-slate-500"
              : "cursor-pointer bg-white w-[13px] h-[13px] rounded-full"
              }`}
          />
        ))}
      </div>
    </div>
  );
}
