import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const GenericContext = createContext({});

export const GenericContextProvider = ({ children }) => {
  const [lightMode, setLightMode] = useState(null);
  const isMobile = window.innerWidth <= 768;

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
