import React from 'react'
import { ImGithub } from 'react-icons/im'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaArrowRight } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
import { BsPersonFill, BsPaypal } from 'react-icons/bs'
import { myLogo, visaLogo } from '../assets'

const Footer = () => {
  return (
    <footer className="relative overflow-hidden px-4 py-16 font-titleFont text-slate-300 sm:px-6 sm:py-20 lg:px-8">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#020617_0%,#0f172a_60%,#111827_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,146,60,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_24%)]" />

      <div className="relative mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 gap-10 xl:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] xl:gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src={myLogo} alt="logo" className="h-16 w-16 rounded-2xl bg-white/5 p-2 ring-1 ring-white/10 shadow-lg" />
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-orange-300">Omar</p>
                <p className="text-sm text-white">Modern shopping</p>
              </div>
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-300">
              A smoother storefront with a cleaner visual rhythm, faster scanning, and a calmer checkout flow across desktop and mobile.
            </p>
            <div className="flex flex-wrap gap-3">
              {[visaLogo, visaLogo, visaLogo, visaLogo].map((logo, index) => (
                <img key={index} src={logo} alt="payment" className="h-8 w-auto opacity-90" />
              ))}
            </div>
            <div className="flex gap-3 text-lg text-slate-300">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white hover:text-slate-900 cursor-pointer"><ImGithub /></span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white hover:text-slate-900 cursor-pointer"><FaYoutube /></span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white hover:text-slate-900 cursor-pointer"><FaFacebookF /></span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white hover:text-slate-900 cursor-pointer"><FaTwitter /></span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white hover:text-slate-900 cursor-pointer"><FaInstagram /></span>
            </div>
          </div>

          <div>
            <h2 className="mb-5 text-xl font-semibold text-white sm:text-2xl">Locate Us</h2>
            <div className="flex flex-col gap-4 text-sm leading-7 text-slate-300 sm:text-base">
              <p className="max-w-xs">Egypt, Gharbya, Al-Mahalla Al-Kubra</p>
              <p>Mobile: +201021087077</p>
              <p>Phone: +201092304152</p>
              <p>Email: Omar@gmail.com</p>
            </div>
          </div>

          <div>
            <h2 className="mb-5 text-xl font-semibold text-white sm:text-2xl">Profile</h2>
            <div className="flex flex-col gap-4 text-sm text-slate-300 sm:text-base">
              <p className="flex items-center gap-3 transition duration-200 cursor-pointer hover:text-white">
                <span className="text-orange-300"><BsPersonFill /></span> my account
              </p>
              <p className="flex items-center gap-3 transition duration-200 cursor-pointer hover:text-white">
                <span className="text-orange-300"><BsPaypal /></span> checkout
              </p>
              <p className="flex items-center gap-3 transition duration-200 cursor-pointer hover:text-white">
                <span className="text-orange-300"><FaArrowRight /></span> order tracking
              </p>
              <p className="flex items-center gap-3 transition duration-200 cursor-pointer hover:text-white">
                <span className="text-orange-300"><MdLocationOn /></span> help & support
              </p>
            </div>
          </div>

          <div className="surface border-white/10 bg-white/5 p-5 text-slate-200 shadow-lg backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-white">Stay in the loop</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Get updates on new arrivals, offers, and product drops.
            </p>
            <input className="input-surface mt-5 bg-white text-slate-900 placeholder:text-slate-400" placeholder="Email address" type="email" />
            <button className="secondary-button mt-3 w-full border-white/10 bg-white px-4 py-3 text-slate-900 hover:bg-orange-50">
              Subscribe
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:text-sm">
          <p>&copy; 2026 Omar.com. All rights reserved.</p>
          <p>Designed for responsive shopping across desktop and mobile.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
