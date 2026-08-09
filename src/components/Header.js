import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {myLogo, cartImg, elogo} from '../assets/index'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi'
import { FiChevronRight } from 'react-icons/fi'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const productData = useSelector((state) => state.bazar.productData);

  const userInfo = useSelector((state) => state.bazar.userInfo);

  const {t, i18n} = useTranslation()

  const changeEN = () => {
    i18n.changeLanguage('en')
  }
  const changeAR = () => {
    i18n.changeLanguage('ar')
  }

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <div className='w-full sticky top-0 z-50 font-titleFont'>
      <div className='h-1 w-full bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500' />
      <div className='bg-white/85 backdrop-blur-xl border-b border-white/60 shadow-[0_8px_30px_rgba(15,23,42,0.06)]'>
        <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4'>
            <Link to='/'>
              <div className='flex items-center gap-3'>
                  <div className='h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-gradient-to-br from-black via-slate-900 to-orange-900 p-1 shadow-lg'>
                    <img src={myLogo} alt='logo' className='w-full h-full object-contain' />
                  </div>
                  <div className='hidden sm:block leading-tight'>
                    <p className='text-[11px] uppercase tracking-[0.24em] text-orange-700 font-semibold'>Bazar</p>
                    <p className='text-sm text-slate-500'>Everyday shopping</p>
                  </div>
              </div>
            </Link>
            <div className='hidden md:flex items-center gap-6 lg:gap-8'>
              <ul className='flex items-center gap-2 lg:gap-3 bg-slate-100/80 rounded-full px-2 py-2 border border-slate-200'>
                <li>
                  <Link to='/' className='px-4 py-2 rounded-full text-sm lg:text-base text-slate-900 font-semibold hover:bg-white hover:shadow-sm hover:text-orange-700 transition-all duration-200'>{t('Home')}</Link>
                </li>
                <li className='px-4 py-2 rounded-full text-sm lg:text-base text-slate-700 font-semibold hover:bg-white hover:shadow-sm hover:text-orange-700 transition-all duration-200 cursor-pointer'>{t('Pages')}</li>
                <li className='px-4 py-2 rounded-full text-sm lg:text-base text-slate-700 font-semibold hover:bg-white hover:shadow-sm hover:text-orange-700 transition-all duration-200 cursor-pointer'>{t('Shop')}</li>
                <li className='px-4 py-2 rounded-full text-sm lg:text-base text-slate-700 font-semibold hover:bg-white hover:shadow-sm hover:text-orange-700 transition-all duration-200 cursor-pointer'>{t('Element')}</li>
                <li className='px-4 py-2 rounded-full text-sm lg:text-base text-slate-700 font-semibold hover:bg-white hover:shadow-sm hover:text-orange-700 transition-all duration-200 cursor-pointer'>{t('Blog')}</li>
              </ul>
              <Link to='/cart' className='flex items-center'>
                <div className='relative flex items-center justify-center h-12 w-12 rounded-full bg-slate-100 border border-slate-200 hover:bg-orange-50 hover:border-orange-200 transition-colors'>
                  <img src={cartImg} alt='cart' className='w-8 sm:w-9' />
                  <span className='absolute -top-1 -right-1 h-5 min-w-5 px-1 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 text-[11px] leading-5 text-white flex items-center justify-center font-bold shadow-md'>
                    {productData.length}
                  </span>
                </div>
              </Link>
              <Link to='/login' className='flex items-center gap-2 lg:gap-3 rounded-full pl-1 pr-3 py-1.5 bg-slate-100 border border-slate-200 hover:bg-white hover:shadow-sm transition-all'>
                <img src={userInfo ? userInfo.image : elogo} alt='userImg' className='w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover ring-2 ring-white shadow-sm' />
                {
                  userInfo ? <p className='hidden lg:flex items-center text-sm font-semibold max-w-[160px] truncate'>{userInfo.name}</p> : <p className='hidden lg:flex items-center text-sm font-semibold text-slate-500'>Login</p>
                }
              </Link>
              <div className='flex justify-center items-center gap-2 bg-slate-100 rounded-full p-1 border border-slate-200'>
                <button onClick={changeEN} className='px-3 py-1.5 rounded-full text-sm font-semibold text-slate-700 hover:bg-white hover:text-orange-700 transition-colors'>EN</button>
                <button onClick={changeAR} className='px-3 py-1.5 rounded-full text-sm font-semibold text-slate-700 hover:bg-white hover:text-orange-700 transition-colors'>AR</button>
              </div>
            </div>
            <div className='flex md:hidden items-center gap-3'>
              <Link to='/cart' className='flex items-center'>
                <div className='relative flex items-center justify-center h-11 w-11 rounded-full bg-slate-100 border border-slate-200'>
                  <img src={cartImg} alt='cart' className='w-8' />
                  <span className='absolute -top-1 -right-1 h-5 min-w-5 px-1 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 text-[11px] leading-5 text-white flex items-center justify-center font-bold shadow-md'>
                    {productData.length}
                  </span>
                </div>
              </Link>
              <button
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className='inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-2xl text-slate-900 shadow-sm'
                aria-label='Toggle menu'
              >
                {mobileMenuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
              </button>
            </div>
        </div>
        {mobileMenuOpen && (
          <div className='md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl'>
            <div className='max-w-screen-xl mx-auto px-4 py-4 flex flex-col gap-2'>
              <Link to='/' onClick={closeMobileMenu} className='flex items-center justify-between rounded-2xl px-4 py-3 bg-slate-50 border border-slate-200 text-base font-semibold text-slate-900'>
                {t('Home')}
                <FiChevronRight className='text-slate-400' />
              </Link>
              <p className='flex items-center justify-between rounded-2xl px-4 py-3 bg-slate-50 border border-slate-200 text-base font-semibold text-slate-900'>{t('Pages')} <FiChevronRight className='text-slate-400' /></p>
              <p className='flex items-center justify-between rounded-2xl px-4 py-3 bg-slate-50 border border-slate-200 text-base font-semibold text-slate-900'>{t('Shop')} <FiChevronRight className='text-slate-400' /></p>
              <p className='flex items-center justify-between rounded-2xl px-4 py-3 bg-slate-50 border border-slate-200 text-base font-semibold text-slate-900'>{t('Element')} <FiChevronRight className='text-slate-400' /></p>
              <p className='flex items-center justify-between rounded-2xl px-4 py-3 bg-slate-50 border border-slate-200 text-base font-semibold text-slate-900'>{t('Blog')} <FiChevronRight className='text-slate-400' /></p>
              <Link to='/login' onClick={closeMobileMenu} className='flex items-center gap-3 mt-2 rounded-2xl px-4 py-3 bg-gradient-to-r from-slate-900 to-slate-700 text-white shadow-lg'>
                <img src={userInfo ? userInfo.image : elogo} alt='userImg' className='w-10 h-10 rounded-full object-cover' />
                <div>
                  <p className='text-sm font-semibold'>Account</p>
                  {userInfo && <p className='text-xs text-white/75 truncate max-w-[220px]'>{userInfo.name}</p>}
                </div>
              </Link>
              <div className='flex items-center gap-2 pt-2'>
                <button onClick={changeEN} className='flex-1 bg-slate-100 px-3 py-2 border border-slate-200 rounded-xl text-sm font-semibold text-slate-700'>EN</button>
                <button onClick={changeAR} className='flex-1 bg-slate-100 px-3 py-2 border border-slate-200 rounded-xl text-sm font-semibold text-slate-700'>AR</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
