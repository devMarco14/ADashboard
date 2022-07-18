import AppLayout from 'components/header/AppLayout';
import AdManagementPage from 'pages/AdManagementPage';
import LandingPage from 'pages/LandingPage';
import NotFoundPage from 'pages/NotFoundPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardLayout from 'components/dashboard/DashboardLayout';
import ContextLayout from 'components/dashboard/ContextLayout';
import Path from './Path';

function Routing() {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />

      <Route element={<AppLayout />}>
        <Route path={Path.LandingPage} element={<ContextLayout />} />
        <Route path={Path.ADManagementPage} element={<AdManagementPage />} />
      </Route>
    </Routes>
  );
}

export default Routing;
