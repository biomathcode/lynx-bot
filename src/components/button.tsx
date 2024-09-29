import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  type: "primary" | "secondary" | "default";
};

function Button({ children, type = "default" }: ButtonProps) {
  const buttonStyles = {
    primary: "h-10 bg-brand-btn text-white",
    secondary: "h-12 bg-brand-scd-btn text-white",
    default: " h-10  bg-neutral-300",
  };
  return (
    <button
      className={` text-base rounded-lg px-4 w-[100px]      ${buttonStyles[type]}`}
    >
      {children}
    </button>
  );
}

export default Button;
