import { LoadContext, WeekContext } from 'libs/context';
import React from 'react';
import styled from 'styled-components';
import spinner from 'components/dashboard/assets/Spinner-1s-200px.svg';
import useReportLoad from './hooks/useReportLoad';
import DataTable from './subComponents/DataTable';
import LineGraph from './subComponents/LineGraph';
import SelectGraph from './subComponents/SelectGraph';

interface TotalAdStatusProps {
  weeksList: string[][];
}

export default function TotalAdStatus({ weeksList }: TotalAdStatusProps) {
  const { currentWeekData } = React.useContext(WeekContext);
  const { currentWeek, index } = currentWeekData;
  const { componentLoadingState } = React.useContext(LoadContext);
  const [childLoadingState, setChildLoadingState] =
    React.useState<boolean>(false);
  const { totalDataContainingDates: currentData } = useReportLoad(
    currentWeek[0],
    currentWeek[1],
  );
  const { totalDataContainingDates: previousData } = useReportLoad(
    weeksList[index - 1] ? weeksList[index - 1][0] : '',
    weeksList[index - 1] ? weeksList[index - 1][1] : '',
  );

  React.useEffect(() => {
    if (componentLoadingState.report) {
      setChildLoadingState(true);
    } else {
      setChildLoadingState(false);
    }
  }, [componentLoadingState]);

  return (
    <DataContainer>
      <DataTable currentData={currentData} previousData={previousData} />
      {/* <LineGraph currentData={currentData} /> */}
      <SelectGraph currentData={currentData} />
      <GraphLoad loadingState={childLoadingState}>
        <img src={spinner} alt="spinner" />
      </GraphLoad>
    </DataContainer>
    // <div>
    //   <Title>통합 광고 현황</Title>
    //   <DataContainer>
    //     <DataTable />
    //     <SelectGraph />
    //   </DataContainer>
    // </div>
  );
}

const Title = styled.h2`
  font-size: 20px;
  text-align: left;
  color: ${({ theme }) => theme.colors.fontColor};
  margin-bottom: 18px;
`;

const DataContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.whiteColor};
  width: 80vw;
  height: 70vh;
  border-radius: 20px;
  box-shadow: 1px 1px 9px 1px ${({ theme }) => theme.colors.lightGrayColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  justify-content: space-evenly;
`;
const GraphLoad = styled.div<{ loadingState: boolean }>`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 50%;
  display: ${(props) => (props.loadingState ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`;
