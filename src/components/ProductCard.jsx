import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from '../redux/slice'

const ProductCard = ({ product }) => {

    const dispatch = useDispatch()

    const cartSelector = useSelector(state => state.cart.items)

    const isInCart = cartSelector.find(
      cartItem => cartItem.id === product.id
    )

    const handleAdd = () => {
      dispatch(addItem(product))
    }

    const handleRemove = () => {
      if (window.confirm('Are you sure you want to remove this product from cart?')) { 
        dispatch(removeItem(product))
      }}

    return (
      <div className="group w-full h-full bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col">

        <div className="relative w-full h-56 bg-linear-to-br from-gray-50 to-gray-100 overflow-hidden shrink-0">

          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-full object-contain p-5 group-hover:scale-110 transition-transform duration-500"
          />

          <span className="absolute top-4 left-4 text-xs font-bold uppercase tracking-wider text-blue-700 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
            {product.category}
          </span>

          <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
            <span className="text-yellow-400">★</span>
            <span className="text-sm font-bold text-gray-800">
              {product.rating}
            </span>
          </div>

        </div>

        <div className="p-5 flex flex-col flex-1">

          <h2 className="text-lg font-bold text-gray-900 line-clamp-2 min-h-14 group-hover:text-blue-600 transition-colors">
            {product.title}
          </h2>

          <p className="text-gray-500 text-sm mt-2 leading-relaxed line-clamp-2 min-h-10">
            {product.description}
          </p>

          <div className="mt-auto pt-5">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs text-gray-400 font-medium mb-1">
                  PRICE
                </p>
                <span className="text-2xl font-extrabold text-gray-900">
                  ${product.price}
                </span>
              </div>

              <span className="text-xs text-gray-400 font-medium mt-4">
                Inclusive of all taxes
              </span>
            </div>

            {isInCart ? (
              <button onClick={handleRemove} className="w-full flex items-center justify-center gap-2 bg-red-50 hover:bg-red-500 text-red-600 hover:text-white border border-red-200 hover:border-red-500 py-3 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer">Remove From Cart</button>
            ) : (
              <button
                onClick={handleAdd}
                disabled={product.stock === 0}
                className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg"
              >
                <span>＋</span>
                Add to Cart
              </button>
            )}

          </div>

        </div>
      </div>
    )
}

export default ProductCard
