import React, { useState } from 'react';
import styled from 'styled-components';
import SelectBox from './subComponents/SelectBox';

export default function DashboardLayout() {
  const [week, setWeek] = useState<string>('테스트');

  return (
    <ChangeOrDeleteThisLater>
      <DashboardHeader>대시보드</DashboardHeader>
      <SelectBox week={week} />
    </ChangeOrDeleteThisLater>
  );
}

const ChangeOrDeleteThisLater = styled.article`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  * {
    border: 1px solid black;
  }
`;
const DashboardHeader = styled.h1`
  font-size: calc(${({ theme }) => theme.fontSizes.xxlarge} * 1.5);
`;
