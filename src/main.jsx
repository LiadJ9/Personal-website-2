import React from 'react';
import ReactDOM from 'react-dom/client';
import { GenericContextProvider } from './contexts';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GenericContextProvider>
      <App />
    </GenericContextProvider>
  </React.StrictMode>
);
