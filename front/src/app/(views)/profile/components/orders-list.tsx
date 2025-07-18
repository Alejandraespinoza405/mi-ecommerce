"use client";
import Loader from "@/components/ui/loader/loader";
import { useAuthContext } from "@/context/authContext";
import { getUserOrders } from "@/services/orders";
import React, { useEffect, useState } from "react";

const OrdersList = () => {
  const [orders, setOrders] = useState<IOrder[] | null>();
  const [loading, setLoading] = useState<boolean | null>();

  const { token = null } = useAuthContext();

  useEffect(() => {
    const request = async () => {
      try {
        setLoading(true);

        if (token === null) {
          throw Error("Token dont exist");
        }
        const res = await getUserOrders(token!);

        setOrders(res);
      } catch (error) {
        console.warn("error fetching orders", (error as Error)?.message);
        setOrders([]);
      } finally {
        setLoading(false);
      }
    };
    if (typeof token === "string") {
      request();
    }
  }, [token]);
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {orders?.map((order) => {
        const total = order.products.reduce((acc, prod) => acc + prod.price, 0);

        return (
          <div key={order.id} className="mb-8 border-t pt-4">
            <div className="mb-4">
              <p className="text-lg font-semibold">🧾 Orden #{order.id}</p>
              <p className="text-sm text-gray-600">
                Fecha: {new Date(order.date).toLocaleString()}
              </p>
              <p className="text-sm text-green-600">Estado: {order.status}</p>
              <p className="text-sm font-medium text-blue-700 mt-1">
                Total: ${total}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {order.products.map((product) => (
                <div
                  key={product.id}
                  className="border rounded-md p-4 shadow-sm hover:shadow-md transition"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover mb-2 rounded"
                  />
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <p className="text-sm text-gray-600">{product.description}</p>
                  <p className="mt-2 text-blue-600 font-bold text-sm">
                    Precio: ${product.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
      {!Boolean(orders?.length) && (
        <span>No hay ordenes para este usuario</span>
      )}
    </div>
  );
};

export default OrdersList;
