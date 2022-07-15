import React from 'react';
import { WeekContext } from 'libs/context';

export default function Test() {
  const { currentWeek, changeWeek } = React.useContext(WeekContext);
  console.log(currentWeek);
  return <h1>{currentWeek}</h1>;
}
