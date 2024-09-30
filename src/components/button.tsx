import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  type: "primary" | "secondary" | "default" | "outline" | "small";
};

function Button({ children, type = "default" }: ButtonProps) {
  const buttonStyles = {
    primary: " px-6 h-10 rounded-xl bg-brand-btn text-white",
    secondary: " px-6 h-12 rounded-xl bg-brand-scd-btn text-white w-full",
    default: " px-6 h-10  rounded-xl  bg-neutral-200",
    outline: " px-6 h-10 rounded-xl  border-[1.25px]  ",
    small: " px-4 h-7 bg-white border-[1.25px] rounded-md text-brand-btn ",
  };
  return (
    <button
      className={` text-base   flex-nowrap   brand-para flex justify-center items-center font-semibold     ${buttonStyles[type]}`}
    >
      {children}
    </button>
  );
}

export default Button;
