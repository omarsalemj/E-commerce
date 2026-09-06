import React, { useEffect, useState } from 'react'
import { MdOutlineStar } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { useLocation, Link } from 'react-router-dom'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import { toast, ToastContainer } from 'react-toastify'
import { addToCart } from '../redux/bazarSlice'

const Product = () => {
  const dispatch = useDispatch()
  const [details, setDetails] = useState({})
  const [baseQty, setBaseQty] = useState(1)

  const location = useLocation()
  const selectedItem = location.state?.item

  useEffect(() => {
    setDetails(selectedItem || {})
  }, [selectedItem])

  return (
    <section className='px-4 py-8 sm:px-6 lg:px-8 lg:py-12'>
      <div className='mx-auto grid max-w-screen-xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10'>
        <div className='surface relative overflow-hidden p-4 sm:p-5'>
          <img
            src={details.image}
            alt='productImg'
            className='h-[22rem] w-full rounded-[1.25rem] object-cover bg-slate-100 sm:h-[28rem] lg:h-[38rem]'
          />
          {details.isNew && (
            <span className='absolute right-4 top-4 rounded-full bg-slate-950 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-lg'>
              Sale
            </span>
          )}
        </div>

        <div className='surface flex flex-col justify-center gap-6 p-5 sm:p-7 lg:p-8'>
          <div className='space-y-4'>
            <span className='section-badge w-fit'>Product details</span>
            <h2 className='text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl'>
              {details.title || 'Loading product...'}
            </h2>
            <div className='flex flex-wrap items-center gap-4 text-sm sm:text-base'>
              <p className='text-slate-500 line-through'>${details.oldPrice}</p>
              <p className='text-2xl font-semibold text-slate-950'>${details.price}</p>
            </div>
          </div>

          <div className='flex items-center gap-2 text-base text-amber-400'>
            <div className='flex text-lg'>
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
            </div>
            <p className='text-xs text-slate-500'>(1 Customer review)</p>
          </div>

          <p className='text-sm leading-7 text-slate-600 sm:text-base'>{details.description}</p>

          <p className='text-sm text-slate-500'>
            Category: <span className='font-medium capitalize text-slate-900'>{details.category}</span>
          </p>

          <div className='flex flex-col gap-4 sm:flex-row sm:items-center'>
            <div className='surface-soft flex w-full items-center justify-between gap-4 px-4 py-3 sm:w-56'>
              <p className='text-sm font-medium text-slate-600'>Quantity</p>
              <div className='flex items-center gap-3 font-semibold text-slate-900'>
                <button onClick={() => setBaseQty((prev) => Math.max(1, prev - 1))} className='icon-chip h-8 w-8 bg-slate-50 text-base'>
                  -
                </button>
                <span className='min-w-6 text-center'>{baseQty}</span>
                <button onClick={() => setBaseQty((prev) => prev + 1)} className='icon-chip h-8 w-8 bg-slate-50 text-base'>
                  +
                </button>
              </div>
            </div>

            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: details._id,
                    title: details.title,
                    image: details.image,
                    price: details.price,
                    quantity: baseQty,
                    description: details.description,
                  })
                ) && toast.success(`${details.title} is added`)
              }
              className='primary-button w-full sm:w-auto'
            >
              add to cart
            </button>
          </div>

          <Link to='/' className='inline-flex w-fit items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-slate-950'>
            <HiOutlineArrowLeft />
            Go shopping
          </Link>
        </div>
      </div>

      <ToastContainer
        position='top-left'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </section>
  )
}

export default Product
