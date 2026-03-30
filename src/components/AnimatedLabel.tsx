import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedLabelProps extends Omit<HTMLMotionProps<"span">, "children"> {
  children: ReactNode;
  delay?: number;
  variant?: "fade" | "slide" | "scale" | "bounce";
  as?: "span" | "p" | "h1" | "h2" | "h3" | "h4" | "label" | "div";
}

// No animations - completely static labels
export function AnimatedLabel({ 
  children, 
  delay = 0, 
  variant = "fade", 
  as = "span",
  className = "",
  ...props 
}: AnimatedLabelProps) {
  const Component = motion[as] as typeof motion.span;
  
  return (
    <Component
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
}

// Remove stagger animations - just a regular container
interface StaggerLabelGroupProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

export function StaggerLabelGroup({ children, staggerDelay = 0.08, className = "" }: StaggerLabelGroupProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

// No animations - completely static
export function StaggerLabelItem({ 
  children, 
  className = "",
  variant = "fade" 
}: { 
  children: ReactNode; 
  className?: string;
  variant?: "fade" | "slide" | "scale" | "bounce";
}) {
  return (
    <motion.div
      className={className}
    >
      {children}
    </motion.div>
  );
}