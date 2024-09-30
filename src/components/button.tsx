import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  type: "primary" | "secondary" | "default";
};

function Button({ children, type = "default" }: ButtonProps) {
  const buttonStyles = {
    primary: "h-8  bg-brand-btn text-white",
    secondary: "h-10 bg-brand-scd-btn text-white w-full",
    default: " h-8  bg-neutral-200",
  };
  return (
    <button
      className={` text-base rounded-xl px-6 py-4 flex justify-center items-center font-bold     ${buttonStyles[type]}`}
    >
      {children}
    </button>
  );
}

export default Button;
