import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChakraRadar } from '@/components/ChakraRadar';
import { ChakraCard } from '@/components/ChakraCard';
import { LineBookingButton, LineBookingCard } from '@/components/LineBookingButton';
import { TestResult, chakraInfo } from '@/lib/chakraData';
import { motion } from 'framer-motion';

interface ResultsProps {
  result: TestResult;
  onRetake: () => void;
}

export function Results({ result, onRetake }: ResultsProps) {
  const [selectedChakra, setSelectedChakra] = useState<string | null>(null);

  const selectedChakraInfo = selectedChakra ? chakraInfo[selectedChakra] : null;

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            您的脈輪能量檢測結果
          </h1>
          <p className="text-lg text-muted-foreground">
            {result.personalizedInsight}
          </p>
        </motion.div>

        {/* Overall Score */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="chakra-glow rounded-lg p-8 bg-white mb-12 text-center"
        >
          <h2 className="text-2xl font-semibold text-foreground mb-4">整體能量指數</h2>
          <div className="flex items-center justify-center gap-4">
            <div className="text-6xl font-bold text-primary">{result.overallScore.toFixed(2)}</div>
            <div className="text-right">
              <p className="text-lg text-muted-foreground">/ 5.00</p>
              <p className="text-sm text-primary font-semibold mt-2">
                {result.overallScore >= 4.25
                  ? '高度平衡 ✨'
                  : result.overallScore >= 3.5
                    ? '平衡良好 🌟'
                    : result.overallScore >= 2.5
                      ? '需要調整 ⚡'
                      : '需要關注 🌙'}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Radar Chart */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="chakra-glow rounded-lg p-8 bg-white mb-12"
        >
          <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
            脈輪能量平衡圖
          </h2>
          <ChakraRadar results={result.results} />
          <p className="text-center text-sm text-muted-foreground mt-4">
            理想狀態是均勻的七邊形。點擊下方的脈輪卡片了解更多詳情。
          </p>
        </motion.div>

        {/* Chakra Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-foreground mb-6">各脈輪詳情</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {result.results.map((chakra, index) => (
              <motion.div
                key={chakra.chakraId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <ChakraCard
                  chakra={chakra}
                  onClick={() => setSelectedChakra(chakra.chakraId)}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Detailed Chakra Info */}
        {selectedChakraInfo && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="chakra-glow rounded-lg p-8 mb-12"
            style={{ backgroundColor: selectedChakraInfo.bgColorLight }}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  {selectedChakraInfo.name}
                </h2>
                <p className="text-muted-foreground">{selectedChakraInfo.englishName}</p>
              </div>
              <button
                onClick={() => setSelectedChakra(null)}
                className="text-2xl text-muted-foreground hover:text-foreground"
              >
                ✕
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">基本信息</h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-medium">位置：</span>
                    {selectedChakraInfo.position}
                  </p>
                  <p>
                    <span className="font-medium">顏色：</span>
                    <span
                      className="inline-block w-4 h-4 rounded-full ml-2"
                      style={{ backgroundColor: selectedChakraInfo.colorHex }}
                    />
                    {selectedChakraInfo.color}
                  </p>
                  <p>
                    <span className="font-medium">元素：</span>
                    {selectedChakraInfo.element}
                  </p>
                  <p>
                    <span className="font-medium">主題：</span>
                    {selectedChakraInfo.theme}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">肯定語</h3>
                <p className="italic text-primary font-medium text-lg">
                  "{selectedChakraInfo.affirmation}"
                </p>
              </div>
            </div>

            <div className="spiritual-divider" />

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">平衡時的特質</h3>
                <ul className="space-y-2">
                  {selectedChakraInfo.balancedTraits.map((trait, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <span className="text-primary">✓</span>
                      {trait}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">不平衡時的表現</h3>
                <ul className="space-y-2">
                  {selectedChakraInfo.imbalancedTraits.map((trait, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <span className="text-destructive">✗</span>
                      {trait}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="spiritual-divider" />

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">平衡建議</h3>
              <ul className="space-y-3">
                {selectedChakraInfo.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm">
                    <span className="text-accent font-bold mt-0.5">•</span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="spiritual-divider" />

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">個性化指引</h3>
              <p className="text-sm text-foreground leading-relaxed">
                {selectedChakraInfo.personalizedGuidance}
              </p>
            </div>
          </motion.div>
        )}

        {/* Deep Chakra Testing Guidance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="chakra-glow rounded-lg p-8 mb-12 bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-primary"
        >
          <h2 className="text-2xl font-bold text-foreground mb-4">想要更深入的脈輪檢測？</h2>
          <p className="text-foreground mb-4">
            這份線上檢測提供了您脈輪能量的初步了解。但每個人的能量狀況都是獨特的，根本原因可能很複雜。
          </p>
          <p className="text-foreground mb-6">
            透過深度一對一的脈輪掃描檢測，子芸老師與工作夥伴可以協助你：
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">✨</span>
              <span>直接感知您的能量場，找出不平衡的根本原因</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">✨</span>
              <span>提供個性化的療癒方案和靈性指導</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">✨</span>
              <span>幫助您快速達到能量平衡和靈性成長</span>
            </li>
          </ul>
          <p className="text-sm text-muted-foreground">
            準備好開始您的靈性療癒之旅了嗎？點擊下方按鈕預約深度檢測。
          </p>
        </motion.div>

        {/* LINE Booking Card */}
        <LineBookingCard />

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            onClick={onRetake}
            variant="outline"
            size="lg"
            className="px-8 py-3"
          >
            重新測試
          </Button>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          此結果僅供參考。透過 LINE 與子芸老師聯繫，獲得更深入的靈性指導。
        </motion.p>
      </div>
    </div>
  );
}
