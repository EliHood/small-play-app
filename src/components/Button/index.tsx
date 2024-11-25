import { ComponentProps, ReactNode } from "react";

type ButtonProps = ComponentProps<"button">;

type ButtonType = {
  children: ReactNode;
  variant?: "outlined" | "filled";
  className?: string;
  dataTestid?: string;
} & ButtonProps;

export function Button({
  children,
  variant = "outlined",
  className,
  onClick,
  dataTestid,
}: ButtonType) {
  const variantMap = {
    filled: "bg-white",
    outlined: "bg-transparent",
  };

  return (
    <button
      data-testid={dataTestid}
      onClick={onClick}
      className={`border-solid border-2 rounded-full ${variantMap[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
