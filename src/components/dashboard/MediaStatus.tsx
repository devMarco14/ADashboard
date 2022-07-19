import React from 'react';
import styled from 'styled-components';
import StackedBarChart from './subComponents/StackedBarChart';
import TableChart from './subComponents/TableChart';

function MediaStatus() {
  return (
    <MediaStatusLayout>
      <Title>매체 현황</Title>
      <Charts>
        <StackedBarChart />
        <TableChart />
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
  background-color: ${({ theme }) => theme.colors.whiteColor};
  border-radius: 20px;
  width: 80vw;
  box-shadow: 1px 1px 9px 1px ${({ theme }) => theme.colors.lightGrayColor};
`;

export default MediaStatus;
