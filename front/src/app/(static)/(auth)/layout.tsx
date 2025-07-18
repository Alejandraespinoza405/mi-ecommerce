import React, { FC } from "react";
import { LiaHandHoldingHeartSolid } from "react-icons/lia";

interface LayoutMainAuthProps {
  children: React.ReactNode;
}

const LayoutMainAuth: FC<LayoutMainAuthProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-white">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
          <div className="text-center mb-6">
            <div className="flex justify-center items-center gap-2 mb-2">
              <LiaHandHoldingHeartSolid className="h-8 text-primary-500" />
              <span className="text-2xl font-semibold text-primary-500">
                The Crafted Home
              </span>
            </div>
          </div>

          {children}
        </div>
      </div>

      <div className="hidden md:block md:w-1/2 h-screen">
        <img
          src="https://plus.unsplash.com/premium_photo-1677533379017-0d2d33abb8eb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Imagen decorativa de bazar artesanal"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default LayoutMainAuth;
