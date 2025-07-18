'use client'
import { useAuthContext } from '@/context/authContext';
import { routes } from '@/routes';
import { usePathname, useRouter } from 'next/navigation';
import  { useEffect, useState } from 'react'

const useRoutesPrivaty = () => {
    const {isAuth} = useAuthContext();
    const pathname = usePathname();
    const router = useRouter();
    const publicRoutes = [routes.login, routes.register];
    const privateRoutes = [routes.profile, routes.cart];

    const [loading, setLoading] = useState<boolean>(true);

useEffect(() => {
  const routePrivacy = publicRoutes?.includes(pathname) ? 'public' : privateRoutes?.includes(pathname) ? 'private' : null;
  if(!routePrivacy) {
    setLoading(false)
    return;
  }
    if(isAuth === null){
        return;
    }
  if((routePrivacy === 'public' && isAuth) ||
   (routePrivacy === 'private' && !isAuth)
) {
    return router.push(routes.home);
  }
  setLoading(false);
}, [pathname, isAuth,]);

   

    return {loading};
}

export default useRoutesPrivaty;