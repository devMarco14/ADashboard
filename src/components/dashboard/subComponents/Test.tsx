import React from 'react';
import { WeekContext } from 'libs/context';
import axios from 'axios';

const initialValue = '1900-01-01';

export default function Test() {
  const { currentWeek } = React.useContext(WeekContext);

  React.useEffect(() => {
    if (currentWeek[0] && currentWeek[0] !== initialValue) {
      axios
        .get(
          `http://localhost:8080/report?date_gte=${currentWeek[0]}&date_lte=${currentWeek[1]}`,
        )
        .then((res) => console.log(res.data));
    }
  }, [currentWeek]);

  return <h1>{currentWeek}</h1>;
}
