import { ReactNode } from "react";

type TextProps = {
  children: ReactNode;
  as?: "p" | "h3" | "h1";
};

function Text({ children, as = "p" }: TextProps) {
  const T = as ? as : "p";
  const styles = {
    h1: "text-xl font-bold ",
    h3: "text-lg font-bold",
    p: "text-lg ",
  };
  return (
    <T
      className={`   leading-brand tracking-brand text-brand-blue ${styles[as]} `}
    >
      {children}
    </T>
  );
}

export default Text;
