import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Preloader } from './components/Preloader';
import { DarkNavigation } from './components/DarkNavigation';
import { DarkHero } from './components/DarkHero';
import { MenuOverlay } from './components/MenuOverlay';
import { ContactState } from './components/ContactState';

type AppState = 'loading' | 'hero' | 'menu' | 'contact-loading' | 'contact';

export default function App() {
  const [state, setState] = useState<AppState>('loading');
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const handlePreloaderComplete = () => {
    setState('hero');
  };

  const handleMenuClick = () => {
    setActiveProject(null);
    setState('menu');
  };

  const handleMenuClose = () => {
    setActiveProject(null);
    setState('hero');
  };

  const handleContactClick = () => {
    setActiveProject(null);
    setState('contact-loading');
    setTimeout(() => {
      setState('contact');
    }, 1600);
  };

  const handleContactBack = () => {
    setActiveProject(null);
    setState('hero');
  };

  const handleHomeClick = () => {
    setActiveProject(null);
    setState('hero');
  };

  return (
    <div className="h-screen overflow-hidden">
      <AnimatePresence>
        {state === 'loading' && <Preloader onComplete={handlePreloaderComplete} />}
        {state === 'contact-loading' && <Preloader onComplete={() => {}} />}
      </AnimatePresence>

      {(state === 'hero' || state === 'menu') && (
        <>
          <DarkNavigation onMenuClick={handleMenuClick} onContactClick={handleContactClick} onHomeClick={handleHomeClick} />
          <DarkHero activeProject={activeProject} onProjectActivate={setActiveProject} onProjectClear={() => setActiveProject(null)} />
          <MenuOverlay isOpen={state === 'menu'} onClose={handleMenuClose} onContactClick={handleContactClick} onHomeClick={handleHomeClick} />
        </>
      )}

      {state === 'contact' && <ContactState onBack={handleContactBack} onHomeClick={handleHomeClick} />}
    </div>
  );
}
