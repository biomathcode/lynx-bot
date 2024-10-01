import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  type: "primary" | "secondary" | "default" | "outline" | "small";
  mode?: "button" | "submit" | "reset";
  onClick?: () => void;
};

function Button({
  children,
  type = "default",
  mode = "button",
  onClick,
}: ButtonProps) {
  const buttonStyles = {
    primary: " px-6 h-10 rounded-xl bg-brand-btn text-white",
    secondary: " px-6 h-8 rounded-md bg-brand-scd-btn text-white w-full",
    default: " px-6 h-10  rounded-xl  bg-neutral-200",
    outline: " px-6 h-10 rounded-xl  border-[1.25px]  ",
    small: " px-4 h-7 bg-white border-[1.25px] rounded-md text-brand-btn ",
  };
  return (
    <button
      type={mode}
      onClick={onClick}
      className={` text-xs gap-2  flex-nowrap   brand-para flex justify-center items-center font-semibold     ${buttonStyles[type]}`}
    >
      {children}
    </button>
  );
}

export default Button;
