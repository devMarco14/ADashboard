import React, { useState } from 'react';
import { format } from 'date-fns';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
} from 'recharts';

import { WeekContext, LoadContext } from 'libs/context';
import { ReportData, ReportType } from 'types/dashboard';
import { GRAPH_LOADING_TYPE } from 'libs/utils/constants';
import useReportLoad from '../hooks/useReportLoad';

// export default function LineGraph({ currentData }: LineGraphProps) {
//   const { changeLoadingState } = React.useContext(LoadContext);

interface LineGraphProps {
  currentData: ReportData[] | undefined;
}

export default function LineGraph({
  firstValue,
  secondValue,
  currentData,
}: any) {
  const [report, setReport] = useState<ReportData[]>();
  const { changeLoadingState } = React.useContext(LoadContext);
  // const { currentWeek } = React.useContext(WeekContext);

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
          dataKey="newDate"
          stroke="5550bd"
          padding={{ left: 40, right: 40 }}
          // domain={['dataMin', 'dataMax']}
        >
          <Label value="date" position="bottom" />
        </XAxis>
        <YAxis yAxisId="left">
          <Label value={firstValue} angle={-90} position="left" />
        </YAxis>
        <YAxis yAxisId="right" orientation="right">
          <Label value={secondValue} angle={90} position="right" />
        </YAxis>
        <Tooltip />
        <Line
          yAxisId="left"
          type="linear"
          dataKey={firstValue}
          stroke="#596cf6"
          activeDot={{ r: 6 }}
          strokeWidth={2}
        />
        <Line
          yAxisId="right"
          type="linear"
          dataKey={secondValue}
          stroke="#85da47"
          activeDot={{ r: 6 }}
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
