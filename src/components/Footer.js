import React from 'react'
import {ImGithub} from 'react-icons/im'
import {FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaHome} from 'react-icons/fa'
import {MdLocationOn} from 'react-icons/md'
import {BsPersonFill, BsPaypal} from 'react-icons/bs'
import { myLogo, visaLogo } from '../assets'

const Footer = () => {
  return (
    <div className='bg-black text-[#949494] py-20 font-titleFont'>
        <div className='max-w-screen-xl mx-auto grid grid-cols-4'>

            <div className='flex flex-col gap-6'>
                <img src={myLogo} alt='logo' className='w-24' />
                <p className='text-white text-sm tracking-wide'>&copy; OMerna.com</p>
                <div className='flex gap-3'>
                    <img src={visaLogo} alt='visa' className='w-8' />
                    <img src={visaLogo} alt='visa' className='w-8' />
                    <img src={visaLogo} alt='visa' className='w-8' />
                    <img src={visaLogo} alt='visa' className='w-8' />
                </div>
                <div className='flex gap-5 text-lg text-gray-400'>
                    <ImGithub className='hover:text-white duration-200 cursor-pointer' />
                    <FaYoutube className='hover:text-white duration-200 cursor-pointer' />
                    <FaFacebookF className='hover:text-white duration-200 cursor-pointer' />
                    <FaTwitter className='hover:text-white duration-200 cursor-pointer' />
                    <FaInstagram className='hover:text-white duration-200 cursor-pointer' />
                </div>
            </div>

            <div>
                <h2 className='text-2xl font-semibold text-white mb-4'>locate us</h2>
                <div className='text-base flex flex-col gap-6'>
                    <p>Egypt, Gharbya, Al-Mahalla Al-Kubra</p>
                    <p>mobile: +201021087077</p>
                    <p>Phone: +201092304152</p>
                    <p>Email: OMerna@gmail.com</p>
                </div>
            </div>

            <div>
                <h2 className='text-2xl font-semibold text-white mb-4'>profile</h2>
                <div className='text-base flex flex-col gap-6'>
                    <p className='flex items-center gap-3 hover:text-white duration-200 cursor-pointer'>
                        <span><BsPersonFill /></span> my account
                    </p>
                    <p className='flex items-center gap-3 hover:text-white duration-200 cursor-pointer'>
                        <span><BsPaypal /></span> checkout
                    </p>
                    <p className='flex items-center gap-3 hover:text-white duration-200 cursor-pointer'>
                        <span><FaHome /></span> order tracking
                    </p>
                    <p className='flex items-center gap-3 hover:text-white duration-200 cursor-pointer'>
                        <span><MdLocationOn /></span> help & support
                    </p>
                </div>
            </div>

            <div className='flex flex-col justify-center'>
                <input className='bg-transparent border px-4 py-3 text-sm' placeholder='e-mail' type='text' />
                <button className='text-sm text-white border border-t-0 hover:bg-gray-900 active:bg-white active:text-black py-2'>
                    Subscribe
                </button>
            </div>

        </div>
    </div>
  )
}

export default Footer