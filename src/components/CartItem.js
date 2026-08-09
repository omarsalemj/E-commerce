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
            showCancelButton: true
        }).then((data) => {
            if(data.isConfirmed){
                dispatch(deleteItem(item._id))
                toast.error(`${item.title} is removed`)
            }
        })
    }

    const resetTheCart = () => {
        Swal.fire({
            title: `Are you sure to Reset the cart!`,
            showCancelButton: true
        }).then((data) => {
            if(data.isConfirmed){
                dispatch(resetCart())
                toast.error('Your cart is Empty!')
            }
        })
    }

  return (
    <div className='w-full lg:w-2/3 lg:pr-10'>
        <div className='w-full'>
            <h2 className='font-titleFont text-xl sm:text-2xl'>shopping cart</h2>
        </div>
        <div>
            {
                productData.length > 0 ? productData.map((item) => (
                    <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 mt-6 border-b pb-4' key={item._id}>
                        <div className='flex items-center gap-3 min-w-0'>
                            <MdOutlineClose onClick={() => deleteProduct(item)} className='text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-150' />
                            <img src={item.image} alt={item.title} className='w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-md' />
                        </div>

                        <h2 className='w-full sm:w-52 text-sm sm:text-base break-words'>{item.title}</h2>

                        <p className='w-full sm:w-16 text-sm sm:text-base'>${item.price}</p>

                        <div className='w-full sm:w-52 flex items-center justify-between text-gray-500 gap-4 border p-3 rounded-md'>
                            <p className='text-sm'>Quantity</p>
                            <div className='flex items-center gap-4 font-semibold'>
                                <button onClick={() => dispatch(decreamentQuantity({
                                    _id: item._id,
                                    title: item.title,
                                    image: item.image,
                                    price: item.price,
                                    quantity: 1,
                                    description: item.description
                                }))} className='border px-2 h-6 flex items-center text-lg hover:bg-gray-700 hover:text-white duration-200 active:bg-black'>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => dispatch(increamentQuantity({
                                    _id: item._id,
                                    title: item.title,
                                    image: item.image,
                                    price: item.price,
                                    quantity: 1,
                                    description: item.description
                                }))} className='border px-2 h-6 flex items-center text-lg hover:bg-gray-700 hover:text-white duration-200 active:bg-black'>+</button>
                            </div>
                        </div>

                        <p className='w-full sm:w-20 text-sm sm:text-base font-medium'>${item.quantity * item.price}</p>
                    </div>
                )) :
                    <p className='flex items-center justify-center text-center my-10 py-10 bg-gray-100 text-red-700 text-lg sm:text-2xl rounded-md'>Your cart is Empty!<br/> Please go and select some products <Link to='/'><BsFillCartPlusFill className='mx-auto mt-8 text-6xl sm:text-7xl'/></Link></p>
            }
        </div>

        <button style={productData.length === 0 ? {display: 'none'} : {display: 'block'}} onClick={resetTheCart} className='bg-red-500 text-white mt-8 py-2 px-6 hover:bg-red-800 duration-200 rounded-md'>
          Reset Cart
        </button>

        <Link to='/'>
            <button className='mt-8 flex items-center gap-1 text-gray-400 hover:text-black duration-300'>
                <span><HiOutlineArrowLeft /></span> Go shopping
            </button>
        </Link>

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
