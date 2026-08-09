import React from 'react'
import {ImGithub} from 'react-icons/im'
import {FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaHome} from 'react-icons/fa'
import {MdLocationOn} from 'react-icons/md'
import {BsPersonFill, BsPaypal} from 'react-icons/bs'
import { myLogo, visaLogo } from '../assets'

const Footer = () => {
  return (
    <div className='relative overflow-hidden bg-[#050816] text-[#a3a3a3] py-16 sm:py-20 font-titleFont px-4 sm:px-6 lg:px-8'>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(249,115,22,0.18),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(251,191,36,0.12),_transparent_24%)]' />
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 lg:gap-12'>
            <div className='flex flex-col gap-6'>
                <div className='flex items-center gap-3'>
                  <img src={myLogo} alt='logo' className='w-20 h-20 rounded-2xl bg-white/5 p-2 ring-1 ring-white/10 shadow-lg' />
                  <div>
                    <p className='text-[11px] uppercase tracking-[0.28em] text-amber-400'>Omar</p>
                    <p className='text-white text-sm'>Modern shopping</p>
                  </div>
                </div>
                <p className='max-w-xs text-sm leading-6'>
                  Built for smooth browsing, quick checkout, and a cleaner product discovery experience on every screen.
                </p>
                <div className='flex flex-wrap gap-3'>
                    <img src={visaLogo} alt='visa' className='w-8 opacity-90' />
                    <img src={visaLogo} alt='visa' className='w-8 opacity-90' />
                    <img src={visaLogo} alt='visa' className='w-8 opacity-90' />
                    <img src={visaLogo} alt='visa' className='w-8 opacity-90' />
                </div>
                <div className='flex gap-3 text-lg text-gray-300'>
                    <span className='flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white hover:text-slate-900 transition-colors cursor-pointer'><ImGithub /></span>
                    <span className='flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white hover:text-slate-900 transition-colors cursor-pointer'><FaYoutube /></span>
                    <span className='flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white hover:text-slate-900 transition-colors cursor-pointer'><FaFacebookF /></span>
                    <span className='flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white hover:text-slate-900 transition-colors cursor-pointer'><FaTwitter /></span>
                    <span className='flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white hover:text-slate-900 transition-colors cursor-pointer'><FaInstagram /></span>
                </div>
            </div>

            <div>
                <h2 className='text-xl sm:text-2xl font-semibold text-white mb-5'>Locate Us</h2>
                <div className='text-sm sm:text-base flex flex-col gap-4 leading-7'>
                    <p className='max-w-xs'>Egypt, Gharbya, Al-Mahalla Al-Kubra</p>
                    <p>Mobile: +201021087077</p>
                    <p>Phone: +201092304152</p>
                    <p>Email: Omar@gmail.com</p>
                </div>
            </div>

            <div>
                <h2 className='text-xl sm:text-2xl font-semibold text-white mb-5'>Profile</h2>
                <div className='text-sm sm:text-base flex flex-col gap-4'>
                    <p className='flex items-center gap-3 hover:text-white duration-200 cursor-pointer'>
                        <span className='text-amber-400'><BsPersonFill /></span> my account
                    </p>
                    <p className='flex items-center gap-3 hover:text-white duration-200 cursor-pointer'>
                        <span className='text-amber-400'><BsPaypal /></span> checkout
                    </p>
                    <p className='flex items-center gap-3 hover:text-white duration-200 cursor-pointer'>
                        <span className='text-amber-400'><FaHome /></span> order tracking
                    </p>
                    <p className='flex items-center gap-3 hover:text-white duration-200 cursor-pointer'>
                        <span className='text-amber-400'><MdLocationOn /></span> help & support
                    </p>
                </div>
            </div>

            <div className='flex flex-col justify-center'>
                <div className='rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm shadow-lg'>
                  <h3 className='text-white text-lg font-semibold'>Stay in the loop</h3>
                  <p className='mt-2 text-sm leading-6 text-gray-300'>
                    Get updates on new arrivals, offers, and product drops.
                  </p>
                  <input className='mt-5 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm w-full text-white placeholder:text-gray-500 outline-none focus:border-amber-400' placeholder='e-mail' type='text' />
                  <button className='mt-3 text-sm font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 active:bg-white py-3 w-full rounded-xl transition-colors'>
                      Subscribe
                  </button>
                </div>
            </div>
        </div>

        <div className='mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs sm:text-sm text-gray-400'>
          <p>&copy; 2026 Omar.com. All rights reserved.</p>
          <p>Designed for responsive shopping across desktop and mobile.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
