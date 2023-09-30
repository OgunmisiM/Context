import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { UserContextProvider } from './UserContext';
import App from './App';

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </StrictMode>
);
