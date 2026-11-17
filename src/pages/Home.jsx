import React, { useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import { fetchProducts } from '../redux/productSlice.js'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {

  const dispatch = useDispatch()

  const products = useSelector(state => state.products.items)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])
  

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Home
