import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './app/app';
import { NInventory } from '@react-monorepo/products';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      {/* <Routes>
        <Route path="/app" element={<App />} />
      </Routes> */}
      <NInventory />
    </BrowserRouter>
  </StrictMode>
);
