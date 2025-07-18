"use client";
import React from "react";
import { Formik } from "formik";
import Input from "@/components/ui/input";
import * as yup from "yup";
import Button from "@/components/ui/button";
import { postRegister } from "@/services/auth";

const RegisterSchema = yup.object().shape({
  email: yup.string().email("Email inválido").required("Campo requerido"),
  password: yup
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .required("Campo requerido"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), ""], "Las contraseñas deben coincidir")
    .required("Campo requerido"),
  phone: yup.string().required("Campo requerido"),
  address: yup.string().required("Campo requerido"),
  name: yup.string().required("Campo requerido"),
});


const RegisterForm = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        address: "",
        name: "",
      }}
      validationSchema={RegisterSchema}
      onSubmit={async (values, { setSubmitting }) => {
        const { confirmPassword, ...data } = values;
        try {
          const res = await postRegister(data);
          if (res.errors) {
            return alert("Ocurrio un error al registrar el usuario");
          }
          alert("El usuario se creo correctamente");
        } catch (e){
          alert("Ocurrio un error al registrar el usuario");
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <Input
            label="Nombre"
            id="name"
            type="text"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            error={errors.name && touched.name ? errors.name : ""}
          />

          <Input
            label="Email"
            id="email"
            type="text"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            error={errors.email && touched.email ? errors.email : ""}
          />

          <Input
            label="Contraseña"
            id="password"
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            error={errors.password && touched.password ? errors.password : ""}
          />

          <Input
            label="Confirmar contraseña"
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.confirmPassword}
            error={
              errors.confirmPassword && touched.confirmPassword
                ? errors.confirmPassword
                : ""
            }
          />

          <Input
            label="Teléfono"
            id="phone"
            type="text"
            name="phone"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.phone}
            error={errors.phone && touched.phone ? errors.phone : ""}
          />

          <Input
            label="Dirección"
            id="address"
            type="text"
            name="address"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.address}
            error={errors.address && touched.address ? errors.address : ""}
          />

          <Button
            label="Registrarse"
            type="submit"
            disabled={isSubmitting}
            className="w-full"
          />
        </form>
      )}
    </Formik>
  );
};

export default RegisterForm;
