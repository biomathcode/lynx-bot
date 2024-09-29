import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  type: "primary" | "secondary" | "default";
};

function Button({ children, type = "default" }: ButtonProps) {
  const buttonStyles = {
    primary: "h-8 bg-brand-btn text-white",
    secondary: "h-10 bg-brand-scd-btn text-white",
    default: " h-8  bg-neutral-300",
  };
  return (
    <button
      className={` text-sm rounded-lg px-2 w-[90px]      ${buttonStyles[type]}`}
    >
      {children}
    </button>
  );
}

export default Button;
