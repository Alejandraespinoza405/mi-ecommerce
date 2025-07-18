"use server";

import { axiosApiBack } from "./utils";

export const postOrders = async (token: string, body: CreateOrderDto) => {
  try {
    const res = await axiosApiBack.post("/orders", body, {
      headers: { Authorization: token },
    });

    if (!res.data) {
      console.warn("Order not created", res.data);
      return {
        message: "Order not created",
        error: res?.data || "Ocurrió un error",
      };
    }
    return res.data;
  } catch (error) {
    if (error instanceof Error) {
      console.warn("Error creating order products", error?.message);

      return {
        message: "Order not created",
        error: error?.message || "Ocurrió un error",
      };
    }
    return null;
  }
};

export const getUserOrders = async (token: string) => {
  try {
    const res = await axiosApiBack.get("/users/orders",  {
      headers: { 
        Authorization: token },
    });

    if (!res.data || !Array.isArray(res.data)) {
      console.warn("Invalidad orders data format", res.data);
      return [];
    }
    return res.data;
  } catch (error) {
    if (error instanceof Error) {
      console.warn("Error fetching orders list", error?.message);
    }
    return [];
  }
};
