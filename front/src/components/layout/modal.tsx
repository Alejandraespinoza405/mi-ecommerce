'use client'
import React from "react";
import Portal from "../ui/portal";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <Portal>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative bg-white rounded-lg p-6 shadow-lg w-full max-w-md mx-4">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-lg"
            aria-label="Cerrar modal"
          >
            &times;
          </button>
          {children}
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
