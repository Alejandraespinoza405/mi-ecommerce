import React, { FC } from "react";
import cs from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  variant?: "primary" | "secondary" | "tertiary" | "outline";
}

const Button: FC<ButtonProps> = ({
  label = "Soy un boton",
  variant = "primary",
  className,
  ...props
}) => {
  const buttonVariants = {
    primary:
      "text-white bg-primary-700 hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",
    secondary:
      "py-2.5 px-5 me-2 mb-2 text-sm font-medium text-primary-900 focus:outline-none bg-white rounded-full border border-primary-200 hover:bg-primary-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-primary-100 dark:focus:ring-primary-700 dark:bg-primary-800 dark:text-primary-400 dark:border-primary-600 dark:hover:text-white dark:hover:bg-primary-700",
    tertiary: "text-green-500",
    outline:
      "text-primary-700 border border-primary-700  focus:ring-4 focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-primary-500 dark:text-primary-500",
  };

  return (
    <button
      {...props}
      className={cs(
        buttonVariants[variant] || buttonVariants.primary,
        "disabled:cursor-not-allowed hover:bg-transparent hover:text-primary-500",
        className
      )}
    >
      {label}
    </button>
  );
};

export default Button;
