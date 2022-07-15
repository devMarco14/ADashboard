import React from 'react';
import { getDay, addDays, format } from 'date-fns';
import { ReportData } from 'types/dashboard';
import { COMMON_DATE_FORMAT } from 'libs/utils/constants';

export default function useFormatize(totalDays: ReportData[]) {
  // 가공 후 반환할 Week 데이터를 저장하기 위한 state
  const [processedWeeks, setProcessedWeeks] = React.useState<string[][]>([]);

  // Date 객체를 yyyy-MM-dd 포맷 문자열을 저장하는 배열로 변환하는 함수
  const processDatesToWeeks = (date: string): string[] => {
    const firstDate = new Date(date);
    const firstDateDay = getDay(firstDate);
    const lastDate = addDays(firstDate, 6 - firstDateDay);
    const formattedLast = format(lastDate, COMMON_DATE_FORMAT);

    return [date, formattedLast];
  };

  // 전체 데이터(totalDays)에서 날짜 정보만 추출해 [첫째날, 마지막날] 배열로 변환
  React.useEffect(() => {
    if (totalDays) {
      // 받아온 데이터에서 date만 추출
      const extractedDates = totalDays.map(
        (reportData: ReportData) => reportData.date,
      );
      // date를 [주 첫째 날, 주 마지막 날] 형태로 가공하기 위한 배열
      const temporaryWeeks: string[][] = [];
      // 받아온 date를 yyyy-MM-dd 형태로 가공
      extractedDates.forEach((date: string, index: number) => {
        // 첫 번째 인덱스인 2022-02-01의 경우 일주일을 채울 수 없어 예외처리
        if (index === 0) {
          const processedFirstWeekSet = processDatesToWeeks(date);
          temporaryWeeks.push(processedFirstWeekSet);
          // 나머지 요일 중 일요일인 날짜만 추출
        } else if (getDay(new Date(date)) === 0) {
          // 이하 동일
          const processedWeekSet = processDatesToWeeks(date);
          temporaryWeeks.push(processedWeekSet);
        }
      });
      // [첫째날, 마지막날] 배열을 원소로 하는 배열을 state에 저장
      setProcessedWeeks(temporaryWeeks);
    }
  }, [totalDays]);

  return { processedWeeks };
}
