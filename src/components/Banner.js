import React, { useEffect, useState } from 'react'
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const Banner = () => {
  const [currentSlide, setcurrentSlide] = useState(0)
  const slider = [
    'https://images.pexels.com/photos/1087727/pexels-photo-1087727.jpeg',
    'https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg',
    'https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg',
    'https://images.pexels.com/photos/749353/pexels-photo-749353.jpeg',
  ]

  const prevSlide = () => {
    setcurrentSlide((prev) => (prev === 0 ? slider.length - 1 : prev - 1))
  }
  const nextSlide = () => {
    setcurrentSlide((prev) => (prev === slider.length - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setcurrentSlide((prev) => (prev === slider.length - 1 ? 0 : prev + 1))
    }, 4500)

    return () => clearInterval(slideInterval)
  }, [slider.length])

  return (
    <section className="px-4 pt-4 sm:px-6 sm:pt-6 lg:px-8 lg:pt-8">
      <div className="surface relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          {slider.map((image, index) => (
            <img
              key={image}
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-in-out ${
                currentSlide === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
              src={image}
              alt={`Slide ${index + 1}`}
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          ))}
        </div>

        <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(2,6,23,0.9)_0%,rgba(2,6,23,0.7)_36%,rgba(2,6,23,0.4)_64%,rgba(2,6,23,0.18)_100%)]" />
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.16),transparent_26%)]" />

        <div className="relative z-20 grid min-h-[72vh] items-end lg:min-h-[82vh] lg:grid-cols-[1.08fr_0.92fr]">
          <div className="flex flex-col justify-center px-6 pb-8 pt-16 sm:px-8 sm:pb-10 lg:px-14 lg:py-16">
            <div className="section-badge w-fit border-white/15 bg-white/10 text-white backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-orange-300 shadow-[0_0_18px_rgba(251,191,36,0.9)]" />
              New season collection
            </div>
            <h1 className="mt-5 max-w-xl text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-7xl">
              Style that feels
              <span className="block text-orange-300">fresh, clean, and ready.</span>
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-100/90 sm:text-base lg:text-lg">
              Explore curated picks with a sharper visual edge, smoother transitions, and a calmer shopping experience from first scroll to checkout.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/" className="primary-button bg-white text-slate-950 hover:bg-orange-50">
                Shop now <HiArrowRight />
              </Link>
              <div className="secondary-button border-white/15 bg-white/10 text-white backdrop-blur-sm hover:border-white/25 hover:bg-white/15 hover:text-white">
                Free delivery over $50
              </div>
            </div>
          </div>

          <div className="hidden h-full items-end justify-end p-6 lg:flex">
            <div className="surface-soft max-w-sm border-white/10 bg-white/10 p-5 text-white backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-orange-300">Featured mood</p>
              <h2 className="mt-3 text-2xl font-semibold">Built for a smoother browse.</h2>
              <p className="mt-3 text-sm leading-6 text-slate-100/85">
                Clean surfaces, rounded controls, and a layout that keeps the products feeling more premium without changing how the app works.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-200">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">New arrivals</div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">Fast checkout</div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">Mobile ready</div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">Smooth UI</div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-20 flex items-center justify-between gap-4 px-4 pb-4 sm:px-6 sm:pb-6 lg:px-8 lg:pb-8">
          <div className="flex gap-2 sm:gap-3">
            {slider.map((_, index) => (
              <button
                key={index}
                onClick={() => setcurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'w-8 bg-white sm:w-10' : 'w-2 bg-white/45 hover:bg-white/70 sm:w-2.5'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="icon-chip border-white/20 bg-white/10 text-white hover:bg-white hover:text-slate-900"
              aria-label="Previous slide"
            >
              <HiArrowLeft />
            </button>
            <button
              onClick={nextSlide}
              className="icon-chip border-white/20 bg-white/10 text-white hover:bg-white hover:text-slate-900"
              aria-label="Next slide"
            >
              <HiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
