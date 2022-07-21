import React, { useCallback, useState } from 'react';
import { ReportData, ReportType } from 'types/dashboard';

export default function useTotalData(
  currentData: ReportData[] | undefined,
  previousData: ReportData[] | undefined,
) {
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
    } else if (previousData && previousData.length <= 1) {
      setPreviousReport(currentData as ReportData[]);
      isReportsEqual.current = true;
    }
  }, [currentData, previousData]);

  const sumData = useCallback(
    (key: ReportType, dataArray = currentReport): number => {
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
      const average =
        parseInt(String(sumData(key, dataArray)), 10) / dataArray.length;
      return average;
    },
    [currentReport, sumData],
  );

  const diffData = useCallback(
    (key: ReportType): number | undefined => {
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
          result = Number(diffResult.toFixed(2));
        }
      }
      return result;
    },
    [previousReport, averageData, sumData],
  );

  return { sumData, averageData, diffData };
}
