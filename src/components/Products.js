import React from 'react'
import ProductsCard from './ProductsCard'

const Products = ({ products = [] }) => {
  return (
    <section className='px-4 py-10 sm:px-6 lg:px-8 lg:py-14'>
      <div className='mx-auto max-w-screen-xl space-y-10'>
        <div className='flex flex-col items-start gap-4 text-left sm:items-center sm:text-center'>
          <span className='section-badge'>Curated picks</span>
          <h1 className='section-title'>Shopping everyday, made smoother.</h1>
          <p className='section-copy'>
            A calmer product grid with cleaner spacing, softer elevation, and a more modern visual hierarchy while keeping the same browsing flow.
          </p>
        </div>

        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-8'>
          {products.map((item) => (
            <ProductsCard key={item._id} product={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
