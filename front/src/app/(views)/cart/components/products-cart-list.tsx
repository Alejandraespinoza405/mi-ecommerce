'use client'

import { useCartContext } from "@/context/cartContext";
import React from "react";
import ProductCartCard from "./product-card-cart";
import Loader from "@/components/ui/loader/loader";

const ProductsCartList = () => {
  const { cart, priceTotal } = useCartContext();

   if (cart === null) {
  return <Loader />
 }
return (
    <>
      <div>
        {cart?.length === 0 ? (
          <p className="text-gray-600">Tu carrito está vacío.</p>
        ) : (
          <div className="space-y-6">
            {cart?.map((product) => (
              <ProductCartCard key={product?.name} {...(product || null)} />
            ))}

            <div className="text-right mt-6">
              <p className="text-xl font-bold">
                Total: <span className="text-black">${priceTotal()}</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductsCartList;
