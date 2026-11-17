import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import EmptyCart from '../components/EmptyCart';
import ProductSummary from '../components/ProductSummary';

const Cart = () => {

  const cartSelector = useSelector(state => state.cart.items)

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 md:px-8">

      <div className="max-w-7xl mx-auto">

        {cartSelector.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            <div className="space-y-4">
              {cartSelector.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
            </div>

            <ProductSummary />
          </>
        )}

      </div>
    </div>
  )
}

export default Cart
