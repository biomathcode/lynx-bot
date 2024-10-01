import { ReactNode } from "react";

type TextProps = {
  children: ReactNode;
  as?: "p" | "h3" | "h1" | "div" | "h2";
  color?: "white" | "black" | "gray";
};

function Text({ children, as = "p", color = "black" }: TextProps) {
  const T = as ? as : "p";
  const styles = {
    h1: "text-2xl font-semibold ",
    h2: " text-xl font-semibold ",
    h3: " text-sm font-semibold",
    p: "text-sm ",
    div: "text-base",
  };

  // const size = {
  //   large: "",
  //   medium: "",
  //   small: "",
  // };

  const colorType = {
    white: " text-white",
    black: " text-brand-blue",
    gray: " text-neutral-400",
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
