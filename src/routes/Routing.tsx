import LandingPage from 'pages/LandingPage';
import NotFoundPage from 'pages/NotFoundPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardLayout from 'components/dashboard/DashboardLayout';
import WeekProvider from 'libs/context';
import Path from './Path';

function Routing() {
  return (
    <WeekProvider>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path={Path.LandingPage} element={<DashboardLayout />} />
      </Routes>
    </WeekProvider>
  );
}

export default Routing;
