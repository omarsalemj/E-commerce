import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { ToastContainer, toast } from 'react-toastify';
import CartItem from '../components/CartItem';

const Cart = () => {

  const productData = useSelector((state) => state.bazar.productData)
  const userInfo = useSelector((state) => state.bazar.userInfo)

  const [totalAmt, setTotalAmt] = useState('')
  const [payNow, setPayNow] = useState(false)

  useEffect(() => {
    let price = 0
    productData.map((item) => {
      price += item.price * item.quantity
      return price
    })
    setTotalAmt(price.toFixed(2))
  }, [productData])

  const handleCheckout = () => {
    if(userInfo){
      setPayNow(true)
    }else{
      toast.error('Please sign in to Checkout!')
    }
  }

  return (
    <div>
      <img src='https://images.hdqwalls.com/download/swimming-pool-water-dt-2560x1440.jpg' alt='cartImg' className='w-full h-40 sm:h-52 lg:h-60 object-cover' />

      <div className='max-w-screen-xl mx-auto py-10 lg:py-20 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8'>
        <CartItem />
        <div className='w-full lg:w-1/3 bg-[#fafafa] py-6 px-4 rounded-md'>
          <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
            <h2 className='text-xl sm:text-2xl font-semibold'>cart totals</h2>
            <p className='flex items-center justify-between gap-4 text-sm sm:text-base'>
              Subtotal <span className='font-titleFont font-bold text-lg'>$ {totalAmt}</span>
            </p>
            <p className='flex items-start justify-between gap-4 text-sm sm:text-base'>
              <span>Shipping</span> <span className='text-right'>Omar Salem youssef mahmoud hassan el-Jafaary omar Salem Ahmed Youssef.</span>
            </p>
          </div>
          <p className='font-titleFont font-semibold flex justify-between mt-6'>
            Total <span className='text-lg sm:text-xl font-bold'>$ {totalAmt}</span>
          </p>
          <button onClick={handleCheckout} className='text-sm sm:text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-200 rounded-md'>proceed to checkout</button>
          {
            payNow && <div className='w-full mt-6 flex items-center justify-center'>
              <StripeCheckout
                stripeKey='pk_test_51MrUxZIqfRJqpKS7Baqjca4D1G6FZ8fOzXcBksDPBCX0hQ9uiNxG8fgCECgx77VnwP96ZXcEo9h3UH5QG1knZvcc00TtRg2rAP'
                name='Bazar Online Shopping'
                amount={totalAmt * 100}
                label='Pay to bazar'
                description={`Your Payment amount is $${totalAmt}`}
                email={userInfo.email}
              />
            </div>
          }
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

export default Cart
