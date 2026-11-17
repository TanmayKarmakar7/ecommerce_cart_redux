import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { PackageSearch, ShoppingCart } from 'lucide-react';

const Navbar = () => {

  const cartSelector = useSelector(state => state.cart.items)
  
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <nav className="sticky top-0 left-0 z-50 w-full bg-gray-900 text-white px-6 py-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <h1 className="text-2xl font-bold tracking-wide">
          Redux <span className="text-blue-400">Store</span>
        </h1>

        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/')} className={`${location.pathname === '/' ? "bg-blue-600 text-white" : "text-gray-300 hover:text-white hover:bg-gray-800"} px-4 py-2 rounded-lg   transition duration-200 cursor-pointer flex gap-1`}>
            <PackageSearch size={25} strokeWidth={1.5} />
            <span>Products</span>
          </button>

          <button onClick={() => navigate('/cart')} className={`${location.pathname === '/cart' ? "bg-blue-600 text-white" : "text-gray-300 hover:text-white hover:bg-gray-800"} px-4 py-2 rounded-lg transition duration-200 cursor-pointer flex gap-1`}>
            <ShoppingCart size={25} strokeWidth={1.5} /> 
            <span>({cartSelector.length})</span>
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
