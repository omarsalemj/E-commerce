import React, { useEffect, useState } from 'react'
import { MdOutlineStar } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import { toast, ToastContainer } from 'react-toastify'
import { addToCart } from '../redux/bazarSlice'

const Product = () => {

    const dispatch = useDispatch()

    const [details, setDetails] = useState({})

    let [baseQty, setBaseQty] = useState(1)

    const location = useLocation() 
    const selectedItem = location.state?.item

    useEffect(() => {
        setDetails(selectedItem || {})
    }, [selectedItem])

  return (
    <div className='px-4 sm:px-6 lg:px-8'>
        <div className='max-w-screen-xl mx-auto my-8 lg:my-10 flex flex-col lg:flex-row gap-8 lg:gap-10'>

            <div className='w-full lg:w-2/5 relative'>
                <img src={details.image} alt='productImg' className='w-full h-[320px] sm:h-[420px] lg:h-[550px] object-cover rounded-md bg-gray-100' />
                <div className='absolute top-4 right-0'>
                {
                    details.isNew && (<p className='bg-black text-white font-semibold font-titleFont px-8 py-1'>Sale</p>)
                }
                </div>
            </div>

            <div className='w-full lg:w-3/5 flex flex-col justify-center gap-6 lg:gap-8'>
                <div>
                    <h2 className='text-2xl sm:text-3xl lg:text-4xl font-semibold'>{details.title || 'Loading product...'}</h2>
                    <div className='flex gap-4 items-center mt-3'>
                        <p className='line-through font-base text-gray-500'>${details.oldPrice}</p>
                        <p className='text-xl sm:text-2xl font-medium text-gray-900'>${details.price}</p>
                    </div>
                </div>

                <div className='flex items-center gap-2 text-base'>
                    <div className='flex'>
                        <MdOutlineStar />
                        <MdOutlineStar />
                        <MdOutlineStar />
                        <MdOutlineStar />
                        <MdOutlineStar />
                    </div>
                    <p className='text-xs text-gray-500'>(1 Customer review)</p>
                </div>

                <p className='text-sm sm:text-base text-gray-500 -mt-3 leading-7'>{details.description}</p>

                <p className='text-sm sm:text-base text-gray-500'>Category: <span className='font-medium capitalize'>{details.category}</span></p>

                <div className='flex flex-col sm:flex-row gap-4 sm:items-center'>
                    <div className='w-full sm:w-52 flex items-center justify-between text-gray-500 gap-4 border p-3 rounded-md'>
                        <p className='text-sm'>Quantity</p>
                        <div className='flex items-center gap-4 font-semibold'>
                            <button onClick={() => setBaseQty(baseQty === 1 ? baseQty = 1 : baseQty - 1)} className='border px-2 h-6 flex items-center text-lg hover:bg-gray-700 hover:text-white duration-200 active:bg-black'>-</button>
                            <span>{baseQty}</span>
                            <button onClick={() => setBaseQty(baseQty + 1)} className='border px-2 h-6 flex items-center text-lg hover:bg-gray-700 hover:text-white duration-200 active:bg-black'>+</button>
                        </div>
                    </div>
                    <button onClick={() => dispatch(addToCart({
                        _id: details._id,
                        title: details.title,
                        image: details.image,
                        price: details.price,
                        quantity: baseQty,
                        description: details.description
                    })) && toast.success(`${details.title} is added`)} className='bg-black text-white py-3 px-6 active:bg-gray-800 rounded-md w-full sm:w-auto'>add to cart</button>
                </div>

                <Link to='/'>
                    <button className='mt-5 flex items-center gap-1 text-gray-400 hover:text-black duration-300'>
                        <span><HiOutlineArrowLeft /></span> Go shopping
                    </button>
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
    </div>
  )
}

export default Product
