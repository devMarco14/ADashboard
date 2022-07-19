import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import { WeekContext, LoadContext } from 'libs/context';
import { ReportData } from 'types/dashboard';
import { GRAPH_LOADING_TYPE } from 'libs/utils/constants';
import useReportLoad from '../hooks/useReportLoad';

interface LineGraphProps {
  currentData: ReportData[] | undefined;
}

export default function LineGraph({ currentData }: LineGraphProps) {
  const { changeLoadingState } = React.useContext(LoadContext);

  React.useEffect(() => {
    changeLoadingState({
      type: GRAPH_LOADING_TYPE,
      payload: { report: true },
    });
  }, []);

  React.useEffect(() => {
    if (currentData) {
      setTimeout(() => {
        changeLoadingState({
          type: GRAPH_LOADING_TYPE,
          payload: { report: false },
        });
      }, 1000);
    }
  }, [currentData]);

  return (
    <ResponsiveContainer width="100%" height="50%">
      <LineChart
        data={currentData}
        margin={{
          top: 30,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="1" vertical={false} />
        <XAxis
          dataKey="date"
          stroke="5550bd"
          domain={['dataMin', 'dataMax']}
          padding={{ left: 40, right: 40 }}
        />
        <YAxis />
        <Tooltip />
        <Line
          type="linear"
          dataKey="roas"
          stroke="#596cf6"
          activeDot={{ r: 6 }}
          strokeWidth={2}
        />
        <Line
          type="linear"
          dataKey="click"
          stroke="#85da47"
          activeDot={{ r: 6 }}
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
