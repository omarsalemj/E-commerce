import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { addToCart } from '../redux/bazarSlice'

const ProductsCard = ({ product }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const _id = product.title.toLowerCase().split(' ').join('')

  const handleDetails = () => {
    navigate(`/product/${_id}`, {
      state: {
        item: product,
      },
    })
  }

  return (
    <article className='surface-soft group relative overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(15,23,42,0.12)]'>
      <div className='relative cursor-pointer overflow-hidden' onClick={handleDetails}>
        <div className='absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(15,23,42,0)_40%,rgba(15,23,42,0.18)_100%)] opacity-0 transition duration-300 group-hover:opacity-100' />
        <img
          src={product.image}
          alt='productImg'
          className='h-[22rem] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[24rem]'
          loading='lazy'
        />
        {product.isNew && (
          <span className='absolute left-4 top-4 z-20 rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-lg'>
            Sale
          </span>
        )}
      </div>

      <div className='space-y-4 p-4 sm:p-5'>
        <div className='flex items-start justify-between gap-3'>
          <div className='min-w-0 flex-1'>
            <h2 className='h-12 overflow-hidden text-sm font-semibold leading-6 text-slate-900 sm:text-base'>
              {product.title.substring(0, 48)}
            </h2>
            <p className='mt-2 text-xs uppercase tracking-[0.22em] text-slate-500'>{product.category}</p>
          </div>
          <div className='shrink-0 text-right'>
            <p className='text-xs text-slate-400 line-through'>${product.oldPrice}</p>
            <p className='text-base font-semibold text-slate-900 sm:text-lg'>${product.price}</p>
          </div>
        </div>

        <button
          onClick={() =>
            dispatch(
              addToCart({
                _id: product._id,
                title: product.title,
                image: product.image,
                price: product.price,
                quantity: 1,
                description: product.description,
              })
            ) && toast.success(`${product.title} is added`)
          }
          className='secondary-button w-full justify-between border-slate-200 bg-slate-50 text-slate-700 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-700'
        >
          <span>Add to cart</span>
          <BsArrowRight />
        </button>
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
    </article>
  )
}

export default ProductsCard
