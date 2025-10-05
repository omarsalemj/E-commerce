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
    <div className='w-2/3 pr-10'>
        <div className='w-full'>
            <h2 className='font-titleFont text-2xl'>shopping cart</h2>
        </div>
        <div>
            {
                productData.length > 0 ? productData.map((item) => (
                    <div className='flex items-center justify-between gap-6 mt-6' key={item._id}>
                        <div className='flex items-center gap-2'>
                            <MdOutlineClose onClick={() => deleteProduct(item)} className='text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-150' />
                            <img src={item.image} alt={item.title} className='w-32 h-32 object-cover' />
                        </div>

                        <h2 className='w-52'>{item.title}</h2>

                        <p className='w-10'>${item.price}</p>

                        <div className='w-52 flex items-center justify-between text-gray-500 gap-4 border p-3'>
                            <p className='text-sm'>Quantity</p>
                            <div className='flex items-center gap-4 font-semibold'>
                                <button onClick={() => dispatch(decreamentQuantity({
                                    _id: item._id,
                                    title: item.title,
                                    image: item.image,
                                    price: item.price,
                                    quantity: 1,
                                    description: item.description
                                }))} className='border px-2 h-5 flex items-center text-lg hover:bg-gray-700 hover:text-white duration-200 active:bg-black'>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => dispatch(increamentQuantity({
                                    _id: item._id,
                                    title: item.title,
                                    image: item.image,
                                    price: item.price,
                                    quantity: 1,
                                    description: item.description
                                }))} className='border px-2 h-5 flex items-center text-lg hover:bg-gray-700 hover:text-white duration-200 active:bg-black'>+</button>
                            </div>
                        </div>

                        <p className='w-14'>${item.quantity * item.price}</p>
                    </div>
                )) :
                    <p className='felx items-center justify-center text-center my-10 py-10 bg-gray-100 text-red-700 text-2xl'>Your cart is Empty!<br/> Please go and select some products <Link to='/'><BsFillCartPlusFill className='mx-auto mt-8 text-7xl'/></Link></p>
            }
        </div>

        <button style={productData.length === 0 ? {display: 'none'} : {display: 'block'}} onClick={resetTheCart} className='bg-red-500 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800 duration-200'>Reset Cart
        </button>

        <Link to='/'>
            <button className='mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300'>
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