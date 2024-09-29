import { ReactNode } from "react";

type TextProps = {
  children: ReactNode;
  as?: "p" | "h3" | "h1";
};

function Text({ children, as = "p" }: TextProps) {
  const T = as ? as : "p";
  const styles = {
    h1: "text-2xl ",
    h3: "text-base font-bold",
    p: "text-base ",
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
