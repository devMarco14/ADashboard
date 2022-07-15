/* eslint-disable @typescript-eslint/no-unused-expressions */
import apiClient from 'libs/api';
import React, { useCallback, useEffect, useState } from 'react';
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

type MediaData = {
  [key: string]: number | string;
  channel: string;
  imp: number;
  click: number;
  cost: number;
  conv: number;
  convValue: number;
  ctr: number;
  cvr: number;
  cpc: number;
  cpa: number;
  roas: number;
  date: string;
};

type TransformedMediaData = {
  [key: string]: number | string;
  name: string;
  google: number;
  facebook: number;
  naver: number;
  kakao: number;
  total: number;
};

type PositionData = {
  x?: number;
  y?: number;
};

type TargetType = 'cost' | 'convValue' | 'imp' | 'click' | 'conv';

type CompanyType = 'google' | 'facebook' | 'naver' | 'kakao';

function StackedBarChart() {
  const [positionData, setPositionData] = useState<PositionData>({});
  const [data, setData] = useState<MediaData[]>([]);
  const [transformedData, setTransformedData] = useState<
    TransformedMediaData[]
  >([]);

  useEffect(() => {
    apiClient('/media?date_like=2022-02') //
      .then((response) => setData(response.data));
  }, []);

  const sumData = useCallback(
    (company: CompanyType, target: TargetType) => {
      const targetData = target;
      return data
        .filter((item) => item.channel === company)
        .map((item) => item[targetData])
        .reduce((sum, current) => sum + current);
    },
    [data],
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getTotalData = (target: TargetType): number => {
    return (
      sumData('google', target) +
      sumData('facebook', target) +
      sumData('naver', target) +
      sumData('kakao', target)
    );
  };

  const transformData = useCallback((): TransformedMediaData[] => {
    const returnData: TransformedMediaData[] = [];
    const targets: TargetType[] = ['cost', 'convValue', 'imp', 'click', 'conv'];

    targets.forEach((target: TargetType) => {
      returnData.push({
        name: target,
        google: (sumData('google', target) / getTotalData(target)) * 100,
        facebook: (sumData('facebook', target) / getTotalData(target)) * 100,
        naver: (sumData('naver', target) / getTotalData(target)) * 100,
        kakao: (sumData('kakao', target) / getTotalData(target)) * 100,
        total: getTotalData(target),
      });
    });
    return returnData;
  }, [sumData, getTotalData]);

  useEffect(() => {
    data.length !== 0 && setTransformedData(transformData());
  }, [data.length, transformData]);

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
