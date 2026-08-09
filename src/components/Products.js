import React from 'react'
import ProductsCard from './ProductsCard'

const Products = ({products}) => {
    return (
        <div className='py-10 px-4 sm:px-6 lg:px-8'>
            <div className='flex flex-col items-center gap-4'>
                <h1 className='text-xl sm:text-2xl bg-black text-white py-2 px-4 w-full max-w-[20rem] text-center'>
                    shopping everyday
                </h1>
                <span className='w-20 h-[3px] bg-black'></span>
                <p className='max-w-[700px] text-sm sm:text-base text-gray-600 text-center leading-6'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan elit purus. In venenatis laoreet quam eu eleifend. Praesent porttitor ligula mauris, sed dignissim dolor elementum id. Phasellus eu dignissim nisl. Nullam nec ullamcorper eros. Donec ullamcorper nulla elit.
                </p>
            </div>

            <div className='max-w-screen-xl mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-10'>
                {
                    products.map((item) => (
                        <ProductsCard key={item._id} product={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default Products
