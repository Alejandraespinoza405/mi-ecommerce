import { AppDataSource } from "../config/dataSource";
import { Category } from "../entities/Category";
import { CategoryRepository } from "../repositories/category.respository";

interface ICategory {
    name: string;
}

const categoriesToPreLoad: ICategory[] = [
  { name: 'Cerámica' },
  { name: 'Textiles' },
  { name: 'Velas artesanales' },
  { name: 'Mates y termos' },
  { name: 'Joyas y accesorios' },
  { name: 'Decoración para el hogar' },
  { name: 'Cuadernos y papelería' },
  { name: 'Madera tallada' },
  { name: 'Arte en vidrio' }
];


const categoriesToPreLoad1: ICategory[] = [
    { name: 'Smartphones' },
    { name: 'Laptops' },
    { name: 'Tablets' },
    { name: 'Headphones' },
    { name: 'Cameras' },
    { name: 'Printers' },
    { name: 'Monitors' },
    { name: 'Storage' },
    { name: 'Accessories' }
];

export const preLoadCategories = async () => {
    const categories = await CategoryRepository.find();
    if (!categories.length) await AppDataSource.createQueryBuilder().insert().into(Category).values(categoriesToPreLoad).execute();
    console.log('Categories preloaded');
}