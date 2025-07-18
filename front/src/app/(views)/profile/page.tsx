import React from "react";
import UserData from "./components/user-data";
import OrdersList from "./components/orders-list";

const PageProfile = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Perfil del Usuario</h2>
       <UserData />
     
      <h2 className="text-2xl font-bold mb-4">Órdenes</h2>
      <OrdersList />
    </div>
  );
};

export default PageProfile;
