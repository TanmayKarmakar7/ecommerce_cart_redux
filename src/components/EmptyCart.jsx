import { ShoppingCart } from 'lucide-react'
import React from 'react'

const EmptyCart = () => {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center shadow-sm">
        <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-5xl">
            <ShoppingCart size={36} strokeWidth={1.5} />
        </div>

        <h2 className="text-2xl font-bold text-slate-800 mt-6">
            Your Cart is Empty
        </h2>

        <p className="text-slate-500 mt-2">
            You haven't added any products yet.
        </p>
    </div>
  )
}

export default EmptyCart
