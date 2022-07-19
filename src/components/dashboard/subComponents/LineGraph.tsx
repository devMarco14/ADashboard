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

import { WeekContext } from 'libs/context';
import { ReportData, ReportType } from 'types/dashboard';
import useReportLoad from '../hooks/useReportLoad';

export default function LineGraph({ firstValue, secondValue }: any) {
  const [report, setReport] = useState<ReportData[]>();
  const { currentWeek } = React.useContext(WeekContext);

  const { totalDataContainingDates: reportData } = useReportLoad(
    currentWeek[0],
    currentWeek[1],
  );
  React.useEffect(() => {
    if (reportData) {
      // console.log(reportData);
      const newReportData: ReportData[] = [];
      reportData.forEach((object) => {
        const newObject = { ...object };
        const newDate = format(new Date(newObject.date), 'MM월 dd일');
        newObject.newDate = newDate;
        newReportData.push(newObject);
        // console.log(newReportData);
      });
      setReport(newReportData);
    }
  }, [reportData]);

  return (
    <ResponsiveContainer width="100%" height="50%">
      <LineChart
        data={report}
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
