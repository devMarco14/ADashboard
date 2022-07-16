import React from 'react';
import axios from 'axios';
import { getDay, addDays, format } from 'date-fns';
import styled from 'styled-components';
import { ReportData } from 'types/dashboard';
import WeekProvider from 'libs/context';
import useFormatize from './hooks/useFormatize';
import useReportLoad from './hooks/useReportLoad';
import SelectBox from './subComponents/SelectBox';
import Test from './subComponents/Test';

export default function DashboardLayout() {
  // get 요청으로 받아온 전체 데이터 저장
  const { totalDataContainingDates } = useReportLoad();
  // 추출된 date를 dateFormat 형태로 가공한 데이터 저장
  const { processedWeeks } = useFormatize(
    totalDataContainingDates as ReportData[],
  );

  /* useReportLoad + useFormatize로 데이터를 받아오는 방법과 비교 부탁드립니다 */
  // 첫 번째 report 데이터를 저장하는 state
  const [firstReportData, setFirstReportData] = React.useState<any>();

  React.useEffect(() => {
    // eslint-disable-next-line consistent-return
    const getFirstReportData = async () => {
      try {
        // 데이터를 하나만 요청: json-server가 반환하는 x-total-count 헤더(= 해당 데이터 길이)를 확인 + 첫 번째 date를 확인하기 위함
        const response: any = await axios.get(
          'http://localhost:8080/report?_limit=1&_page=1',
        );
        // state에 저장
        setFirstReportData(response);
      } catch (error) {
        console.log(error);
      }
    };
    getFirstReportData();
  }, []);

  React.useEffect(() => {
    if (firstReportData) {
      // json-server의 x-total-count 헤더로 확인한 총 데이터 개수
      const totalItems = firstReportData.headers['x-total-count'];
      // 총 데이터 개수를 7로 나눈 후 올림처리해 산출한 총 주
      const totalWeeks = Math.ceil(Number(totalItems) / 7);
      // 루프를 위해 생성한 임시 배열
      const weekIndexes = Array.from({ length: totalWeeks }, (v, k) => k);
      // Week 리스트를 저장하기 위한 배열
      const testWeekList: any = [];
      // 매 주의 첫째날을 저장할 변수 - 기본값: 첫 번째 데이터의 date
      let currentFirstDate = firstReportData.data[0].date;
      // Week 리스트를 생성하는 루프
      weekIndexes.forEach((index: number) => {
        // 첫째날 Date객체로 변환
        const firstDate = new Date(currentFirstDate);
        // 첫째날의 요일의 인덱스 값
        const firstDateDay = getDay(firstDate);
        // addDays로 산출한 해당 주의 마지막날의 날짜
        const lastDate = addDays(firstDate, 6 - firstDateDay);
        // 첫째날을 yyyy-MM-dd 형식으로 수정
        const formattedFirst = format(firstDate, 'yyyy-MM-dd');
        // 마지막날을 yyyy-MM-dd 형식으로 수정
        const formattedLast = format(lastDate, 'yyyy-MM-dd');
        // 현재 루프를 도는 주의 첫째날, 마지막날 조합을 Week리스트에 추가
        testWeekList.push([formattedFirst, formattedLast]);
        // 첫째날 변수의 값을 다음주의 첫째날로 갱신
        currentFirstDate = addDays(firstDate, 6 - firstDateDay + 1);
      });
      console.log(testWeekList);
    }
  }, [firstReportData]);

  /* useReportLoad + useFormatize로 데이터를 받아오는 방법과 비교 부탁드립니다 */

  return (
    <WeekProvider>
      <DashboardContainer>
        <DashboardHeaderBox>
          <DashboardHeader>대시보드</DashboardHeader>
          {/* 전체 Week 리스트 셀렉트 박스로 전달 */}
          <SelectBox weeksList={processedWeeks} />
        </DashboardHeaderBox>
        <Test />
        <Test />
      </DashboardContainer>
    </WeekProvider>
  );
}

const DashboardContainer = styled.article`
  padding: 30px;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`;
const DashboardHeaderBox = styled.section`
  margin-bottom: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const DashboardHeader = styled.h1`
  font-size: calc(${({ theme }) => theme.fontSizes.xxlarge} * 1.5);
`;
