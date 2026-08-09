import React ,{useEffect, useState} from 'react'
import {HiArrowRight,HiArrowLeft}  from "react-icons/hi"
import { Link } from 'react-router-dom'

const Banner = () => {
    const [currentSlide, setcurrentSlide] = useState(0);
    const slider=[
        'https://images.pexels.com/photos/1087727/pexels-photo-1087727.jpeg',
        'https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg',
        'https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg',
        'https://images.pexels.com/photos/749353/pexels-photo-749353.jpeg'
    ];

    const prevSlide =()=>{
        setcurrentSlide((prev) => (prev === 0 ? slider.length - 1 : prev - 1));
    };
    const nextSlide =()=>{
        setcurrentSlide((prev) => (prev === slider.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setcurrentSlide((prev) => (prev === slider.length - 1 ? 0 : prev + 1))
        }, 4500)

        return () => clearInterval(slideInterval)
    }, [slider.length])


  return (
    <div className="w-full h-auto overflow-x-hidden bg-[#0f172a]">
      <div className="relative w-full">
        <div className="relative overflow-hidden shadow-[0_24px_80px_rgba(15,23,42,0.24)]">
          <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(2,6,23,0.88)_0%,rgba(2,6,23,0.72)_34%,rgba(2,6,23,0.42)_62%,rgba(2,6,23,0.22)_100%)]" />
          <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.18),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.14),_transparent_26%)]" />

          <div className="relative h-[60vh] sm:h-[70vh] lg:h-[88vh]">
            {slider.map((image, index) => (
              <img
                key={image}
                className={`absolute inset-0 z-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
                  currentSlide === index
                    ? "opacity-45 scale-100"
                    : "opacity-0 scale-105"
                }`}
                src={image}
                alt={`Slide ${index + 1}`}
                loading={index === 0 ? "eager" : "lazy"}
              />
            ))}
          </div>

          <div className="absolute inset-0 z-20 flex flex-col justify-between">
            <div className="px-5 sm:px-8 lg:px-14 pt-6 sm:pt-10 lg:pt-14 max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/25 px-4 py-2 text-white/90 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_18px_rgba(251,191,36,0.9)]" />
                <span className="text-xs sm:text-sm uppercase tracking-[0.3em]">
                  New season collection
                </span>
              </div>
              <h1 className="mt-5 text-3xl sm:text-5xl lg:text-7xl font-black tracking-tight text-white leading-[1.05] drop-shadow-lg">
                Style that feels
                <span className="block text-amber-300">
                  fresh, clean, and ready.
                </span>
              </h1>
              <p className="mt-4 max-w-xl text-sm sm:text-base lg:text-lg text-slate-100/90 leading-7">
                Explore curated picks with a sharper visual edge,
                mobile-friendly browsing, and the essentials your everyday
                wardrobe needs.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm sm:text-base font-semibold text-slate-900 shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5"
                >
                  Shop now <HiArrowRight />
                </Link>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/35 px-5 py-3 text-sm sm:text-base font-semibold text-white backdrop-blur-sm">
                  Free delivery over $50
                </div>
              </div>
            </div>

            <div className="flex items-end justify-between gap-4 p-4 sm:p-6 lg:p-8">
              <div className="flex gap-2 sm:gap-3">
                {slider.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setcurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? "w-8 sm:w-10 bg-white"
                        : "w-2 sm:w-2.5 bg-white/45 hover:bg-white/70"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-3">
                <div
                  onClick={prevSlide}
                  className="w-11 sm:w-12 h-11 sm:h-12 rounded-full border border-white/20 bg-white/10 text-white flex items-center justify-center hover:cursor-pointer hover:bg-white hover:text-slate-900 active:scale-95 duration-200 backdrop-blur-sm"
                >
                  <HiArrowLeft />
                </div>
                <div
                  onClick={nextSlide}
                  className="w-11 sm:w-12 h-11 sm:h-12 rounded-full border border-white/20 bg-white/10 text-white flex items-center justify-center hover:cursor-pointer hover:bg-white hover:text-slate-900 active:scale-95 duration-200 backdrop-blur-sm"
                >
                  <HiArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner
