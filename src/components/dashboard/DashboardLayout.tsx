import React from 'react';
import styled from 'styled-components';
import { WeekProvider, LoadProvider, LoadContext } from 'libs/context';
import useReportLoad from './hooks/useReportLoad';
import SelectBox from './subComponents/SelectBox';
import Test from './subComponents/Test';
import useFormatize from './hooks/useFormatize';
import TestLayout from './subComponents/TestLayout';

export default function DashboardLayout() {
  // get 요청으로 받아온 첫 번째 데이터 저장
  const { firstReportData } = useReportLoad();
  // 추출된 date를 dateFormat 형태로 가공한 데이터 저장
  const { processedWeeks } = useFormatize(firstReportData);
  const { componentLoadingState } = React.useContext(LoadContext);

  return (
    <DashboardContainer isLoading={componentLoadingState.reportData as boolean}>
      <DashboardHeaderBox>
        <DashboardHeader>대시보드</DashboardHeader>
        {/* 전체 Week 리스트 셀렉트 박스로 전달 */}
        <SelectBox weeksList={processedWeeks} />
      </DashboardHeaderBox>
      {/* <Test />
          <Test /> */}
      <TestLayout />
      <TestLayout />
    </DashboardContainer>
  );
}

const DashboardContainer = styled.article<{ isLoading: boolean }>`
  padding: 30px;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  pointer-events: ${(props) => (props.isLoading ? 'none' : 'auto')};
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
