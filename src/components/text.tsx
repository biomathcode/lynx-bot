import { ReactNode } from "react";

type TextProps = {
  children: ReactNode;
  as?: "p" | "h3" | "h1" | "div";
  color?: "white" | "black";
};

function Text({ children, as = "p", color = "black" }: TextProps) {
  const T = as ? as : "p";
  const styles = {
    h1: "text-2xl font-semibold ",
    h3: "text-lg font-semibold",
    p: "text-lg ",
    div: "text-base",
  };

  const colorType = {
    white: " text-white",
    black: " text-brand-blue",
  };
  return (
    <T
      className={`   leading-brand tracking-brand text-brand-blue ${styles[as]} ${colorType[color]} `}
    >
      {children}
    </T>
  );
}

export default Text;
