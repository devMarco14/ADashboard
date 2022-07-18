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
      // json-server의 x-total-count 헤더로 확인한 총 데이터 개수
      const totalItems = firstReportData.headers['x-total-count'];
      // 총 데이터 개수를 7로 나눈 후 올림처리해 산출한 총 주
      const totalWeeks = Math.ceil(Number(totalItems) / 7);
      // 루프를 위해 생성한 임시 배열
      const weekIndexes = Array.from({ length: totalWeeks }, (v, k) => k);
      // Week 리스트를 저장하기 위한 배열
      const testWeekList: string[][] = [];
      // 매 주의 첫째날을 저장할 변수 - 기본값: 첫 번째 데이터의 date
      let currentFirstDate = firstReportData.data[0].date;
      // Week 리스트를 생성하는 루프
      weekIndexes.forEach(() => {
        // 첫째날 Date객체로 변환
        const firstDate = new Date(currentFirstDate);
        // 첫째날의 요일의 인덱스 값
        const firstDateDay = getDay(firstDate);
        // addDays로 산출한 해당 주의 마지막날의 날짜
        const lastDate = addDays(firstDate, 6 - firstDateDay);
        // 첫째날을 yyyy-MM-dd 형식으로 수정
        const formattedFirst = format(firstDate, COMMON_DATE_FORMAT);
        // 마지막날을 yyyy-MM-dd 형식으로 수정
        const formattedLast = format(lastDate, COMMON_DATE_FORMAT);
        // 현재 루프를 도는 주의 첫째날, 마지막날 조합을 Week리스트에 추가
        testWeekList.push([formattedFirst, formattedLast]);
        // 첫째날 변수의 값을 다음주의 첫째날로 갱신
        currentFirstDate = addDays(firstDate, 6 - firstDateDay + 1);
      });
      setProcessedWeeks(testWeekList);
    }
  }, [firstReportData]);

  return { processedWeeks };
}
