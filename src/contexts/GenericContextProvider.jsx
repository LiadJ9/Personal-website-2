import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const GenericContext = createContext({});

export const GenericContextProvider = ({ children }) => {
  const [lightMode, setLightMode] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const storageLight = JSON.parse(localStorage.getItem('light-mode'));

    if (storageLight !== null) setLightMode(storageLight);
    else {
      setLightMode(false);
      localStorage.setItem('light-mode', false);
    }
  }, []);

  return (
    <GenericContext.Provider value={{ isMobile, lightMode, setLightMode }}>
      {children}
    </GenericContext.Provider>
  );
};

GenericContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GenericContext;
