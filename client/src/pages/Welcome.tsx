import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface WelcomeProps {
  onStart: () => void;
  onKnowledge?: () => void;
}

export function Welcome({ onStart, onKnowledge }: WelcomeProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-12">
      {/* Hero Background Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663179961631/PuzVJGvELWxh4eJoZ6MAP3/hero-spiritual-abstract-TcsR35Sy6zRcsTtzia6L9g.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3,
        }}
      />

      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            七脈輪能量檢測
          </h1>
          <p className="text-xl text-muted-foreground">
            探索您的內在能量，了解七個脈輪的平衡狀態
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="spiritual-divider"
        />

        {/* Description */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-4 text-foreground"
        >
          <p className="text-lg leading-relaxed">
            脈輪是人體能量系統的核心。通過這個互動檢測，您將了解自己七個主要脈輪的能量狀態，並獲得個性化的平衡建議。
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="chakra-glow rounded-lg p-6 bg-white/50 backdrop-blur-sm"
            >
              <div className="text-3xl mb-3">🧘</div>
              <h3 className="font-semibold text-foreground mb-2">28 個精心設計的問題</h3>
              <p className="text-sm text-muted-foreground">
                每個脈輪 4 個問題，全面評估您的能量狀態
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="chakra-glow rounded-lg p-6 bg-white/50 backdrop-blur-sm"
            >
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-semibold text-foreground mb-2">視覺化結果分析</h3>
              <p className="text-sm text-muted-foreground">
                通過雷達圖和詳細卡片查看您的能量平衡
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="chakra-glow rounded-lg p-6 bg-white/50 backdrop-blur-sm"
            >
              <div className="text-3xl mb-3">💡</div>
              <h3 className="font-semibold text-foreground mb-2">個性化建議</h3>
              <p className="text-sm text-muted-foreground">
                根據您的結果獲得針對性的平衡和療癒建議
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="chakra-glow rounded-lg p-6 bg-white/50 backdrop-blur-sm"
            >
              <div className="text-3xl mb-3">✨</div>
              <h3 className="font-semibold text-foreground mb-2">靈性洞察</h3>
              <p className="text-sm text-muted-foreground">
                深入了解每個脈輪的特質和平衡方法
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <Button
            onClick={onStart}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            開始檢測
          </Button>
          {onKnowledge && (
            <Button
              onClick={onKnowledge}
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              脈輪知識庫
            </Button>
          )}
        </motion.div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-sm text-muted-foreground pt-8"
        >
          此檢測大約需要 5-10 分鐘。請在安靜、放鬆的環境中完成。
        </motion.p>
      </div>
    </div>
  );
}
