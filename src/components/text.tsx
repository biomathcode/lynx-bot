import { ReactNode } from "react";

type TextProps = {
  children: ReactNode;
  as?: "p" | "h3" | "h1";
};

function Text({ children, as = "p" }: TextProps) {
  const T = as ? as : "p";
  const styles = {
    h1: "text-xl ",
    h3: " text-sm font-bold",
    p: "text-sm ",
  };
  return (
    <T
      className={`  leading-brand tracking-brand text-brand-blue ${styles[as]} `}
    >
      {children}
    </T>
  );
}

export default Text;
