import React from 'react';
import styled from 'styled-components';
import StackedBarChart from './StackedBarChart';
import TableChart from './TableChart';

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
  width: 100%;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  font-weight: 700;
  margin-bottom: 16px;
`;

const Charts = styled.section`
  background-color: ${({ theme }) => theme.colors.whiteColor};
  border-radius: 12px;
`;

export default MediaStatus;
