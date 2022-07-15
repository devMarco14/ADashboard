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

// 더미 데이터 타입 정의
type Data = {
  name: string;
  uv: number;
  pv: number;
  amt: number;
};

// const data: Data[] | data는 위에 정의한 Data 타입의 객체로 이루어진 배열이다
// 차트 어떻게 생겼는지 보려고 넣은 더미 데이터
const data: Data[] = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

// 더미 데이터를 퍼센트 데이터로 변형했을 때 타입 정의
type PercentageData = {
  name: string;
  uv: number;
  pv: number;
  amt: number;
  total: number;
};

// getPercentage 함수는 dummyData를 인자로 받는다
// getPercentage 함수는 PercentageData로 이루어진 배열을 반환한다
// 임의로 넣은 데이터를 퍼센트로 바꾸면 어떻게 되는지 보려고 넣은 함수
const getPercentageData = (dummyData: Data[]): PercentageData[] => {
  return dummyData.map((dummy) => ({
    name: dummy.name,
    uv: (dummy.uv / (dummy.uv + dummy.pv + dummy.amt)) * 100,
    pv: (dummy.pv / (dummy.uv + dummy.pv + dummy.amt)) * 100,
    amt: (dummy.amt / (dummy.uv + dummy.pv + dummy.amt)) * 100,
    total: dummy.uv + dummy.pv + dummy.amt,
  }));
};

// 차트에 사용할 데이터
const dummy = getPercentageData(data);

type PositionData = {
  x?: number;
  y?: number;
};

function StackedBarChart() {
  // 차트의 말풍선 position을 고정하기 위해 state를 사용
  const [positionData, setPositionData] = useState<PositionData>({});

  // bar에 마우스가 올라오면 말풍선의 위치를 변경하기 위해 Position 상태를 업데이트 한다
  // 말풍선의 y축 위치는 고정하고, x만 변경한다
  // 이 때 렌더링 최적화를 위해, 현재 x와 이전 x(positionData.x)를 비교하고, 상태가 같지 않을 때에만 업데이트를 한다
  const changeTooltipPosition = (positionX: number): void => {
    positionX !== positionData.x && setPositionData({ x: positionX, y: 5 });
  };

  return (
    <ChartLayout
      width="90%"
      minWidth="320px"
      height="40%"
      minHeight="300px"
      // debounce={1} 옵션을 주면
      // 뷰포트가 resize 될 때 마다 렌더링이 일어나는 것이 아니라, 일정 시간 텀을 두고 렌더링이 일어난다
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
        // 차트에 사용되는 data를 넘겨준다
        data={dummy}
      >
        <CartesianGrid />

        <XAxis
          dataKey="name"
          tick={{ fill: '#c8ced8' }}
          tickLine={{ fill: '#c8ced8' }}
        />
        <YAxis
          // y축 데이터의 타입을 number, category로 줄 수 있다
          // 퍼센트로 바꾸고 싶은데 아직 방법을 못찾음
          type="number"
          // y축에 표시할 값을 배열로 넘겨줄 수 있다
          ticks={[20, 40, 60, 80, 100]}
          tick={{ fill: '#c8ced8' }}
          tickLine={{ fill: '#c8ced8' }}
        />
        <Tooltip
          // bar에 마우스를 가져다 댔을 때 말풍선 모양으로 데이터를 보여주기 위해 CustomTooltip을 사용한다
          content={<CustomTooltip />}
          // bar에 마우스를 가져다 댔을 때, 선택된 bar의 배경을 진한 회색으로 처리하는 옵션을 끈다
          // 이것도 커스텀 할 수 있어서 바꿀 예정
          cursor={false}
          // position 속성을 주지 않으면, 말풍선이 마우스를 졸졸 따라온다
          position={{ x: positionData.x, y: positionData.y }}
        />
        <Bar
          barSize={30}
          // 전달한 데이터의 "pv" 속성을 보여주는 bar라는 뜻
          dataKey="pv"
          stackId="a"
          fill="#ac8af8"
          // onMouseOver에 함수를 전달하면, bar에 마우스가 올라왔을 때 그 함수를 실행할 수 있다
          // 이 함수는 recharts에 의해 자동으로 data라는 객체 인자를 전달받는다
          // data에는 마우스의 위치를 알려주는 x, y와 같은 값이 들어있다
          onMouseOver={({ x }) => changeTooltipPosition(x)}
        />
        <Bar
          barSize={30}
          dataKey="uv"
          stackId="a"
          fill="#85da47"
          onMouseOver={({ x }) => changeTooltipPosition(x)}
        />
        <Bar
          barSize={30}
          dataKey="amt"
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
