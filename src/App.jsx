import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  NavBar,
  LandingTypeWriter,
  LandingUnits,
  LandingStacks,
  LandingDesigns,
  BottomNav,
} from './components';
import { useGeneric } from './hooks';
import './output.css';

function App() {
  const { lightMode } = useGeneric();
  const [canInit, setCanInit] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className={`App ${lightMode !== true && 'dark'}`}>
      <NavBar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1,
        }}
        onAnimationComplete={() => setCanInit(true)}
        className='relative flex flex-col w-full z-0 min-h-screen bg-text-white dark:bg-darkest-black'
      >
        {canInit && (
          <>
            <LandingTypeWriter />
            <LandingUnits />
            <LandingDesigns />
            <LandingStacks />
            <BottomNav />
          </>
        )}
      </motion.div>
    </div>
  );
}

export default App;
