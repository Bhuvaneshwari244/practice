import { motion } from "framer-motion";
import { ReactNode } from "react";

// Keep basic container functionality but remove automatic stagger animations
export function StaggerContainer({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

// Keep hover/click animations but remove automatic entrance animations
export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div 
      className={className}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
