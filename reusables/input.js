import { useState, useRef, useEffect } from "react";
import Image from "next/image";

// type, name, value, onChangeHandler, label, icon

function Input({ type, name, value, label, icon, onChange }) {
  const [isInputInFocus, setIsInputInFocus] = useState(false);

  const labelRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    if (window) {
      window.addEventListener("click", (e) => {
        if (e.target === labelRef.current || e.target === inputRef.current) {
          inputRef.current.focus();
          setIsInputInFocus(true);
        } else {
          setIsInputInFocus(false);
        }
      });
    }
  }, []);

  return (
    <div className="relative">
      <label
        ref={labelRef}
        htmlFor={name}
        className={`absolute left-[64px] cursor-text transition-all duration-150 ease-linear ${
          isInputInFocus || value
            ? "-top-4 bg-[#0c0a1d] p-[8px] text-[13px] text-highlight-color"
            : "top-4"
        }`}
      >
        {label}
      </label>

      <input
        ref={inputRef}
        onChange={onChange}
        type={type}
        name={name}
        value={value}
        className="focus:border-highlight-three block w-full rounded-[4px] border border-white bg-transparent p-4 transition-colors duration-150 ease-linear"
      />

      {icon && (
        <div className="absolute top-0 left-0 flex h-full w-[63px] items-center">
          <Image src={icon} alt="#" className="relative left-4" />
        </div>
      )}
    </div>
  );
}

export default Input;
