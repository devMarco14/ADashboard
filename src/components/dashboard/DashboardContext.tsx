import React from 'react';
import { WeekProvider, LoadProvider } from 'libs/context';
import DashboardLayout from './DashboardLayout';

export default function DashboardContext() {
  return (
    <WeekProvider>
      <LoadProvider>
        <DashboardLayout />
      </LoadProvider>
    </WeekProvider>
  );
}
