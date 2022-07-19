import React from 'react';
import styled from 'styled-components';
import DataTable from './subComponents/DataTable';
import LineGraph from './subComponents/LineGraph';

export default function TotalAdStatus() {
  return (
    <DataContainer>
      {/* <DataTable />
      <LineGraph /> */}
    </DataContainer>
  );
}

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
