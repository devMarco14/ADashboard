import React from 'react';
import axios from 'axios';
import { getDay, addDays, format } from 'date-fns';
import styled from 'styled-components';
import SelectBox from './subComponents/SelectBox';

const dateFormat = 'yyyy-MM-dd';

export default function DashboardLayout() {
  // 셀렉트 박스 표시 데이터 + 컨텍스트 저장 데이터
  const [week, setWeek] = React.useState<string[]>([
    '1900-01-01',
    '1900-12-31',
  ]);
  // get 요청으로 받아온 전체 데이터 저장
  const [totalDays, setTotalDays] = React.useState<Record<string, string>[]>();
  // get 요청으로 받은 데이터에서 date만 추출 후 dateFormat 형태로 가공한 데이터 저장
  const [totalWeeks, setTotalWeeks] = React.useState<any>([]);

  React.useEffect(() => {
    axios.get('http://localhost:8080/report').then((response) => {
      setTotalDays(response.data);
    });
  }, []);

  React.useEffect(() => {
    if (totalDays) {
      // 받아온 데이터에서 date만 추출
      const extractedDates = totalDays.map(
        (reportData: any) => reportData.date,
      );
      // date를 [주 첫째 날, 주 마지막 날] 형태로 가공하기 위한 배열
      const temporaryWeeks: any = [];
      // 받아온 date를 yyyy-MM-dd 형태로 가공
      extractedDates.forEach((date: string, index: number) => {
        // 첫 번째 인덱스인 2022-02-01의 경우 일주일을 채울 수 없어 예외처리
        if (index === 0) {
          // 주 마지막 날 추출을 위해 첫 번째 날을 Date 객체로 변환
          const firstDate = new Date(date);
          // date-fns getDay(): 전달된 Date 객체의 요일 반환
          const firstDateDay = getDay(firstDate);
          // date-fns addDays(): 전달된 Date 객체에 요일을 더함
          const lastDate = addDays(firstDate, 6 - firstDateDay);
          // 첫째날을 yyyy-MM-dd 형태로 가공 - 필요 없는 과정이라 삭제할 수도 있음
          const formattedFirst = format(firstDate, dateFormat);
          // 마지막날을 yyyy-MM-dd 형태로 가공
          const formattedLast = format(lastDate, dateFormat);
          // week 데이터 목록에 저장하기 위해 temporaryWeeks에 배열 삽입
          temporaryWeeks.push([formattedFirst, formattedLast]);
          // 나머지 요일 중 일요일인 날짜만 추출
        } else if (getDay(new Date(date)) === 0) {
          // 이하 동일
          const firstDate = new Date(date);
          const firstDateDay = getDay(firstDate);
          const lastDate = addDays(firstDate, 6 - firstDateDay);
          const formattedFirst = format(firstDate, dateFormat);
          const formattedLast = format(lastDate, dateFormat);
          temporaryWeeks.push([formattedFirst, formattedLast]);
        }
      });
      // [첫째날, 마지막날] 배열을 원소로 하는 배열을 state에 저장
      setTotalWeeks(temporaryWeeks);
    }
  }, [totalDays]);

  React.useEffect(() => {
    if (totalWeeks[0]) {
      // 전체 주 데이터를 저장
      setWeek(totalWeeks[0]);
    }
  }, [totalWeeks]);

  return (
    <ChangeOrDeleteThisLater>
      <DashboardHeader>대시보드</DashboardHeader>
      <SelectBox week={week} weeksList={totalWeeks} setWeek={setWeek} />
    </ChangeOrDeleteThisLater>
  );
}

const ChangeOrDeleteThisLater = styled.article`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  * {
    border: 1px solid black;
  }
`;
const DashboardHeader = styled.h1`
  font-size: calc(${({ theme }) => theme.fontSizes.xxlarge} * 1.5);
`;
