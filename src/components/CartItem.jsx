import React from "react";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeItem } from "../redux/slice";
import { Trash } from 'lucide-react';

const CartItem = ({ product }) => {

    const dispatch = useDispatch();

    const quantity = product.quantity || 1;
    const totalPrice = product.price * quantity;

    const handleRemove = () => {
      if (window.confirm("Are you sure you want to remove this product?")) {
        dispatch(removeItem(product));
      }
    };

    const handleIncrease = () => {
      dispatch(increaseQuantity(product.id));
    };

    const handleDecrease = () => {
        dispatch(decreaseQuantity(product.id));
    };

    return (
      <div className="group relative bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row gap-5 sm:gap-6 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50 transition-all duration-300">

        <div className="relative w-full sm:w-36 h-44 sm:h-36 shrink-0 bg-linear-to-br from-slate-50 to-indigo-50 rounded-xl overflow-hidden">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
          />

          <span className="absolute top-2 left-2 bg-white/90 backdrop-blur text-[10px] font-bold uppercase tracking-wider text-indigo-600 px-2.5 py-1 rounded-full shadow-sm">
            {product.category}
          </span>
        </div>

        <div className="flex-1 min-w-0 flex flex-col justify-center text-center sm:text-left">

          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-800 group-hover:text-indigo-600 transition-colors line-clamp-1">
              {product.title}
            </h2>

            <p className="text-sm text-slate-500 mt-2 leading-relaxed line-clamp-2">
              {product.description}
            </p>
          </div>

          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-3 mt-4">

            <span className="flex items-center gap-1.5 text-sm font-semibold text-slate-600">
              <span className="text-amber-400 text-lg">★</span>
              {product.rating}
            </span>

            <span className="w-1 h-1 rounded-full bg-slate-300" />

            <span className={`flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${
              product.stock > 0
                ? "bg-emerald-50 text-emerald-600"
                : "bg-red-50 text-red-500"
            }`}>
              <span className={`w-1.5 h-1.5 rounded-full ${
                product.stock > 0 ? "bg-emerald-500" : "bg-red-500"
              }`} />
              {product.stock > 0 ? "In Stock" : "Out of Stock"}
            </span>
          </div>
        </div>

        <div className="sm:w-28 shrink-0 flex flex-col items-center justify-center border-t sm:border-t-0 sm:border-l border-slate-100 pt-4 sm:pt-0 sm:pl-5">

          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
            Quantity
          </p>

        <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl p-1">

          <button
            onClick={handleDecrease}
            disabled={quantity <= 1}
            className="w-9 h-9 flex items-center justify-center rounded-lg font-bold bg-indigo-600 text-white hover:bg-indigo-700 disabled:bg-white disabled:text-slate-400 disabled:cursor-not-allowed transition"
          >
            −
          </button>

          <span className="min-w-5 text-center font-bold text-slate-800">
            {quantity}
          </span>

          <button
            onClick={handleIncrease}
            disabled={quantity >= product.stock}
            className="w-9 h-9 flex items-center justify-center rounded-lg font-bold bg-indigo-600 text-white hover:bg-indigo-700 disabled:bg-white disabled:text-slate-400 disabled:cursor-not-allowed transition"
          >
            +
          </button>

        </div>
        </div>

        <div className="sm:w-32 shrink-0 flex flex-col items-center justify-center border-t sm:border-t-0 sm:border-l border-slate-100 pt-4 sm:pt-0 sm:pl-5">

          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Total Price
          </p>

          <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            ${totalPrice.toFixed(2)}
          </h3>

          <p className="text-xs text-slate-400 mt-1">
            ${product.price.toFixed(2)} / item
          </p>
        </div>

        <div className="shrink-0 flex items-center justify-center sm:border-l border-slate-100 sm:pl-4">
          <button
            onClick={handleRemove}
            className="w-full sm:w-12 h-20 flex items-center justify-center rounded-xl bg-red-50 text-red-500 hover:bg-red-500 hover:text-white hover:shadow-lg hover:shadow-red-200 transition-all duration-300 cursor-pointer"
          >
            <Trash size={25} strokeWidth={1} />
          </button>
        </div>

      </div>
    );
};

export default CartItem;
