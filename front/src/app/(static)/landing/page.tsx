import React from "react";
import Link from "next/link";
import { products } from "@/helpers/products";
import Button from "@/components/ui/button";

const PageLanding = () => {
  const cart = products.slice(0, 3);

  return (
    <main className="min-h-screen bg-white px-6 py-12">
      <section className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Bienvenidos a Alma de Hogar{" "}
        </h1>
        <p className="text-lg text-gray-600">
          Descubrí nuestro bazar artesanal con piezas únicas para tu hogar.
          Estilo chic, detalles rústicos y mucho amor en cada objeto.
        </p>
      </section>

      <section className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
        {cart.map((product) => (
          <div
            key={product.id}
            className="bg-gray-50 border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded mb-3"
            />
            <h2 className="text-xl font-semibold mb-1">{product.name}</h2>
            <p className="text-sm text-gray-600 line-clamp-3">
              {product.description}
            </p>
            <p className="mt-2 text-blue-600 font-bold">${product.price}</p>

            <div className="mt-4">
              <Button label="Agregar al carrito" />
            </div>
          </div>
        ))}
      </section>

      <div className="text-center">
        <Link href="/">
          <div className="inline-block px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition">
            Ver más
          </div>
        </Link>
      </div>
    </main>
  );
};

export default PageLanding;
