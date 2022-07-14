import LandingPage from 'pages/LandingPage';
import NotFoundPage from 'pages/NotFoundPage';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Path from './Path';

function Routing() {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path={Path.LandingPage} element={<LandingPage />} />
    </Routes>
  );
}

export default Routing;
