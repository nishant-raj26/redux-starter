"use client";
import React from "react";
import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { decrementQty, incrementQty, removeFromCart } from "@/redux/slices/cartSlice";
const CartProduct = ({ cartItem }) => {
  const dispatch = useDispatch();
  const handleItemDelete = (cartId) => {
    dispatch(removeFromCart(cartId));
    toast.success("Removed Succesfully");
  };

  const handleQtyIncrement = (cartId) => {
    dispatch(incrementQty(cartId));
    toast.success("Incremented");
  };

  const handleQtyDecrement = (cartId) => {
    dispatch(decrementQty(cartId));
    toast.success("Decremented");
  };

  return (
    <div className="flex items-center justify-between border-b border-slate-400  pb-3 font-semibold text-sm mb-4">
      <div className="flex items-center gap-3">
        <Image
          src={cartItem.image}
          width={249}
          height={249}
          alt={cartItem.title}
          className="rounded-xl w-20 h-20"
        />
        <div className="flex flex-col">
          <h2>{cartItem.title}</h2>
          <small>Golden</small>
        </div>
      </div>
      <div className=" rounded-xl border border-gray-400 flex gap-3 items-center ">
        <button
          className="border-r border-gray-400 py-2 px-4"
          onClick={() => handleQtyDecrement(cartItem.id)}
        >
          <Minus />
        </button>
        <p className="flex-grow py-2 px-4"> {cartItem.qty} </p>
        <button
          className="border-l border-gray-400 py-2 px-4"
          onClick={() => handleQtyIncrement(cartItem.id)}
        >
          <Plus />
        </button>
      </div>
      <div className="flex items-center gap-2">
        <h4>${cartItem.price}</h4>
        <button onClick={() => handleItemDelete(cartItem.id)}>
          <Trash2 className="text-red-600 w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
