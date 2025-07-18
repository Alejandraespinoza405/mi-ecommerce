"use client";

import React, { FC } from "react";

import { useRouter } from "next/navigation";
import { routes } from "@/routes";
import AddCartButton from "./add-cart-button";

const ProductCard: FC<Partial<IProduct>> = (product) => {
  const { description, id, image, name, price, stock } = product;
  const router = useRouter();

  const handleClick = () => {
    if (!id || !name) return;
    router.push(`${routes.product_detail}/${id}/${name}`);
  };

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">
      <div onClick={handleClick} className="cursor-pointer block">
        <img
          className="p-8 rounded-t-lg"
          src={image || "https://via.placeholder.com/150"}
          alt={name || "product image"}
        />
      </div>
      <div className="px-5 pb-5">
        <div onClick={handleClick} className="cursor-pointer block">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900">
            {name ?? "Product Name"}
          </h5>
        </div>
        <p className="mt-2 text-sm text-gray-500">
          {description ?? "Product Description"}
        </p>
        {typeof stock === "number" && (
          <p className="mt-1 text-sm font-medium text-gray-600">
            {stock > 0 ? `Stock: ${stock}` : "Agotado"}
          </p>
        )}
        <div className="flex items-center flex-col justify-between mt-4 my-3">
          <span className="text-3xl font-bold text-gray-900">
            ${price ?? "Product Price"}
          </span>
          <AddCartButton product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
