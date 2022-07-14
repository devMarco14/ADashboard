import LandingPage from 'pages/LandingPage';
import NotFoundPage from 'pages/NotFoundPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardLayout from 'components/dashboard/DashboardLayout';
import Path from './Path';

function Routing() {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path={Path.LandingPage} element={<DashboardLayout />} />
    </Routes>
  );
}

export default Routing;
