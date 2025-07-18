"use client";

import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { useAuthContext } from "@/context/authContext";
import { routes } from "@/routes";
import { postLogin } from "@/services/auth";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";
import * as yup from "yup";

const loginSchema = yup.object({
  email: yup
    .string()
    .email("El correo electrónico debe ser válido")
    .required("El correo electrónico es obligatorio"),
  password: yup
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .required("La contraseña es obligatoria"),
});

const LoginForm = () => {
  const { saveUserData } = useAuthContext();

  const router = useRouter();

  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const [loading, setLoading] = React.useState(false);

  const handleValidation = async () => {
    try {
      await loginSchema.validate(formData, { abortEarly: false });
    
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        const newErrors: Record<string, string> = {};
        error.inner.forEach((curr) => {
          if (curr.path) {
            newErrors[curr.path] = curr.message;
          }
        });
        setErrors(newErrors);
       
      }
      return false;
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleValidation();
    try {
      setLoading(true);
      const res = await postLogin(formData);
   

      if (res.errors || !res.data) {
        return toast.error("Ocurrió un error al iniciar sesión");
      }

      toast.success("Inicio de sesión exitosa");

      saveUserData(res.data);

      setTimeout(() => {
        router.push(routes.home);
      }, 2000);
    } catch (error: unknown) {
      toast.error("Ocurrio un error al iniciar sesión");
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <form className="flex flex-col" onSubmit={onSubmit}>
      <Input
        label="Correo electrónico"
        id="email"
        type="text"
        placeholder="Ingresá tu correo electrónico"
        className="mb-4"
        value={formData.email}
        onChange={handleOnChange}
        autoComplete="email"
        error={errors?.email}
      />

      <Input
        label="Contraseña"
        id="password"
        type="password"
        placeholder="Ingresá tu contraseña"
        className="mb-4"
        value={formData.password}
        onChange={handleOnChange}
        autoComplete="current-password"
        error={errors?.password}
      />

      <Button
        label="Iniciar sesión"
        type="submit"
        className="w-full"
        disabled={loading}
      />
    </form>
  );
};

export default LoginForm;
