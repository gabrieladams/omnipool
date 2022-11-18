import Image from "next/image";
import { useState, useRef, useEffect } from "react";

function AuthCardFormFieldView({
  type,
  name,
  value,
  onChangeHandler,
  label,
  icon,
}) {
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
    <div className="relative mb-8">
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
        type={type}
        name={name}
        value={value}
        className="block w-full rounded-[4px] border border-white bg-transparent p-4 pl-[64px] transition-colors duration-150 ease-linear focus:border-highlight-color"
        ref={inputRef}
        onChange={onChangeHandler}
      />

      <div className="absolute top-0 left-0 flex h-full w-[63px] items-center">
        <Image src={icon} alt="#" className="relative left-4" />
      </div>
    </div>
  );
}

export default AuthCardFormFieldView;
