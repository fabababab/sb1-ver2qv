import React, { useState } from 'react';
import TopNavigation from './components/layout/TopNavigation';
import TopBar from './components/layout/TopBar';
import ThemeManager from './components/theme/ThemeManager';
import ComponentGallery from './components/library/ComponentGallery';
import Builder from './components/builder/Builder';

type View = 'components' | 'theme' | 'builder' | 'cms' | 'deploy';

function App() {
  const [currentView, setCurrentView] = useState<View>('components');

  const handleNavigation = (path: string) => {
    const view = path.replace('/', '') as View;
    setCurrentView(view || 'components');
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <TopNavigation onNavigate={handleNavigation} />
      <TopBar />
      <main className="flex-1 overflow-hidden">
        {currentView === 'components' && <ComponentGallery />}
        {currentView === 'theme' && <ThemeManager />}
        {currentView === 'builder' && <Builder />}
      </main>
    </div>
  );
}

export default App;