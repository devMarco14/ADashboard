import AppHeader from 'components/header/AppHeader';
import LandingPage from 'pages/LandingPage';
import NotFoundPage from 'pages/NotFoundPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Path from './Path';

function Routing() {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route element={<AppHeader />}>
        <Route path={Path.LandingPage} element={<LandingPage />} />
      </Route>
    </Routes>
  );
}

export default Routing;
