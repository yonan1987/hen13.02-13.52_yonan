import type { ElementType, ReactNode } from "react";
import { cn } from "@/utils/cn";
import { useInView } from "@/hooks/useInView";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  variant?: "up" | "left" | "right" | "scale" | "fade";
  className?: string;
  threshold?: number;
};

const variantClass: Record<NonNullable<RevealProps["variant"]>, string> = {
  up: "",
  left: "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
  fade: "reveal-scale",
};

export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  variant = "up",
  className,
  threshold = 0.15,
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold });

  return (
    <Tag
      ref={ref}
      className={cn("reveal", variantClass[variant], inView && "is-visible", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
