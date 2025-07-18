"use client";

import Loader from "@/components/ui/loader/loader";
import { useAuthContext } from "@/context/authContext";
import React from "react";

const UserData = () => {
  const { user } = useAuthContext();

  if (user === null) {
    return <Loader />;
  }

  if (!user) {
    return <div>No user data available</div>;
  }
  return (
    <div className="max-w-4xl mx-auto p-6">

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <p>
          <strong>Nombre:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Dirección:</strong> {user.address}
        </p>
        <p>
          <strong>Teléfono:</strong> {user.phone}
        </p>
        <p>
          <strong>Rol:</strong> {user.role}
        </p>
      </div>
    </div>
  );
};

export default UserData;
