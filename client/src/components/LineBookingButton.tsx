import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface LineBookingButtonProps {
  chakraName?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outline';
  compact?: boolean;
}

export function LineBookingButton({ 
  chakraName, 
  size = 'lg',
  variant = 'default',
  compact = false
}: LineBookingButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  // LINE 官方帳號連結
  const LINE_URL = 'https://lin.ee/wWDur2G';

  const handleLineBooking = () => {
    // 打開 LINE 對話
    window.open(LINE_URL, '_blank');
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: compact ? 'px-6 py-2.5 text-base' : 'px-8 py-4 text-lg',
  };

  const variantClasses = {
    default: 'bg-[#D4AF37] hover:bg-[#C9A227] text-foreground font-semibold',
    outline: 'border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10',
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <button
        onClick={handleLineBooking}
        className={`
          ${sizeClasses[size]}
          ${variantClasses[variant]}
          rounded-lg font-semibold transition-all duration-300
          flex items-center justify-center gap-2
          shadow-md hover:shadow-lg
        `}
      >
        {!compact && (
          <svg
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19.365 9.863c.349-1.352.349-2.703.349-4.054 0-3.863-3.071-7.007-6.845-7.007-3.773 0-6.845 3.144-6.845 7.007 0 3.863 3.072 7.007 6.845 7.007.873 0 1.745-.175 2.617-.524.349-.175.698-.175 1.047 0l1.745.873c.349.175.698 0 .873-.349.175-.349 0-.698-.349-.873l-1.396-.698c-.175-.175-.349-.349-.349-.698 0-.349.175-.524.349-.698.698-.698 1.396-1.396 1.745-2.268.349-.524.698-1.396.698-2.268 0-.349 0-.698-.175-1.047zm-11.552 5.754c-.349 0-.698.175-.873.349-.175.175-.349.349-.349.698 0 .349.175.524.349.698.698.698 1.396 1.396 1.745 2.268.349.524.698 1.396.698 2.268 0 .349 0 .698-.175 1.047-.349 1.352-.349 2.703-.349 4.054 0 3.863 3.071 7.007 6.845 7.007 3.773 0 6.845-3.144 6.845-7.007 0-3.863-3.072-7.007-6.845-7.007-.873 0-1.745.175-2.617.524-.349.175-.698.175-1.047 0l-1.745-.873c-.349-.175-.698 0-.873.349-.175.349 0 .698.349.873l1.396.698c.175.175.349.349.349.698 0 .349-.175.524-.349.698-.698.698-1.396 1.396-1.745 2.268-.349.524-.698 1.396-.698 2.268 0 .349 0 .698.175 1.047z" />
          </svg>
        )}
        <span>
          {chakraName ? `通過 LINE 預約 ${chakraName} 解讀` : '立即預約完整的脈輪檢測'}
        </span>
      </button>
    </motion.div>
  );
}

// 簡化版本 - 用於結果頁面
export function LineBookingCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.9 }}
      className="text-center"
    >
      <LineBookingButton size="lg" variant="default" compact />
    </motion.div>
  );
}
