import { ReactNode } from "react";

type TextType = {
  children: ReactNode;
  label: string;
  color?: "white" | "black";
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  variant?: "regular" | "bold" | "bolder";
  className?: string;
};

export function AppText({
  children,
  size = "md",
  color = "white",
  variant = "regular",
  label,
  className = "",
}: TextType) {
  /**
   * we have to call static classnames, rather than e.g font-${variant}
   *
   * tailwindcss isn't flexible working in runtime but rather on initial build.
   */
  const fontMap: Record<Extract<TextType["variant"], string>, string> = {
    regular: "font-regular",
    bold: "font-bold",
    bolder: "font-bolder",
  };

  const fontColor: Record<Extract<TextType["color"], string>, string> = {
    white: "text-white",
    black: "text-black",
  };

  const fontSize: Record<Extract<TextType["size"], string>, string> = {
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
  };

  return (
    <p
      aria-label={label}
      className={`${fontMap[variant]} ${fontColor[color]} ${fontSize[size]} ${className}`}
    >
      {children}
    </p>
  );
}
