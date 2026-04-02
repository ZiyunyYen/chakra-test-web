import { useState } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import ErrorBoundary from './components/ErrorBoundary';
import { ThemeProvider } from './contexts/ThemeContext';
import { Welcome } from './pages/Welcome';
import { Quiz } from './pages/Quiz';
import { Results } from './pages/Results';
import { ChakraKnowledge } from './pages/ChakraKnowledge';
import { generateTestResult, TestResult } from './lib/chakraData';

type PageType = 'welcome' | 'quiz' | 'results' | 'knowledge';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('welcome');
  const [testResult, setTestResult] = useState<TestResult | null>(null);

  const handleStartQuiz = () => {
    setCurrentPage('quiz');
  };

  const handleCompleteQuiz = (answers: Record<number, number>) => {
    const result = generateTestResult(answers);
    setTestResult(result);
    setCurrentPage('results');
  };

  const handleRetakeTest = () => {
    setCurrentPage('welcome');
    setTestResult(null);
  };

  const handleNavigateToKnowledge = () => {
    setCurrentPage('knowledge');
  };

  const handleBackToHome = () => {
    setCurrentPage('welcome');
  };

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <main className="min-h-screen">
            {currentPage === 'welcome' && <Welcome onStart={handleStartQuiz} onKnowledge={handleNavigateToKnowledge} />}
            {currentPage === 'quiz' && <Quiz onComplete={handleCompleteQuiz} />}
            {currentPage === 'results' && testResult && (
              <Results result={testResult} onRetake={handleRetakeTest} />
            )}
            {currentPage === 'knowledge' && <ChakraKnowledge />}
          </main>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
