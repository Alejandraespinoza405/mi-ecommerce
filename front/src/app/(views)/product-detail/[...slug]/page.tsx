import AddCartButton from "@/components/ui/product-card/add-cart-button";
import { routes } from "@/routes";
import { getProductById } from "@/services/products";
import { redirect } from "next/navigation";
import React from "react";

export default async function Page({
  params,
}: {
  params: Params<{ slug: string[] }>;
  searchParams: SearchParams;
}) {
  const { slug } = await params;
  const id = slug[0];

  const product = await getProductById(id);

  if (!product) {
    return redirect(routes.notFound);
  }

  return (
    <div className="max-w-xl mx-auto my-8 p-8 border border-gray-300 rounded-lg shadow-md bg-white">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>

      {product.image && (
        <img
          src={product.image}
          alt={product.name}
          className="w-full max-h-72 object-cover rounded-md mb-4"
        />
      )}

      <p className="text-lg mb-2">
        <strong>Precio:</strong> ${product.price}
      </p>

      <p className="text-gray-600 mb-4">{product.description}</p>

      <AddCartButton product={product} />
    </div>
  );
}
