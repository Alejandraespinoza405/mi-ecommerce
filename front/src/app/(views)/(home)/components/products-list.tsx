import ProductCard from "@/components/ui/product-card/product-card";

import React, { FC } from "react";

interface ProductsListProps {
  products: IProduct[];
}

const ProductsList: FC<ProductsListProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard {...product} key={product.id} />
      ))}
      {!products?.length && <span> No hay productos para mostrar</span>}
    </div>
  );
};

export default ProductsList;
