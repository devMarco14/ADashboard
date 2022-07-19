import React from 'react';
import styled from 'styled-components';
<<<<<<< HEAD
import { WeekProvider } from 'libs/context';
import MediaStatus from 'components/mediaStatus/MediaStatus';
import useReportLoad from './hooks/useReportLoad';
import SelectBox from './subComponents/SelectBox';
import DataTable from './subComponents/DataTable';
=======
import { LoadContext } from 'libs/context';
import useReportLoad from './hooks/useReportLoad';
import SelectBox from './subComponents/SelectBox';
>>>>>>> 17382e468635e5d990e6539e88485d784af61d8d
import useFormatize from './hooks/useFormatize';
import TestLayout from './subComponents/TestLayout';

export default function DashboardLayout() {
  // get 요청으로 받아온 첫 번째 데이터 저장
  const { firstReportData } = useReportLoad();
  // 추출된 date를 dateFormat 형태로 가공한 데이터 저장
  const { processedWeeks } = useFormatize(firstReportData);
  const { componentLoadingState } = React.useContext(LoadContext);
  const [childrenLoadingStates, setChildrenLoadingStates] =
    React.useState<boolean>(false);

  React.useEffect(() => {
    const graphsLoadingStates = Object.values(componentLoadingState).filter(
      (childLoadingState: boolean | undefined) => childLoadingState,
    );

    if (graphsLoadingStates.length === 0) {
      setChildrenLoadingStates(false);
    } else {
      setChildrenLoadingStates(true);
    }
  }, [componentLoadingState]);

  return (
<<<<<<< HEAD
    <WeekProvider>
      <DashboardContainer>
        <DashboardHeaderBox>
          <DashboardHeader>대시보드</DashboardHeader>
          {/* 전체 Week 리스트 셀렉트 박스로 전달 */}
          <SelectBox weeksList={processedWeeks} />
        </DashboardHeaderBox>
        <TotalAdStatus />
        <MediaStatus />
      </DashboardContainer>
    </WeekProvider>
=======
    <DashboardContainer isLoading={childrenLoadingStates}>
      <DashboardHeaderBox>
        <DashboardHeader>대시보드</DashboardHeader>
        {/* 전체 Week 리스트 셀렉트 박스로 전달 */}
        <SelectBox weeksList={processedWeeks} />
      </DashboardHeaderBox>
      {/* <Test />
          <Test /> */}
      <TestLayout target="report" />
      <TestLayout target="media" />
    </DashboardContainer>
>>>>>>> 17382e468635e5d990e6539e88485d784af61d8d
  );
}

const DashboardContainer = styled.article<{ isLoading: boolean }>`
  padding: 30px;
  width: 100%;
  height: 100%;
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
