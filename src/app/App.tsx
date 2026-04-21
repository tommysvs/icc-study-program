import { useState } from 'react';
import { HomePage } from '../pages/HomePage';
import { StudyProgramPage } from '../pages/StudyProgramPage';
import { ProgressTimelinePage } from '../pages/ProgressTimelinePage';
import { AppLayout } from './AppLayout';

type PageType = 'home' | 'program' | 'timeline';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'timeline':
        return <ProgressTimelinePage />;
      case 'program':
        return <StudyProgramPage />;
      case 'home':
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <AppLayout currentPage={currentPage} onNavigate={setCurrentPage}>
      {renderPage()}
    </AppLayout>
  );
}

export default App;