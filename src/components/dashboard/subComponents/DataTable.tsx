import React, { useState } from 'react';
import { IoTriangle as Triangle } from 'react-icons/io5';
import styled from 'styled-components';

import { WeekContext } from 'libs/context';
import { ReportData } from 'types/dashboard';
import useReportLoad from '../hooks/useReportLoad';

export default function DataTable() {
  const { currentWeek } = React.useContext(WeekContext);
  const [data, setData] = useState<ReportData>();

  // ReportData 예시: 파라미터를 전달할 경우 특정 기간 동안의 데이터만 반환
  const { totalDataContainingDates: reportData } = useReportLoad(
    currentWeek[0],
    currentWeek[1],
  );
  React.useEffect(() => {
    if (reportData) {
      console.log(reportData);
    }
  }, [reportData]);

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
