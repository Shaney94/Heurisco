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

  const handlePreloaderComplete = () => {
    setState('hero');
  };

  const handleMenuClick = () => {
    setState('menu');
  };

  const handleMenuClose = () => {
    setState('hero');
  };

  const handleContactClick = () => {
    setState('contact-loading');
    setTimeout(() => {
      setState('contact');
    }, 1600);
  };

  const handleContactBack = () => {
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
          <DarkNavigation onMenuClick={handleMenuClick} onContactClick={handleContactClick} />
          <DarkHero />
          <MenuOverlay isOpen={state === 'menu'} onClose={handleMenuClose} onContactClick={handleContactClick} />
        </>
      )}

      {state === 'contact' && <ContactState onBack={handleContactBack} />}
    </div>
  );
}