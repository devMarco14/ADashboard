import AppLayout from 'components/header/AppLayout';
import AdManagementPage from 'pages/AdManagementPage';
import NotFoundPage from 'pages/NotFoundPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardContext from 'components/dashboard/DashboardContext';
import Path from './Path';

function Routing() {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />

      <Route element={<AppLayout />}>
        <Route path={Path.LandingPage} element={<DashboardContext />} />
        <Route path={Path.ADManagementPage} element={<AdManagementPage />} />
      </Route>
    </Routes>
  );
}

export default Routing;
