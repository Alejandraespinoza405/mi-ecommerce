import React from "react";
import CreateOrder from "./components/create-order";
import ProductsCartList from "./components/products-cart-list";

const PageCart = () => {
 return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold"> Carrito de Compras</h1>
        <CreateOrder />
      </div>
      <ProductsCartList />
    </div>
  );
};

export default PageCart;

