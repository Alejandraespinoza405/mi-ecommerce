import { CreateOrderDto } from "../dtos/createOrderDto";
import { Order } from "../entities/Order";
import { Product } from "../entities/Product";       // 👈 importa el tipo
import { OrderRepository } from "../repositories/order.repository";
import { ProductRepository } from "../repositories/product.repository";
import { UserRepository } from "../repositories/user.repository";

export const createOrderService = async (
  createOrderDto: CreateOrderDto
): Promise<Order> => {
  // Asegúrate de que createOrderDto.products sea number[] en su DTO
  const productsF: Product[] = [];                   // 👈 tipado explícito

  for (const id of createOrderDto.products) {        // no hace falta for await
    const product = await ProductRepository.findOneBy({ id });
    if (!product) throw new Error("Product not found");
    productsF.push(product);
  }

  const userF = await UserRepository.findOneBy({ id: createOrderDto.userId });
  if (!userF) throw new Error("User not found");

  const newOrder = OrderRepository.create({
    status: "approved",
    date: new Date(),
    user: userF,
    products: productsF,
  });

  await OrderRepository.save(newOrder);
  return newOrder;
};
