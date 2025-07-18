'use client'
import Button from "@/components/ui/button";
import Loader from "@/components/ui/loader/loader";
import { useAuthContext } from "@/context/authContext";
import { useCartContext } from "@/context/cartContext";
import { routes } from "@/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsCart4 } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import { PiUserCircleThin } from "react-icons/pi";

export const AuthNavbar = () => {
  const { isAuth, resetUserData, user } = useAuthContext(); 
  const pathname = usePathname();
  const { total, resetCart } = useCartContext();

  const logout = () => {
    resetUserData();
    resetCart();

    if (pathname === routes.home) {
      location.href = routes.login;
      return;
    }

    location.href = routes.home;
  };

  if (isAuth === null) {
    return <Loader />;
  }

  if (!isAuth) {
    return (
      <div>
        <Link href={routes.login}>
          <Button label="Iniciar Sesión" className="bg-primary-200 text-white hover:bg-primary-300" />
        </Link>
        <Link href={routes.register}>
          <Button label="Registrarse" className="bg-primary-200 text-white hover:bg-primary-300" />
        </Link>
      </div>
    );
  }

  
  if (!user) {
    return <Loader />;
  }

  return (
    <div className="flex items-center gap-4">
      <Link href={routes.cart} className="relative inline-block">
        <BsCart4 className="text-2xl" />
        {Boolean(total) && (
          <span className="absolute -top-2 -right-2 bg-lime-300 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {total}
          </span>
        )}
      </Link>

      <Link href={routes.profile} className="flex items-center space-x-2 rtl:space-x-reverse">
        <PiUserCircleThin className="h-8 w-8 text-primary-500" />
        <span className="cursor-pointer font-medium">{user.name}</span>
      </Link>

      <div onClick={logout} className="cursor-pointer">
        <CiLogout className="h-5 w-5 text-primary-500 cursor-pointer" />
      </div>
    </div>
  );
};
