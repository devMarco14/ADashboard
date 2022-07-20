import React, { useState } from 'react';
import { IoTriangle } from 'react-icons/io5';
import styled from 'styled-components';
import { ReportData, ReportType } from 'types/dashboard';
import { HEADERS_ARRAY, DATA_KEYS } from 'libs/utils/constants';

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

  const returnUnits = (header: string) => {
    switch (header) {
      case 'ROAS':
        return '%';
      case '광고비' || '매출':
        return '원';
      default:
        return '회';
    }
  };

  const dataSection = HEADERS_ARRAY.map((header: string, index: number) => {
    const displayingValue =
      header === 'ROAS'
        ? Math.round(averageData(DATA_KEYS[index]))
        : sumData(DATA_KEYS[index]).toLocaleString('ko-KR');
    const diffValue = diffData(DATA_KEYS[index]);
    const diffValueUnit = header === 'ROAS' ? '%p' : '%';

    return (
      <Section key={`${header}_${index}`}>
        <TitleData>
          <h3>{header}</h3>
          <p>
            {displayingValue}
            {returnUnits(header)}
          </p>
        </TitleData>
        <RateChange $resultValue={diffValue}>
          <Triangle $resultValue={diffValue} />
          <p>{diffValue ? `${diffValue}${diffValueUnit}` : '-'}</p>
        </RateChange>
      </Section>
    );
  });

  return <TableContainer>{dataSection}</TableContainer>;
}

const TableContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const Section = styled.section`
  width: 30%;
  height: 90px;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  border: 1px solid ${({ theme }) => theme.colors.lightGrayColor};
  border-radius: 8px;
  margin-bottom: 10px;
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

  ${({ theme }) => theme.media.small} {
    min-width: 40%;
    max-height: 30%;
    margin: 0;
    font-size: 13px;
  }
`;

const TitleData = styled.div`
  margin-left: 30px;
  ${({ theme }) => theme.media.small} {
    margin-left: 3px;
  }
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
  ${({ theme }) => theme.media.small} {
    margin-right: 3px;
  }
`;
