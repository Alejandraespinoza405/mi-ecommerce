"use client";

import Modal from "@/components/layout/modal";
import Button from "@/components/ui/button";
import { useAuthContext } from "@/context/authContext";
import { useCartContext } from "@/context/cartContext";
import { routes } from "@/routes";
import { postOrders } from "@/services/orders";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const CreateOrder = () => {
    const router = useRouter()
    const {token, user} = useAuthContext();
    const {cart, resetCart} = useCartContext();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  const handleOrder = async () => {
    try {
      if(typeof user?.id !== "number"){
        return;
      }
       const payload: CreateOrderDto = {
        products: cart?.map((product) => product.id!) || [],
        userId: user?.id,
       }
       const res = await postOrders(token || "", payload);

       if(!res || res?.error){
       return toast.error('Ocurrio un error al generar la orden')
       }
       toast.success(`Orden #${res?.id}: Creada con éxito`);
       setTimeout(() => {
          resetCart();
       }, 1980);
      

       setTimeout(() => {
        router.push(routes.profile);
       }, 2000);
    } catch (error) {
        console.warn('Error create order', (error as Error)?.message)
        toast.error('Ocurrio un error al generar la orden')
        
    }
  };
  return (
    <>
      <Button label="Crear orden" onClick={onOpen} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <div>
          <div>¿Agregar orden?</div>

          <div>
            <Button variant="outline" label="Cancelar" onClick={onClose} />
            <Button variant="primary" label="Aceptar" onClick={handleOrder} />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CreateOrder;
