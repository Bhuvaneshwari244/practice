import { motion } from "framer-motion";
import { Area, AreaChart, ResponsiveContainer } from "recharts";

interface SparklineProps {
  data: number[];
  height?: number;
  showTrend?: boolean;
}

export function Sparkline({ data, height = 40, showTrend = true }: SparklineProps) {
  if (!data || data.length < 2) return null;
  
  const chartData = data.map((value, index) => ({ 
    day: index, 
    price: value 
  }));
  
  const firstPrice = data[0];
  const lastPrice = data[data.length - 1];
  const isUp = lastPrice > firstPrice;
  const isDown = lastPrice < firstPrice;
  
  const strokeColor = isUp 
    ? "hsl(var(--accent))" 
    : isDown 
    ? "hsl(var(--destructive))" 
    : "hsl(var(--muted-foreground))";
  
  const fillColor = isUp 
    ? "hsl(var(--accent) / 0.2)" 
    : isDown 
    ? "hsl(var(--destructive) / 0.2)" 
    : "hsl(var(--muted) / 0.3)";

  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      style={{ height, originX: 0 }}
      className="w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartData} margin={{ top: 2, right: 2, bottom: 2, left: 2 }}>
          <defs>
            <linearGradient id={`sparkGradient-${isUp ? 'up' : isDown ? 'down' : 'neutral'}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={strokeColor} stopOpacity={0.3} />
              <stop offset="100%" stopColor={strokeColor} stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="price"
            stroke={strokeColor}
            strokeWidth={1.5}
            fill={`url(#sparkGradient-${isUp ? 'up' : isDown ? 'down' : 'neutral'})`}
            dot={false}
            isAnimationActive={true}
            animationDuration={800}
            animationEasing="ease-out"
          />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  );
}