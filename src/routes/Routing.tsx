<<<<<<< HEAD
import LineGraph from 'pages/Dashboard/LineGraph';
=======
import AppLayout from 'components/header/AppLayout';
import AdManagementPage from 'pages/AdManagementPage';
>>>>>>> e19de0f98c71807bd7d7ce25a997720b89959ed9
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
<<<<<<< HEAD
      <Route path={Path.LandingPage} element={<LandingPage />} />
      <Route path={Path.LineGraph} element={<LineGraph />} />
=======

      <Route element={<AppLayout />}>
        <Route path={Path.LandingPage} element={<DashboardLayout />} />
        <Route path={Path.ADManagementPage} element={<AdManagementPage />} />
      </Route>
>>>>>>> e19de0f98c71807bd7d7ce25a997720b89959ed9
    </Routes>
  );
}

export default Routing;
