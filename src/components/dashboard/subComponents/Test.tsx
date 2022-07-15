import React from 'react';
import { WeekContext } from 'libs/context';
import axios from 'axios';
import styled from 'styled-components';

const initialValue = '1900-01-01';

/*
  대시보드 내 컴포넌트 자리를 표시하기 위해 만든 테스트용 컴포넌트
  - 삭제 부탁드립니다!!!!
*/

export default function Test() {
  const { currentWeek } = React.useContext(WeekContext);

  React.useEffect(() => {
    if (currentWeek[0] && currentWeek[0] !== initialValue) {
      // 데이터 요청 양식
      axios
        .get(
          `http://localhost:8080/report?date_gte=${currentWeek[0]}&date_lte=${currentWeek[1]}`,
        )
        .then((res) => console.log(res.data));
    }
  }, [currentWeek]);

  return (
    <ChangeOrDeleteThisLater>
      <h1>
        _gte={currentWeek[0]} & _lte={currentWeek[1]}
      </h1>
    </ChangeOrDeleteThisLater>
  );
}

const ChangeOrDeleteThisLater = styled.div`
  margin-bottom: 50px;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
