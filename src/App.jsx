import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  NavBar,
  LandingTypeWriter,
  LandingUnits,
  LandingStacks,
} from './components';
import { useGeneric } from './hooks';
import './compiled.css';

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
        className='flex flex-col w-full z-0 min-h-screen  bg-text-white dark:bg-darkest-black'
      >
        {canInit && (
          <>
            <LandingTypeWriter />
            <LandingUnits />
            <LandingStacks />
          </>
        )}
      </motion.div>
    </div>
  );
}

export default App;
