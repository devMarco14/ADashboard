import React, { useCallback, useState } from 'react';
import { WeekContext } from 'libs/context';
import { ReportData, ReportType } from 'types/dashboard';
import useReportLoad from './useReportLoad';

export default function useTotalData(currentData: any, previousData: any) {
  const [currentReport, setCurrentReport] = useState<ReportData[]>([]);
  const [previousReport, setPreviousReport] = useState<ReportData[]>([]);
  const isReportsEqual = React.useRef(true);

  React.useEffect(() => {
    if (currentData) {
      setCurrentReport(currentData);
    }
    if (previousData && previousData.length > 1) {
      setPreviousReport(previousData);
      isReportsEqual.current = false;
    } else {
      setPreviousReport(currentData);
      isReportsEqual.current = true;
    }
  }, [currentData, previousData]);

  const sumData = useCallback(
    (key: ReportType, dataArray = currentReport): any => {
      const result = dataArray
        .map((item) => item[key])
        .reduce(
          (previousValue, currentValue) => previousValue + currentValue,
          0,
        );
      return result;
    },
    [currentReport],
  );

  const averageData = useCallback(
    (key: ReportType, dataArray = currentReport): number => {
      const average = parseInt(sumData(key, dataArray), 10) / dataArray.length;
      return average;
    },
    [currentReport, sumData],
  );

  const diffData = useCallback(
    (key: ReportType): any => {
      let result;
      if (!isReportsEqual.current) {
        if (key === 'roas') {
          const diffResult =
            averageData(key) - averageData(key, previousReport);
          result = Math.round(diffResult);
        } else {
          const diffResult =
            ((sumData(key) - sumData(key, previousReport)) /
              sumData(key, previousReport)) *
            100;
          result = diffResult.toFixed(2);
        }
      }
      return result;
    },
    [currentReport, previousReport],
  );

  return { sumData, averageData, diffData };
}
