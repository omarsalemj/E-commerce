import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { addToCart } from '../redux/bazarSlice'

const ProductsCard = ({product}) => {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const _id = (product.title).toLowerCase().split(' ').join('')

  const handleDetails = () => {
    navigate(`/product/${_id}`, {
      state: {
        item: product,
      }
    })
  }

  return (
    <div className='group relative'>
      <div className='w-full h-72 sm:h-80 lg:h-96 cursor-pointer overflow-hidden rounded-t-md' onClick={handleDetails}>
        <img src={product.image} alt='productImg' className='w-full h-full object-cover group-hover:scale-110 duration-500' />
      </div>

      <div className='w-full border-[1px] px-3 py-4 rounded-b-md bg-white'>
        <div className='flex justify-between items-start gap-3'>
          <div className='min-w-0'>
            <h2 className='font-titleFont text-sm sm:text-base font-bold h-10 sm:h-12 overflow-hidden'>{product.title.substring(0, 28)}</h2>
          </div>
          <div className='relative flex gap-2 overflow-hidden shrink-0'>
            <div className='flex gap-2 transform group-hover:translate-x-24 transition-transform duration-500 w-28 justify-end'>
              <p className='line-through text-gray-500 text-sm'>${product.oldPrice}</p>
              <p className='font-semibold text-sm sm:text-base'>${product.price}</p>
            </div>
            <button onClick={() => dispatch(addToCart({
              _id: product._id,
              title: product.title,
              image: product.image,
              price: product.price,
              quantity: 1,
              description: product.description
            })) && toast.success(`${product.title} is added`)} className='absolute z-20 w-[100px] text-gray-500 hover:text-gray-900 flex items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500 text-sm'>
              add to cart <span><BsArrowRight /></span>
            </button>
          </div>
        </div>
        <div>
          <p className='text-sm text-gray-600 capitalize'>{product.category}</p>
        </div>
        <div className='absolute top-4 right-0'>
          {product.isNew && <p className='bg-black text-white font-semibold font-titleFont px-4 sm:px-6 py-1 text-sm'>Sale</p>}
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
    </div>
  )
}

export default ProductsCard
