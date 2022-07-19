import React, { useState } from 'react';
import { IoTriangle } from 'react-icons/io5';
import styled from 'styled-components';
import { ReportData } from 'types/dashboard';

import useTotalData from '../hooks/useTotalData';

interface DataTableProps {
  currentData: ReportData[] | undefined;
  previousData: ReportData[] | undefined;
}

export default function DataTable({
  currentData,
  previousData,
}: DataTableProps) {
  const { sumData, averageData, diffData } = useTotalData(
    currentData,
    previousData,
  );

  return (
    <TableContainer>
      <Section>
        <TitleData>
          <h3>ROAS</h3>
          <p>{Math.round(averageData('roas'))}%</p>
        </TitleData>
        <RateChange $resultValue={diffData('roas')}>
          <Triangle $resultValue={diffData('roas')} />
          <p>{diffData('roas') ? `${diffData('roas')}%p` : '-'}</p>
        </RateChange>
      </Section>
      <Section>
        <TitleData>
          <h3>광고비</h3>
          <p>{sumData('cost').toLocaleString('ko-KR')}원</p>
        </TitleData>
        <RateChange $resultValue={diffData('cost')}>
          <Triangle $resultValue={diffData('cost')} />
          <p>{diffData('cost') ? `${diffData('cost')}%` : '-'}</p>
        </RateChange>
      </Section>
      <Section>
        <TitleData>
          <h3>노출수</h3>
          <p>{sumData('imp').toLocaleString('ko-KR')}회</p>
        </TitleData>
        <RateChange $resultValue={diffData('imp')}>
          <Triangle $resultValue={diffData('imp')} />
          <p>{diffData('imp') ? `${diffData('imp')}%` : '-'}</p>
        </RateChange>
      </Section>
      <Section>
        <TitleData>
          <h3>클릭수</h3>
          <p>{sumData('click').toLocaleString('ko-KR')}회</p>
        </TitleData>
        <RateChange $resultValue={diffData('click')}>
          <Triangle $resultValue={diffData('click')} />
          <p>{diffData('click') ? `${diffData('click')}%` : '-'}</p>
        </RateChange>
      </Section>
      <Section>
        <TitleData>
          <h3>전환수</h3>
          <p>{sumData('conv').toLocaleString('ko-KR')}회</p>
        </TitleData>
        <RateChange $resultValue={diffData('conv')}>
          <Triangle $resultValue={diffData('conv')} />
          <p>{diffData('conv') ? `${diffData('conv')}%` : '-'}</p>
        </RateChange>
      </Section>
      <Section>
        <TitleData>
          <h3>매출</h3>
          <p>{sumData('convValue').toLocaleString('ko-KR')}원</p>
        </TitleData>
        <RateChange $resultValue={diffData('convValue')}>
          <Triangle $resultValue={diffData('convValue')} />
          <p>{diffData('convValue') ? `${diffData('convValue')}%` : '-'}</p>
        </RateChange>
      </Section>
    </TableContainer>
  );
}

const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Section = styled.section`
  width: 300px;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  border: 1px solid ${({ theme }) => theme.colors.lightGrayColor};
  border-radius: 8px;
  margin: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & h3 {
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.fontColor};
    font-weight: normal;
  }
  & p {
    font-weight: bold;
  }
`;

const TitleData = styled.div`
  margin-left: 30px;
`;

const RateChange = styled.div<{ $resultValue: number | undefined }>`
  margin-right: 30px;
  display: flex;
  color: ${({ $resultValue, theme }) =>
    // eslint-disable-next-line no-nested-ternary
    $resultValue
      ? $resultValue > 0
        ? theme.colors.redColor
        : theme.colors.blueColor
      : theme.colors.lightGrayColor};
`;

const Triangle = styled(IoTriangle)<{ $resultValue: number | undefined }>`
  margin-right: 3px;
  transform: ${({ $resultValue }) =>
    $resultValue && $resultValue < 0 ? 'rotate(180deg)' : 'rotate(0)'};
  visibility: ${({ $resultValue }) => ($resultValue ? 'visible' : 'hidden')};
`;
