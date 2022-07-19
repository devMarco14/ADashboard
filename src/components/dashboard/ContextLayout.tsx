import React from 'react';
import { WeekProvider, LoadProvider } from 'libs/context';
import DashboardLayout from './DashboardLayout';

export default function ContextLayout() {
  return (
    <WeekProvider>
      <LoadProvider>
        <DashboardLayout />
      </LoadProvider>
    </WeekProvider>
  );
}
