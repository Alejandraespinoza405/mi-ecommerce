import React from "react";
import Link from "next/link";
import Navbar from "@/components/layout/navbar/navbar";
import Container from "@/components/layout/container";
import Footer from "@/components/layout/footer";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <Container>
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
          <h1 className="text-7xl font-bold text-slate-800">404</h1>
          <p className="text-2xl text-slate-500 mb-8">Página no encontrada</p>
          <Link href="/" className="text-primary-600 underline">
            Volver al inicio
          </Link>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default NotFound;
