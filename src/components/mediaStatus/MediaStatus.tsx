import React from 'react';
import styled from 'styled-components';
import StackedBarChart from './StackedBarChart';
import TableChart from './TableChart';

function MediaStatus() {
  return (
    <MediaStatusLayout>
      <Title>매체 현황</Title>
      <StackedBarChart />
      <TableChart />
    </MediaStatusLayout>
  );
}

const MediaStatusLayout = styled.section`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  font-weight: 700;
  margin-bottom: 16px;
`;

export default MediaStatus;
