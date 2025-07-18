"use client";

import React, { FC } from "react";
import Button from "../button";
import Link from "next/link";
import { routes } from "@/routes";
import { useAuthContext } from "@/context/authContext";
import { useCartContext } from "@/context/cartContext";
import Loader from "../loader/loader";
import { toast } from "react-toastify";

const AddCartButton: FC<{ product: Partial<IProduct> }> = ({ product }) => {
  const { isAuth } = useAuthContext();
  const { addToCart, isProductInCart } = useCartContext();
  const isOnCart = isProductInCart(product.id || 0);

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    addToCart(product);

    return toast.success("Producto añadido al carrito", {
      autoClose: 1500,
    });
  };
  if (isAuth === null) {
    return <Loader />;
  }

  if (!isAuth) {
    return (
      <div>
        <p>
          Por favor,{" "}
          <Link
            href={routes.login}
            className="text-primary-200 underline
                 hover:font-medium"
          >
            Iniciar sesión
          </Link>{" "}
          para agregar productos al carrito.
        </p>
      </div>
    );
  }

  return (
    <Button
      label={isOnCart ? "Producto agregado" : "Agregar al carrito"}
      className="w-full"
      variant={isOnCart ? "outline" : "primary"}
      onClick={isOnCart ? () => null : handleAddToCart}
    />
  );
};

export default AddCartButton;
