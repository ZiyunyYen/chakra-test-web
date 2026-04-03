import { BrowserRouter as Router, Routes, Route } from 'wouter';
import Home from './pages/Home';
import ChakraKnowledge from './pages/ChakraKnowledge';
import Weather from './pages/Weather';
import NotFound from './pages/NotFound';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/chakra" component={ChakraKnowledge} />
          <Route path="/weather" component={Weather} />
          <Route component={NotFound} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
