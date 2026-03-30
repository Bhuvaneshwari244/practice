import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, MapPin } from "lucide-react";

interface StateGroupHeaderProps {
  state: string;
  marketCount: number;
  rateCount: number;
  isExpanded: boolean;
  onToggle: () => void;
  index: number;
}

export function StateGroupHeader({ state, marketCount, rateCount, isExpanded, onToggle, index }: StateGroupHeaderProps) {
  return (
    <motion.button
      onClick={onToggle}
      className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-primary/8 border border-primary/15 hover:bg-primary/12 transition-colors group"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05, type: "spring", stiffness: 400, damping: 15 }}
    >
      <div className="flex items-center gap-2">
        <MapPin size={14} className="text-primary" />
        <span className="font-display font-semibold text-foreground text-sm">{state}</span>
        <span className="text-[10px] text-muted-foreground bg-secondary/80 px-2 py-0.5 rounded-full">
          {marketCount} markets • {rateCount} rates
        </span>
      </div>
      <motion.span
        animate={{ rotate: isExpanded ? 180 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <ChevronDown size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
      </motion.span>
    </motion.button>
  );
}
