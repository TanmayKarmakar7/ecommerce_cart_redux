import React from "react";
import { Eraser, ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { clearItems } from "../redux/slice";
import { useNavigate } from "react-router-dom";

const ProductSummary = () => {

    const dispatch = useDispatch()
    const cartSelector = useSelector(state => state.cart.items)
    const navigate = useNavigate()

    const totalItems = cartSelector.reduce(
        (total, item) => total + (item.quantity || 1), 0
    )

    const totalPrice = cartSelector.reduce(
        (total, item) => total + item.price * (item.quantity || 1), 0
    )

    const handleClear = () => {
        if (window.confirm('Are you sure you want to clear all products from cart?')) {
        dispatch(clearItems())
        }
    }

    const handleOrder = () => {
        alert("You Order Placed 🎉")
        dispatch(clearItems())
        navigate('/')
    }

    return (
        <div className="mt-8 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 md:p-8 flex flex-col sm:flex-row justify-between items-center gap-6">
                {/* Total Items */}
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                        <ShoppingCart size={25} strokeWidth={1.5} />
                    </div>

                    <div>
                        <p className="text-sm text-slate-500 font-medium">Total Items</p>

                        <h2 className="text-2xl font-extrabold text-slate-900">
                        {totalItems}
                        </h2>
                    </div>
                </div>

                {/* Total Amount */}
                <div className="text-center">
                    <p className="text-sm text-slate-500 font-medium">Grand Total</p>

                    <h2 className="text-3xl md:text-4xl font-extrabold text-blue-600 mt-1">
                        ${totalPrice.toFixed(2)}
                    </h2>
                </div>

                {/* Checkout */}
                <div className="flex gap-2 items-center">
                    <button
                        onClick={handleClear}
                        disabled={cartSelector.length === 0}
                        className="w-full sm:w-auto px-4 py-4 bg-red-500 hover:bg-red-600 text-white rounded-xl font-bold transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                        <Eraser size={25} strokeWidth={1.5} />
                    </button>
                    <button
                        disabled={cartSelector.length === 0}
                        onClick={handleOrder}
                        className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                        Place Order →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductSummary;
