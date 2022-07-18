import React, { useCallback, useState } from 'react';
import { WeekContext } from 'libs/context';
import { ReportData, ReportType } from 'types/dashboard';
import useReportLoad from './useReportLoad';

export default function useTotalData() {
  const [report, setReport] = useState<ReportData[]>([]);
  const { currentWeek } = React.useContext(WeekContext);

  const { totalDataContainingDates: reportData } = useReportLoad(
    currentWeek[0],
    currentWeek[1],
  );
  React.useEffect(() => {
    if (reportData) {
      setReport(reportData);
    }
  }, [reportData]);

  const sumData = useCallback(
    (key: ReportType): any => {
      const result = report
        .map((item) => item[key])
        .reduce(
          (previousValue, currentValue) => previousValue + currentValue,
          0,
        );
      return result;
    },
    [report],
  );

  const averageData = useCallback(
    (key: ReportType): number => {
      const average = parseInt(sumData(key), 10) / report.length;
      return average;
    },
    [report, sumData],
  );

  return { sumData, averageData };
}
