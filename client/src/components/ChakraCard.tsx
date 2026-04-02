import { ChakraResult } from '@/lib/chakraData';
import { motion } from 'framer-motion';

interface ChakraCardProps {
  chakra: ChakraResult;
  onClick?: () => void;
}

export function ChakraCard({ chakra, onClick }: ChakraCardProps) {
  const getStatusEmoji = (status: string) => {
    switch (status) {
      case 'critical':
        return '🔴';
      case 'warning':
        return '🟠';
      case 'neutral':
        return '🟡';
      case 'good':
        return '🟢';
      case 'excellent':
        return '🔵';
      default:
        return '⚪';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
      className="chakra-glow rounded-lg p-6 cursor-pointer group"
      style={{ borderLeft: `4px solid ${chakra.statusColor}` }}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-foreground">{chakra.name}</h3>
        <span className="text-3xl">{getStatusEmoji(chakra.status)}</span>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">能量指數</span>
          <span className="text-2xl font-bold" style={{ color: chakra.statusColor }}>
            {chakra.score.toFixed(2)}
          </span>
        </div>

        <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(chakra.score / 5) * 100}%` }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-full rounded-full"
            style={{ backgroundColor: chakra.statusColor }}
          />
        </div>

        <div className="pt-2">
          <p className="text-sm font-medium" style={{ color: chakra.statusColor }}>
            {chakra.statusLabel}
          </p>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-secondary">
        <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
          點擊查看詳細建議 →
        </p>
      </div>
    </motion.div>
  );
}
