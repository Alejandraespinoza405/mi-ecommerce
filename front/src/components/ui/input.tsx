import React, { InputHTMLAttributes, FC, useState } from "react"; 
import classNames from "classnames";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id?: string;
  className?: string;
  error?: string;
}

const Input: FC<InputProps> = ({ label, id, type, className, error, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-secondary-900"
      >
        {label}
      </label>

      <div className="relative">
        <input
          id={id}
          type={isPassword && showPassword ? "text" : type}
          className={classNames(
            "bg-white border text-sm rounded-lg block w-full p-2.5 pr-10",
            error ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-primary-300 focus:ring-primary-500 focus:border-primary-500",
            className
          )}
          {...props}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-3 flex items-center text-primary-500 hover:text-primary-700"
            tabIndex={-1}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>

      {error && <span className="text-red-500 text-sm mt-1 block">{error}</span>}
    </div>
  );
};

export default Input;


