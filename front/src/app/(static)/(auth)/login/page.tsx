import React from "react";
import LoginForm from "./components/login-form";
import Link from "next/link";

const page = () => {
    return (
        <div>
            <h2 className="text-2xl text-center text-gray-500">Iniciar sesion</h2>
        <LoginForm />
        <p className="text-center text-sm text-neutral-500 mt-3">¿No tienes cuenta?{" "}
        <Link href="/register" className="text-primary-500 hover:underline">Registrate</Link>
        </p>
        </div>
    )
}

export default page