import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GenericContextProvider } from 'contexts';
import App from './App.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/Personal-website-2',
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GenericContextProvider>
      <RouterProvider router={router} />
    </GenericContextProvider>
  </React.StrictMode>
);
