import Link from "next/link";
import React, { FC } from "react";

interface NavItemProps {
    href: string;
    label: string;
}

const NavItem: FC<NavItemProps> = ({ href = "#", label = "Label Link"}) => {
     return (
      <li>
       <Link
        href={href}
         className="block py-2 px-3 text-white bg-primary-700 
         rounded-sm md:bg-transparent md:text-primary-700 md:p-0 dark:text-white md:dark:text-primary-500" 
         aria-current="page"
        >
        {label}
      </Link>
     </li>
     );
};

export default NavItem;