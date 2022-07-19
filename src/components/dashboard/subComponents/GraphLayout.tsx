/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { LoadContext, WeekContext } from 'libs/context';
import styled from 'styled-components';
import useReportLoad from '../hooks/useReportLoad';
import DataTable from './DataTable';
import LineGraph from './LineGraph';
import spinner from '../assets/Spinner-1s-200px.svg';

export default function GraphLayout({ weeksList }: any) {
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
  // console.log(currentData, previousData);

  React.useEffect(() => {
    if (componentLoadingState.report) {
      setChildLoadingState(true);
    } else {
      setChildLoadingState(false);
    }
  }, [componentLoadingState]);

  return (
    <GraphContinaer>
      <DataTable currentData={currentData} previousData={previousData} />
      <LineGraph currentData={currentData} />
      <GraphLoad loadingState={childLoadingState}>
        <img src={spinner} alt="spinner" />
      </GraphLoad>
    </GraphContinaer>
  );
}

const GraphContinaer = styled.article`
  margin-bottom: 50px;
  width: 80%;
  height: 100%;
  position: relative;
  z-index: 0;
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
