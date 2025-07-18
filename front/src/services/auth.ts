"use server";

import { LoginServiceResponse } from "./utils/types";
import { axiosApiBack } from "./utils";

export const postRegister = async (data: RegisterUserDto) => {
  try {
    const res = await axiosApiBack.post("/users/register", data);

    if (!res.data) {
      console.warn(
        "Fué invalida la forma en que enviarte el formulari",
        res.data
      );
      return {
        message: "Error al registrar el usuario",
        errors: res.data,
      };
    }
    return {
      message: "Usuario registrado correctamente",
    };
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.warn("Error fetching post register", e?.message);
    }
    return {
      message: "Error al registrar el usuario",
      errors: (e as Error).message || "Error desconocido",
    };
  }
};

export const postLogin = async (
  data: LoginUserDto
): Promise<LoginServiceResponse> => {
  try {
    const res = await axiosApiBack.post("/users/login", data);

    if (!res.data) {
      console.warn(
        "Fué invalida la forma en que enviarte el registro",
        res.data
      );
      return {
        message: "Error al iniciar sesión",
        errors: res.data,
      };
    }
    return {
      message: "Usuario inició sesión correctamente",
      data: res.data,
    };
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.warn("Error fetching post login", e?.message);
    }
    return {
      message: "Error al iniciar sesión",
      errors: (e as Error).message || "Error desconocido",
    };
  }
};
