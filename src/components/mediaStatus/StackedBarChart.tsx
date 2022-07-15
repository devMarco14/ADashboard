/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import styled from 'styled-components';
import CustomTooltip from './CustomTooltip';
import useTransformedData from './hooks/useTransformedData';

type PositionData = {
  x?: number;
  y?: number;
};

function StackedBarChart() {
  const [positionData, setPositionData] = useState<PositionData>({});
  const { getTransformedData } = useTransformedData();
  const transformedData = getTransformedData();

  const changeTooltipPosition = (positionX: number): void => {
    positionX !== positionData.x && setPositionData({ x: positionX, y: 5 });
  };

  return (
    <ChartLayout
      width="90%"
      minWidth="320px"
      height="40%"
      minHeight="300px"
      debounce={1}
    >
      <BarChart
        width={600}
        height={300}
        margin={{
          top: 60,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        data={transformedData}
      >
        <CartesianGrid />

        <XAxis
          dataKey="name"
          tick={{ fill: '#c8ced8' }}
          tickLine={{ fill: '#c8ced8' }}
        />
        <YAxis
          ticks={[20, 40, 60, 80, 100]}
          type="number"
          tick={{ fill: '#c8ced8' }}
          tickLine={{ fill: '#c8ced8' }}
        />
        <Tooltip
          content={<CustomTooltip />}
          cursor={false}
          position={{ x: positionData.x, y: positionData.y }}
        />
        <Bar
          barSize={30}
          dataKey="google"
          stackId="a"
          fill="#ac8af8"
          onMouseOver={({ x }) => changeTooltipPosition(x)}
        />
        <Bar
          barSize={30}
          dataKey="naver"
          stackId="a"
          fill="#85da47"
          onMouseOver={({ x }) => changeTooltipPosition(x)}
        />
        <Bar
          barSize={30}
          dataKey="kakao"
          stackId="a"
          fill="#fec107"
          onMouseOver={({ x }) => changeTooltipPosition(x)}
        />
        <Bar
          barSize={30}
          dataKey="facebook"
          stackId="a"
          fill="#4fadf7"
          radius={[6, 6, 0, 0]}
          onMouseOver={({ x }) => changeTooltipPosition(x)}
        />
        <Legend align="right" iconType="circle" iconSize={10} />
      </BarChart>
    </ChartLayout>
  );
}

const ChartLayout = styled(ResponsiveContainer)`
  background-color: ${({ theme }) => theme.colors.whiteColor};
  border-radius: 8px;
  margin: 0 auto 16px;
`;

export default StackedBarChart;
