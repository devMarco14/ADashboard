import React from 'react';
import { getDay, addDays, format } from 'date-fns';
import { AxiosResponse } from 'axios';
import { COMMON_DATE_FORMAT } from 'libs/utils/constants';

export default function useFormatize(
  firstReportData: AxiosResponse | undefined,
) {
  const [processedWeeks, setProcessedWeeks] = React.useState<string[][]>([]);

  React.useEffect(() => {
    if (firstReportData) {
      const totalItems = firstReportData.headers['x-total-count'];
      const totalWeeks = Math.ceil(Number(totalItems) / 7);
      const weekIndexes = Array.from({ length: totalWeeks }, (v, k) => k);
      const testWeekList: string[][] = [];
      let currentFirstDate = firstReportData.data[0].date;
      weekIndexes.forEach(() => {
        const firstDate = new Date(currentFirstDate);
        const firstDateDay = getDay(firstDate);
        const lastDate = addDays(firstDate, 6 - firstDateDay);
        const formattedFirst = format(firstDate, COMMON_DATE_FORMAT);
        const formattedLast = format(lastDate, COMMON_DATE_FORMAT);
        testWeekList.push([formattedFirst, formattedLast]);
        currentFirstDate = addDays(firstDate, 6 - firstDateDay + 1);
      });
      setProcessedWeeks(testWeekList);
    }
  }, [firstReportData]);

  return { processedWeeks };
}
