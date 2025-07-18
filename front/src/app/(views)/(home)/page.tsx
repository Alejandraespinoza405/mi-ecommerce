import { getProducts } from "@/services/products";
import ProductsList from "./components/products-list";

const getData = async () => {
  const products = await getProducts();

  return {
    products,
  };
};

export default async function Home() {
  const { products } = await getData();

  return (
    <div>
     <section className="relative w-full h-[70vh] flex items-center justify-center bg-[#f5f1ec] mb-12 overflow-hidden">
  {/* Imagen de fondo */}
  <img
    src="https://ik.imagekit.io/3lgxyu6mu/bazar/heronuevo.PNG?updatedAt=1752861933036"
    alt="Hero"
    className="absolute w-full h-full object-cover brightness-75"
  />

  {/* Contenido superpuesto */}
  <div className="relative z-10 text-center text-white px-6">
    <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
      Objetos que cuentan historias
    </h1>
    <p className="text-lg md:text-xl mb-6 drop-shadow">
      Decoración bohemia, artesanal y con alma
    </p>
  </div>
</section>

      <section>
        <h2>Productos destacados</h2>
        <ProductsList products={products} />
      </section>
    </div>
  );
}
