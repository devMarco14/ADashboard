import LandingPage from 'pages/LandingPage';
import NotFoundPage from 'pages/NotFoundPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardLayout from 'components/dashboard/DashboardLayout';
// import WeekContext from 'libs/context';
import Path from './Path';

function Routing() {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      {/* <WeekContext.Provider value={React.useMemo(() => [], [])}> */}
      <Route path={Path.LandingPage} element={<DashboardLayout />} />
      {/* </WeekContext.Provider> */}
    </Routes>
  );
}

export default Routing;
