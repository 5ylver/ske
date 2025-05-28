import React, { useState } from "react";

type InputProps = {
  label: string;
  id: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  type?: React.HTMLInputTypeAttribute;
  error?: string;
};

const Input: React.FC<InputProps> = ({
  label,
  id,
  placeholder = "",
  type = "text",
  value,
  onChange,
  required = false,
  error,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value && value.length > 0;

  return (
    <div className="relative w-full max-w-md">
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`
          block w-full appearance-none bg-transparent 
          border-2 rounded-md px-3 pt-2.5 pb-2.5 text-base text-gray-900
          focus:outline-none focus:ring-0 transition-all duration-200
          ${
            error
              ? "border-red-500 focus:border-red-500"
              : "border-gray-300 focus:border-primary"
          }
        `}
      />
      <label
        htmlFor={id}
        className={`
          absolute left-3 transition-all duration-200 pointer-events-none 
          bg-white px-1 z-10
          ${
            isFocused || hasValue
              ? "text-xs -top-2 text-primary"
              : "text-base top-3 text-gray-500"
          }
          ${error ? "!text-red-500" : ""}
        `}
      >
        {label}
      </label>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
