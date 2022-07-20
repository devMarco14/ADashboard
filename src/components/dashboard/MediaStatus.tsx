import React from 'react';
import { LoadContext } from 'libs/context';
import styled from 'styled-components';
import spinner from 'components/dashboard/assets/Spinner-1s-200px.svg';
import StackedBarChart from './subComponents/StackedBarChart';
import TableChart from './subComponents/TableChart';

function MediaStatus() {
  const { componentLoadingState } = React.useContext(LoadContext);
  const [childLoadingState, setChildLoadingState] =
    React.useState<boolean>(false);

  React.useEffect(() => {
    if (componentLoadingState.media) {
      setChildLoadingState(true);
    } else {
      setChildLoadingState(false);
    }
  }, [componentLoadingState]);

  return (
    <MediaStatusLayout>
      <Title>매체 현황</Title>
      <Charts>
        <StackedBarChart />
        <TableChart />
        <GraphLoad loadingState={childLoadingState}>
          <img src={spinner} alt="spinner" />
        </GraphLoad>
      </Charts>
    </MediaStatusLayout>
  );
}

const MediaStatusLayout = styled.section`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  margin-top: 48px;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  font-weight: 700;
  margin-bottom: 16px;
`;

const Charts = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  border-radius: 20px;
  width: 80vw;
  box-shadow: 1px 1px 9px 1px ${({ theme }) => theme.colors.lightGrayColor};
`;

const GraphLoad = styled.div<{ loadingState: boolean }>`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: #1a1010;
  opacity: 50%;
  display: ${(props) => (props.loadingState ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`;

export default MediaStatus;
