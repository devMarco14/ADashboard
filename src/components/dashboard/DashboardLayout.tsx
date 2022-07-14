import React from 'react';
import axios from 'axios';
import { getDay, addDays, format } from 'date-fns';
import styled from 'styled-components';
import SelectBox from './subComponents/SelectBox';

const koreanFormat = 'yyyy년 MM월 dd일';
const dateFormat = 'yyyy-MM-dd';

export default function DashboardLayout() {
  const [week, setWeek] = React.useState<string[]>([
    '1900-01-01',
    '1900-12-31',
  ]);
  const [totalDays, setTotalDays] = React.useState<Record<string, string>[]>();
  const [totalWeeks, setTotalWeeks] = React.useState<any>([]);
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    axios.get('http://localhost:8080/report').then((response) => {
      setTotalDays(response.data);
    });
  }, []);

  React.useEffect(() => {
    if (totalDays) {
      const foo = totalDays.map((reportData: any) => reportData.date);
      const bar: any = [];
      foo.forEach((date: string, index: number, selfArray: any[]) => {
        if (index === 0) {
          const firstDate = new Date(date);
          const firstDateDay = getDay(firstDate);
          const lastDate = addDays(firstDate, 6 - firstDateDay);
          const formattedFirst = format(firstDate, dateFormat);
          const formattedLast = format(lastDate, dateFormat);
          bar.push([formattedFirst, formattedLast]);
        } else if (getDay(new Date(date)) === 0) {
          const firstDate = new Date(date);
          const firstDateDay = getDay(firstDate);
          const lastDate = addDays(firstDate, 6 - firstDateDay);
          const formattedFirst = format(firstDate, dateFormat);
          const formattedLast = format(lastDate, dateFormat);
          bar.push([formattedFirst, formattedLast]);
        }
      });
      setTotalWeeks(bar);
    }
  }, [totalDays]);

  React.useEffect(() => {
    if (totalWeeks[0]) {
      const [firstDate, lastDate] = totalWeeks[0];
      // const localFormattedFirstDate = format(new Date(firstDate), koreanFormat);
      // const localFormattedLastDate = format(new Date(lastDate), koreanFormat);
      // setWeek(`${localFormattedFirstDate} ~ ${localFormattedLastDate}`);
      totalWeeks.filter((foo: any, index: number) => {
        console.log(foo, totalWeeks[index], index);
      });
      setWeek(totalWeeks[0]);
    }
  }, [totalWeeks]);

  React.useEffect(() => {
    console.log(week);
  }, [week]);

  return (
    <ChangeOrDeleteThisLater>
      <DashboardHeader>대시보드</DashboardHeader>
      <SelectBox week={week} weeksList={totalWeeks} setWeek={setWeek} />
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
