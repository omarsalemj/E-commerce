import React from 'react'
import { BsFillCartPlusFill } from 'react-icons/bs'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import { MdOutlineClose } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import Swal from 'sweetalert2'
import { deleteItem, resetCart, decreamentQuantity, increamentQuantity } from '../redux/bazarSlice'

const CartItem = () => {
  const dispatch = useDispatch()
  const productData = useSelector((state) => state.bazar.productData)

  const deleteProduct = (item) => {
    Swal.fire({
      title: `Are you sure to Remove ${item.title} !`,
      showCancelButton: true,
    }).then((data) => {
      if (data.isConfirmed) {
        dispatch(deleteItem(item._id))
        toast.error(`${item.title} is removed`)
      }
    })
  }

  const resetTheCart = () => {
    Swal.fire({
      title: 'Are you sure to Reset the cart!',
      showCancelButton: true,
    }).then((data) => {
      if (data.isConfirmed) {
        dispatch(resetCart())
        toast.error('Your cart is Empty!')
      }
    })
  }

  return (
    <div className='w-full lg:w-2/3 lg:pr-10'>
      <div className='mb-4'>
        <span className='section-badge'>Your selection</span>
        <h2 className='mt-4 text-3xl font-semibold tracking-tight text-slate-900'>Shopping cart</h2>
      </div>

      <div className='space-y-4'>
        {productData.length > 0 ? (
          productData.map((item) => (
            <div key={item._id} className='surface-soft grid gap-4 p-4 sm:grid-cols-[auto,1fr,auto] sm:items-center sm:gap-6'>
              <div className='flex items-center gap-3 min-w-0'>
                <button onClick={() => deleteProduct(item)} className='icon-chip h-10 w-10 shrink-0 bg-slate-50 text-slate-500 hover:text-rose-600' aria-label={`Remove ${item.title}`}>
                  <MdOutlineClose className='text-xl' />
                </button>
                <img src={item.image} alt={item.title} className='h-24 w-24 rounded-2xl object-cover sm:h-28 sm:w-28' />
              </div>

              <div className='min-w-0 space-y-2'>
                <h3 className='text-sm font-semibold leading-6 text-slate-900 sm:text-base'>{item.title}</h3>
                <p className='text-xs uppercase tracking-[0.2em] text-slate-500'>{item.description?.slice(0, 40)}...</p>
                <p className='text-sm font-medium text-slate-500'>${item.price} each</p>
              </div>

              <div className='flex flex-col gap-3 sm:items-end'>
                <div className='surface-soft flex items-center justify-between gap-4 px-4 py-3 sm:w-52'>
                  <p className='text-sm font-medium text-slate-600'>Quantity</p>
                  <div className='flex items-center gap-3 font-semibold text-slate-900'>
                    <button
                      onClick={() =>
                        dispatch(
                          decreamentQuantity({
                            _id: item._id,
                            title: item.title,
                            image: item.image,
                            price: item.price,
                            quantity: 1,
                            description: item.description,
                          })
                        )
                      }
                      className='icon-chip h-8 w-8 bg-slate-50 text-base'
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        dispatch(
                          increamentQuantity({
                            _id: item._id,
                            title: item.title,
                            image: item.image,
                            price: item.price,
                            quantity: 1,
                            description: item.description,
                          })
                        )
                      }
                      className='icon-chip h-8 w-8 bg-slate-50 text-base'
                    >
                      +
                    </button>
                  </div>
                </div>
                <p className='text-right text-lg font-semibold text-slate-950'>${item.quantity * item.price}</p>
              </div>
            </div>
          ))
        ) : (
          <div className='surface flex flex-col items-center justify-center gap-4 px-6 py-14 text-center'>
            <p className='text-lg font-semibold text-slate-900 sm:text-2xl'>Your cart is empty.</p>
            <p className='max-w-md text-sm leading-6 text-slate-500'>
              Please go back and choose some products to continue your shopping journey.
            </p>
            <Link to='/' className='mt-2 inline-flex items-center gap-3 text-slate-900 transition hover:text-orange-600'>
              <BsFillCartPlusFill className='text-5xl sm:text-6xl' />
            </Link>
          </div>
        )}
      </div>

      <div className='mt-8 flex flex-wrap items-center gap-4'>
        <button
          style={productData.length === 0 ? { display: 'none' } : { display: 'inline-flex' }}
          onClick={resetTheCart}
          className='rounded-full bg-rose-500 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-rose-600'
        >
          Reset Cart
        </button>

        <Link to='/' className='inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-slate-950'>
          <HiOutlineArrowLeft />
          Go shopping
        </Link>
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

export default CartItem
