import React, { useCallback, useState } from 'react';
import { WeekContext } from 'libs/context';
import { ReportData } from 'types/dashboard';
import { TargetType } from 'types/media-status';
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
    (key: TargetType): number => {
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
    (key: TargetType): number => {
      const average = sumData(key) / report.length;
      return average;
    },
    [report, sumData],
  );

  return { sumData, averageData };
}
