import React, { useState } from 'react';
import { IoTriangle as Triangle } from 'react-icons/io5';
import styled from 'styled-components';

import useTotalData from '../hooks/useTotalData';

export default function DataTable() {
  const { sumData, averageData } = useTotalData();
  return (
    <Div>
      <Section>
        <TitleData>
          <h3>ROAS</h3>
          <p>697%</p>
        </TitleData>
        <RateChange>
          <Triangle />
          <p>18%</p>
        </RateChange>
      </Section>
      <Section>
        <TitleData>
          <h3>ROAS</h3>
          <p>697%</p>
        </TitleData>
        <RateChange>
          <Triangle />
          <p>18%</p>
        </RateChange>
      </Section>
      <Section>
        <TitleData>
          <h3>ROAS</h3>
          <p>697%</p>
        </TitleData>
        <RateChange>
          <Triangle />
          <p>18%</p>
        </RateChange>
      </Section>
      <Section>
        <TitleData>
          <h3>ROAS</h3>
          <p>697%</p>
        </TitleData>
        <RateChange>
          <Triangle />
          <p>18%</p>
        </RateChange>
      </Section>
      <Section>
        <TitleData>
          <h3>ROAS</h3>
          <p>697%</p>
        </TitleData>
        <RateChange>
          <Triangle />
          <p>18%</p>
        </RateChange>
      </Section>
      <Section>
        <TitleData>
          <h3>ROAS</h3>
          <p>697%</p>
        </TitleData>
        <RateChange>
          <Triangle />
          <p>18%</p>
        </RateChange>
      </Section>
    </Div>
  );
}

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
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const TitleData = styled.div`
  margin-left: 30px;
`;

const RateChange = styled.div`
  margin-right: 30px;
  display: flex;
`;
