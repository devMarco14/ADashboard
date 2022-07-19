import React, { useState } from 'react';
import { IoTriangle as Triangle } from 'react-icons/io5';
import styled from 'styled-components';

import useTotalData from '../hooks/useTotalData';

export default function DataTable({ currentData, previousData }: any) {
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
        <RateChange>
          <Triangle />
          <p>{diffData('roas') ? `${diffData('roas')}%p` : '-'}</p>
        </RateChange>
      </Section>
      <Section>
        <TitleData>
          <h3>광고비</h3>
          <p>{sumData('cost').toLocaleString('ko-KR')}원</p>
        </TitleData>
        <RateChange>
          <Triangle />
          <p>18%</p>
        </RateChange>
      </Section>
      <Section>
        <TitleData>
          <h3>노출수</h3>
          <p>{sumData('imp').toLocaleString('ko-KR')}회</p>
        </TitleData>
        <RateChange>
          <Triangle />
          <p>18%</p>
        </RateChange>
      </Section>
      <Section>
        <TitleData>
          <h3>클릭수</h3>
          <p>{sumData('click').toLocaleString('ko-KR')}회</p>
        </TitleData>
        <RateChange>
          <Triangle />
          <p>18%</p>
        </RateChange>
      </Section>
      <Section>
        <TitleData>
          <h3>전환수</h3>
          <p>{sumData('conv').toLocaleString('ko-KR')}회</p>
        </TitleData>
        <RateChange>
          <Triangle />
          <p>18%</p>
        </RateChange>
      </Section>
      <Section>
        <TitleData>
          <h3>매출</h3>
          <p>{sumData('convValue').toLocaleString('ko-KR')}원</p>
        </TitleData>
        <RateChange>
          <Triangle />
          <p>18%</p>
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

const RateChange = styled.div`
  margin-right: 30px;
  display: flex;
`;
