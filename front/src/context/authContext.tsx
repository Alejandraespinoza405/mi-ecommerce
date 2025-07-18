'use client'

import { LoginResponse } from "@/services/utils/types";
import { createContext, useContext, useEffect, useState } from "react";
import { JSX } from "react/jsx-runtime";

type AuthContextType = {
    isAuth: boolean | null;
    user: IUser | null;
    token: string | null;

    saveUserData: (data: LoginUserResponse) => void
    resetUserData: () => void;
};

const AUTH_KEY = "authData";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}: {children: React.ReactNode}): JSX.Element => {
 const [isAuth, setIsAuth] = useState<boolean | null>(null);
 const [user, setUSer] = useState<IUser | null>(null);
 const [token, setToken] = useState<string | null>(null);

 const saveUserData = (data: LoginResponse) => {
    setIsAuth(true);
    setUSer(data.user);
    setToken(data.token);
   
    localStorage.setItem(
        AUTH_KEY,
        JSON.stringify(data)
    )

}
 const resetUserData = () => {
    setUSer(null);
    setToken(null);
    setIsAuth(false);

    localStorage.removeItem(AUTH_KEY);
 }
  
  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem
        (AUTH_KEY) || "{}");
   
    if (storage === undefined || !Object.keys(storage)?.
    length) {
      setIsAuth(false);
      setToken("")
      return;
    } 
    const storageType = storage as any;
    setUSer(storage?.user);
    setIsAuth(storage?.login);
    setToken(storageType?.token);  
}, []);

  return <AuthContext.Provider value={{user, isAuth, token,
         saveUserData, resetUserData}}>
            {children}
            </AuthContext.Provider>
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    if(!context) {
        throw new Error("useAuthContext debe usarse dentro de un AuthProvider");
    }
    
   return context;
}