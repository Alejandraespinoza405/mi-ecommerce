import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

interface IProduct {
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}

const productsToPreLoad: IProduct[] = [
  {
    name: "Taza de cerámica pintada a mano",
    description: "Taza artesanal de cerámica esmaltada con diseño floral.",
    price: 1800,
    stock: 25,
    image: "https://ik.imagekit.io/3lgxyu6mu/bazar/taza.jpg?updatedAt=1751543156802",
    categoryId: 1,
  },
  {
    name: "Velas aromáticas de soja",
    description: "Pack de 3 velas artesanales con fragancias naturales.",
    price: 2500,
    stock: 15,
    image: "https://ik.imagekit.io/3lgxyu6mu/bazar/velas%20soja%20-%20copia.png?updatedAt=1751543306318",
    categoryId: 1,
  },
  {
    name: "Cuenco de madera tallado",
    description: "Cuenco hecho a mano con madera reciclada.",
    price: 3200,
    stock: 10,
    image: "https://ik.imagekit.io/3lgxyu6mu/bazar/cuenco%20madera.jpg?updatedAt=1751543306882",
    categoryId: 1,
  },
  {
    name: "Bandeja de mimbre",
    description: "Bandeja tejida a mano con fibras naturales.",
    price: 2900,
    stock: 20,
    image: "https://ik.imagekit.io/3lgxyu6mu/bazar/bandeja%20mimbre.webp?updatedAt=1751543304663",
    categoryId: 1,
  },
  {
    name: "Porta sahumerio de arcilla",
    description: "Base artesanal para sahumerios con forma de hoja.",
    price: 950,
    stock: 30,
    image: "https://ik.imagekit.io/3lgxyu6mu/bazar/Porta%20sahumerio.png?updatedAt=1751543305923",
    categoryId: 1,
  },
  {
    name: "Maceta decorativa pequeña",
    description: "Maceta de cerámica pintada a mano para suculentas.",
    price: 1100,
    stock: 18,
    image: "https://ik.imagekit.io/3lgxyu6mu/bazar/maceta.jpg?updatedAt=1751543493220",
    categoryId: 1,
  },
  {
    name: "Jabones artesanales de glicerina",
    description: "Set de 4 jabones con esencias naturales y formas decorativas.",
    price: 1600,
    stock: 22,
    image: "https://ik.imagekit.io/3lgxyu6mu/bazar/jabones%20-%20copia.webp?updatedAt=1751543304236",
    categoryId: 1,
  },
  {
    name: "Camino de mesa tejido",
    description: "Camino de mesa artesanal hecho en telar rústico.",
    price: 4500,
    stock: 12,
    image: "https://ik.imagekit.io/3lgxyu6mu/bazar/camino%20mesa.jpg?updatedAt=1751543305709",
    categoryId: 1,
  },
  {
    name: "Set de posa vasos",
    description: "4 posa vasos tejidos con hilo de yute.",
    price: 1400,
    stock: 28,
    image: "https://ik.imagekit.io/3lgxyu6mu/bazar/posa%20vasos.webp?updatedAt=1751543307053",
    categoryId: 1,
  },
  {
    name: "Lámpara de mimbre",
    description: "Pantalla colgante tejida a mano con diseño boho.",
    price: 6700,
    stock: 6,
    image: "https://ik.imagekit.io/3lgxyu6mu/bazar/pantalla%20colgante%20-%20copia.jpg?updatedAt=1751543305549",
    categoryId: 1,
  },
  {
    name: "Porta llaves de madera",
    description: "Porta llaves artesanal con diseño de casita.",
    price: 2100,
    stock: 14,
    image: "https://ik.imagekit.io/3lgxyu6mu/bazar/porta%20llaves.webp?updatedAt=1751543306003",
    categoryId: 1,
  },
  {
    name: "Espejo con marco de ratán",
    description: "Espejo redondo con marco artesanal tejido.",
    price: 5900,
    stock: 7,
    image: "https://ik.imagekit.io/3lgxyu6mu/bazar/espejo%20-%20copia.webp?updatedAt=1751543305063",
    categoryId: 1,
  },
  {
    name: "Difusor de aromas natural",
    description: "Difusor artesanal con aceites esenciales de lavanda.",
    price: 2200,
    stock: 19,
    image: "https://ik.imagekit.io/3lgxyu6mu/bazar/difusor%20lavanda%20-%20copia.webp?updatedAt=1751543304688",
    categoryId: 1,
  },
  {
    name: "Caja decorativa de cartón reciclado",
    description: "Caja multiuso decorada con papeles artesanales.",
    price: 1300,
    stock: 24,
    image: "https://ik.imagekit.io/3lgxyu6mu/bazar/caja%20carton.webp?updatedAt=1751543305077",
    categoryId: 1,
  }
];

export const preLoadProducts = async () => {
  const products = await ProductRepository.find();
  if (!products.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsToPreLoad)
      .execute();
  console.log("Products preloaded");
};
