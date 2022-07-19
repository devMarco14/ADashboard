import React from 'react';
import styled from 'styled-components';
import DataTable from './subComponents/DataTable';
import LineGraph from './subComponents/LineGraph';

export default function TotalAdStatus() {
  return (
    <div>
      <Title>통합 광고 현황</Title>
      <DataContainer>
        <DataTable />
        <LineGraph />
      </DataContainer>
    </div>
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
  height: 50vh;
  border-radius: 20px;
  box-shadow: 1px 1px 9px 1px ${({ theme }) => theme.colors.lightGrayColor};

  display: flex;
  flex-direction: column;
  justify-content: center;
`;
