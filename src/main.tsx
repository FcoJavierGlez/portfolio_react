import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import PortfolioApp from './PortfolioApp';
import { ThemeProvider } from './components/theme-provider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <PortfolioApp />
    </ThemeProvider>
  </StrictMode>,
)
