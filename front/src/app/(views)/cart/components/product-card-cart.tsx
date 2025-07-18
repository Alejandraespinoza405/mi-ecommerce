"use client";

import { useCartContext } from "@/context/cartContext";
import React from "react";
import { FiTrash2 } from "react-icons/fi";

const ProductCartCard = (product: Partial<IProduct> | null) => {

  const { removeFromCart } = useCartContext();
  if (!product) return;
  
  return (
    <div key={product.id} className="flex items-start gap-4 border-b pb-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-28 h-28 object-cover rounded"
      />
      <div className="flex-1">
        <h2 className="text-xl font-semibold">{product.name}</h2>
        <p className="text-sm text-gray-600">{product.description}</p>
        <p className="font-bold mt-1">${product.price}</p>
      </div>
      <button
        className="text-red-300 hover:text-primary-700 transition"
        aria-label={`Eliminar ${product.name}`}
        onClick={() => removeFromCart(product.id || 0)}
      >
        <FiTrash2 size={20} />
      </button>
    </div>
  );
};

export default ProductCartCard;
