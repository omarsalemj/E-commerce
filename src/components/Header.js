import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { myLogo, cartImg, elogo } from '../assets/index'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi'
import { FiChevronRight } from 'react-icons/fi'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const productData = useSelector((state) => state.bazar.productData)
  const userInfo = useSelector((state) => state.bazar.userInfo)

  const { t, i18n } = useTranslation()

  const changeEN = () => {
    i18n.changeLanguage('en')
  }
  const changeAR = () => {
    i18n.changeLanguage('ar')
  }

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <div className="sticky top-0 z-50 w-full font-titleFont">
      <div className="h-1 w-full bg-gradient-to-r from-orange-500 via-amber-400 to-rose-500" />
      <div className="border-b border-white/70 bg-white/75 shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur-2xl">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link to="/" className="shrink-0">
            <div className="flex items-center gap-3">
              <div className="surface flex h-12 w-12 items-center justify-center overflow-hidden p-1 sm:h-14 sm:w-14">
                <img src={myLogo} alt="logo" className="h-full w-full object-contain" />
              </div>
              <div className="hidden leading-tight sm:block">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-orange-700">Bazar</p>
                <p className="text-sm text-slate-500">Smooth shopping, refined</p>
              </div>
            </div>
          </Link>

          <div className="hidden items-center gap-4 md:flex lg:gap-6">
            <div className="surface-soft flex items-center gap-1 px-2 py-2">
              <Link
                to="/"
                className="rounded-full px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-white hover:text-orange-700 hover:shadow-sm"
              >
                {t('Home')}
              </Link>
              <button className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-white hover:text-slate-900 hover:shadow-sm">
                {t('Pages')}
              </button>
              <button className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-white hover:text-slate-900 hover:shadow-sm">
                {t('Shop')}
              </button>
              <button className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-white hover:text-slate-900 hover:shadow-sm">
                {t('Element')}
              </button>
              <button className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-white hover:text-slate-900 hover:shadow-sm">
                {t('Blog')}
              </button>
            </div>

            <Link to="/cart" className="flex items-center">
              <div className="surface-soft relative flex h-12 w-12 items-center justify-center transition hover:-translate-y-0.5 hover:shadow-lg">
                <img src={cartImg} alt="cart" className="w-8 sm:w-9" />
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-1 text-[11px] font-bold leading-5 text-white shadow-md">
                  {productData.length}
                </span>
              </div>
            </Link>

            <Link
              to="/login"
              className="surface-soft flex items-center gap-3 rounded-full px-2 py-2 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <img src={userInfo ? userInfo.image : elogo} alt="userImg" className="h-10 w-10 rounded-full object-cover ring-2 ring-white shadow-sm" />
              <div className="pr-2 text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">Account</p>
                <p className="max-w-[160px] truncate text-sm font-semibold text-slate-900">
                  {userInfo ? userInfo.name : 'Login'}
                </p>
              </div>
            </Link>

            <div className="surface-soft flex items-center gap-1 p-1">
              <button onClick={changeEN} className="rounded-full px-3 py-1.5 text-sm font-semibold text-slate-700 transition hover:bg-white hover:text-orange-700">
                EN
              </button>
              <button onClick={changeAR} className="rounded-full px-3 py-1.5 text-sm font-semibold text-slate-700 transition hover:bg-white hover:text-orange-700">
                AR
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <Link to="/cart" className="flex items-center">
              <div className="surface-soft relative flex h-11 w-11 items-center justify-center">
                <img src={cartImg} alt="cart" className="w-7" />
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-1 text-[11px] font-bold leading-5 text-white shadow-md">
                  {productData.length}
                </span>
              </div>
            </Link>
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="surface-soft inline-flex h-11 w-11 items-center justify-center text-2xl text-slate-900"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-slate-200/80 bg-white/95 backdrop-blur-2xl md:hidden">
            <div className="mx-auto flex max-w-screen-xl flex-col gap-2 px-4 py-4 sm:px-6">
              <Link to="/" onClick={closeMobileMenu} className="surface-soft flex items-center justify-between px-4 py-3 text-base font-semibold text-slate-900">
                {t('Home')}
                <FiChevronRight className="text-slate-400" />
              </Link>
              <button className="surface-soft flex items-center justify-between px-4 py-3 text-base font-semibold text-slate-900">
                {t('Pages')}
                <FiChevronRight className="text-slate-400" />
              </button>
              <button className="surface-soft flex items-center justify-between px-4 py-3 text-base font-semibold text-slate-900">
                {t('Shop')}
                <FiChevronRight className="text-slate-400" />
              </button>
              <button className="surface-soft flex items-center justify-between px-4 py-3 text-base font-semibold text-slate-900">
                {t('Element')}
                <FiChevronRight className="text-slate-400" />
              </button>
              <button className="surface-soft flex items-center justify-between px-4 py-3 text-base font-semibold text-slate-900">
                {t('Blog')}
                <FiChevronRight className="text-slate-400" />
              </button>

              <Link to="/login" onClick={closeMobileMenu} className="surface mt-2 flex items-center gap-3 px-4 py-3">
                <img src={userInfo ? userInfo.image : elogo} alt="userImg" className="h-10 w-10 rounded-full object-cover" />
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">Account</p>
                  <p className="truncate text-sm font-semibold text-slate-900">{userInfo ? userInfo.name : 'Login'}</p>
                </div>
              </Link>

              <div className="flex items-center gap-2 pt-2">
                <button onClick={changeEN} className="surface-soft flex-1 px-3 py-2 text-sm font-semibold text-slate-700">
                  EN
                </button>
                <button onClick={changeAR} className="surface-soft flex-1 px-3 py-2 text-sm font-semibold text-slate-700">
                  AR
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
