import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {myLogo, cartImg, elogo} from '../assets/index'
import { useTranslation } from 'react-i18next'

const Header = () => {

  const productData = useSelector((state) => state.bazar.productData);

  const userInfo = useSelector((state) => state.bazar.userInfo);

  const {t, i18n} = useTranslation()

  const changeEN = () => {
    i18n.changeLanguage('en')
  }
  const changeAR = () => {
    i18n.changeLanguage('ar')
  }

  return (
    <div className='w-full h-20 bg-white bg-opacity-80 border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50'>
        <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
            <Link to='/'>
              <div>
                  <img src={myLogo} alt='logo' className='w-16' />
              </div>
            </Link>
            <div className='flex gap-8'>
              <ul className='flex items-center gap-8'>
                <Link to='/'>
                  <l className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-200'>{t('Home')}</l>
                </Link>
                <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-200'>{t('Pages')}</li>
                <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-200'>{t('Shop')}</li>
                <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-200'>{t('Element')}</li>
                <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-200'>{t('Blog')}</li>
              </ul>
              <Link to='/cart' className='flex items-center'>
                <div className='relative'>
                  <img src={cartImg} alt='cart' className='w-12' />
                  <span className='absolute top-1 left-6 text-sm flex font-bold'>{productData.length}</span>
                </div>
              </Link>
              <Link to='/login' className='flex items-center gap-3'>
                <img src={userInfo ? userInfo.image : elogo} alt='userImg' className='w-10 h-10 rounded-full' />
                {
                  userInfo && <p className='flex items-center text-base font-titleFont font-semibold underline underline-offset-2'>{userInfo.name}</p>
                }
              </Link>
              <div className='ml-5 flex justify-center items-center gap-2'>
                <button onClick={changeEN} className='bg-gray-100 p-1 border border-gray-300 rounded-md'>EN</button>
                <button onClick={changeAR} className='bg-gray-100 p-1 border border-gray-300 rounded-md'>AR</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Header