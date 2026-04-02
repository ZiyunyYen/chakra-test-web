import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { chakraQuestions } from '@/lib/chakraData';
import { motion } from 'framer-motion';

interface QuizProps {
  onComplete: (answers: Record<number, number>) => void;
}

export function Quiz({ onComplete }: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [selectedScore, setSelectedScore] = useState<number | null>(null);

  const currentQuestion = chakraQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / chakraQuestions.length) * 100;

  const handleScoreSelect = (score: number) => {
    setSelectedScore(score);
    const newAnswers = { ...answers, [currentQuestion.id]: score };
    setAnswers(newAnswers);

    // Auto-advance after a short delay
    setTimeout(() => {
      if (currentQuestionIndex < chakraQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedScore(null);
      } else {
        onComplete(newAnswers);
      }
    }, 300);
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedScore(answers[chakraQuestions[currentQuestionIndex - 1].id] || null);
    }
  };

  const handleNext = () => {
    if (selectedScore !== null) {
      if (currentQuestionIndex < chakraQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedScore(answers[chakraQuestions[currentQuestionIndex + 1].id] || null);
      } else {
        onComplete(answers);
      }
    }
  };

  const scoreLabels = ['完全不同意', '不同意', '普通/中立', '同意', '完全同意'];
  const scoreColors = ['#E63946', '#FF8C42', '#FFD60A', '#06D6A0', '#4A90E2'];

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-foreground">七脈輪能量檢測</h1>
            <span className="text-lg font-semibold text-primary">
              {currentQuestionIndex + 1} / {chakraQuestions.length}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
              className="h-full bg-primary rounded-full"
            />
          </div>
        </motion.div>

        {/* Question Card */}
        <motion.div
          key={currentQuestionIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="chakra-glow rounded-lg p-8 bg-white mb-8"
        >
          <h2 className="text-2xl font-semibold text-foreground mb-8 leading-relaxed">
            {currentQuestion.question}
          </h2>

          {/* Score Options */}
          <div className="space-y-3 mb-8">
            {[1, 2, 3, 4, 5].map((score) => (
              <motion.button
                key={score}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleScoreSelect(score)}
                className={`w-full p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                  selectedScore === score
                    ? 'border-primary bg-primary/10'
                    : 'border-secondary hover:border-primary/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-foreground">{scoreLabels[score - 1]}</span>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
                    style={{ backgroundColor: scoreColors[score - 1] }}
                  >
                    {score}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4">
            <Button
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              variant="outline"
              className="flex-1"
            >
              上一題
            </Button>
            <Button
              onClick={handleNext}
              disabled={selectedScore === null}
              className="flex-1 bg-primary hover:bg-primary/90"
            >
              {currentQuestionIndex === chakraQuestions.length - 1 ? '完成' : '下一題'}
            </Button>
          </div>
        </motion.div>

        {/* Hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-sm text-muted-foreground"
        >
          請根據您的真實感受選擇答案。沒有對或錯的答案。
        </motion.p>
      </div>
    </div>
  );
}
