import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { ToastContainer, toast } from 'react-toastify'
import CartItem from '../components/CartItem'

const Cart = () => {
  const productData = useSelector((state) => state.bazar.productData)
  const userInfo = useSelector((state) => state.bazar.userInfo)

  const [totalAmt, setTotalAmt] = useState('0.00')
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
    if (userInfo) {
      setPayNow(true)
    } else {
      toast.error('Please sign in to Checkout!')
    }
  }

  return (
    <section className='px-4 py-6 sm:px-6 lg:px-8 lg:py-10'>
      <div className='mx-auto max-w-screen-xl space-y-8'>
        <div className='surface relative overflow-hidden p-5 sm:p-6 lg:p-8'>
          <div className='absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,0.92)_0%,rgba(30,41,59,0.8)_50%,rgba(249,115,22,0.12)_100%)]' />
          <img src='https://images.hdqwalls.com/download/swimming-pool-water-dt-2560x1440.jpg' alt='cartImg' className='absolute inset-0 h-full w-full object-cover opacity-25' />
          <div className='relative z-10 flex min-h-[12rem] flex-col justify-end gap-3 text-white sm:min-h-[14rem]'>
            <span className='section-badge w-fit border-white/10 bg-white/10 text-white backdrop-blur-sm'>Checkout</span>
            <h1 className='max-w-2xl text-3xl font-black tracking-tight sm:text-5xl'>A smoother cart and a calmer checkout flow.</h1>
            <p className='max-w-2xl text-sm leading-7 text-slate-100/80 sm:text-base'>
              Review your products, adjust quantities, and complete payment in a cleaner, more refined layout.
            </p>
          </div>
        </div>

        <div className='grid gap-8 lg:grid-cols-[1.2fr_0.8fr]'>
          <CartItem />

          <aside className='surface h-fit p-5 sm:p-6'>
            <div className='space-y-5 border-b border-slate-200 pb-5'>
              <h2 className='text-2xl font-semibold tracking-tight text-slate-900'>Cart totals</h2>
              <p className='flex items-center justify-between gap-4 text-sm sm:text-base text-slate-600'>
                Subtotal <span className='font-semibold text-slate-900'>$ {totalAmt}</span>
              </p>
              <p className='flex items-start justify-between gap-4 text-sm sm:text-base text-slate-600'>
                <span>Shipping</span>
                <span className='text-right'>Standard delivery included at checkout.</span>
              </p>
            </div>

            <p className='mt-6 flex justify-between font-semibold text-slate-900'>
              Total <span className='text-xl font-bold'>$ {totalAmt}</span>
            </p>

            <button onClick={handleCheckout} className='primary-button mt-6 w-full'>
              Proceed to checkout
            </button>

            {payNow && (
              <div className='mt-6 flex w-full items-center justify-center'>
                <StripeCheckout
                  stripeKey='pk_test_51MrUxZIqfRJqpKS7Baqjca4D1G6FZ8fOzXcBksDPBCX0hQ9uiNxG8fgCECgx77VnwP96ZXcEo9h3UH5QG1knZvcc00TtRg2rAP'
                  name='Bazar Online Shopping'
                  amount={totalAmt * 100}
                  label='Pay to bazar'
                  description={`Your Payment amount is $${totalAmt}`}
                  email={userInfo.email}
                />
              </div>
            )}
          </aside>
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

export default Cart
