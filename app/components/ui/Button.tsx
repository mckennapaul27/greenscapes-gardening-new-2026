import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode, MouseEventHandler } from "react";

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  asLink?: boolean;
  href?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  asLink = false,
  href,
  className = "",
  onClick,
  ...props
}: ButtonProps) {
  const baseStyles = "rounded-full font-semibold transition-colors";
  
  const variantStyles = {
    primary: "bg-[#339935] text-white hover:bg-[#2d7d2f]",
    secondary: "bg-white text-[#339935] hover:bg-[#fffcf4]",
    outline: "border border-gray-300 text-gray-900 hover:bg-gray-50",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`.trim();

  if (asLink && href) {
    return (
      <Link href={href} className={combinedClassName} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

