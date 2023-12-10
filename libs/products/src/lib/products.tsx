import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from 'apps/react-monorepo/src/app/app';
import AppI from 'apps/inventory/src/app/app';
export const NInventory: React.FC = () => (
  <Routes>
    <Route path="/app" element={<App />} />
    <Route path="/inventory" element={<AppI />} />
  </Routes>
);
