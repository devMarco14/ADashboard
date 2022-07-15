import React from 'react';
import styled from 'styled-components';
import { ReportData } from 'types/dashboard';
import WeekProvider from 'libs/context';
import { INITIAL_WEEK_STATE } from 'libs/utils/constants';
import useFormatize from './hooks/useFormatize';
import useReportLoad from './hooks/useReportLoad';
import SelectBox from './subComponents/SelectBox';
import Test from './subComponents/Test';

export default function DashboardLayout() {
  // 셀렉트 박스 표시 데이터 + 컨텍스트 저장 데이터
  const [week, setWeek] = React.useState<string[]>(INITIAL_WEEK_STATE);
  // get 요청으로 받아온 전체 데이터 저장
  const { totalDataContainingDates } = useReportLoad();
  // 추출된 date를 dateFormat 형태로 가공한 데이터 저장
  const { processedWeeks } = useFormatize(
    totalDataContainingDates as ReportData[],
  );

  React.useEffect(() => {
    if (processedWeeks[0]) {
      setWeek(processedWeeks[0]);
    }
  }, [processedWeeks]);

  return (
    <WeekProvider>
      <ChangeOrDeleteThisLater>
        <DashboardHeader>대시보드</DashboardHeader>
        <SelectBox week={week} weeksList={processedWeeks} setWeek={setWeek} />
        <Test />
      </ChangeOrDeleteThisLater>
    </WeekProvider>
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
