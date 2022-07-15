import React from 'react';
import { WeekContext } from 'libs/context';
import styled from 'styled-components';
import useMediaLoad from '../hooks/useMediaLoad';
import useReportLoad from '../hooks/useReportLoad';

/*
  대시보드 내 컴포넌트 자리를 표시하기 위해 만든 테스트용 컴포넌트
  - 삭제 부탁드립니다!!!!
*/

export default function Test() {
  // 컨텍스트에서 currentWeek 호출
  const { currentWeek } = React.useContext(WeekContext);

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

  // MediaData 예시: 파라미터를 전달해야 데이터가 반환됨
  const { totalDataContainingDates: mediaData } = useMediaLoad(
    currentWeek[0],
    currentWeek[1],
  );
  React.useEffect(() => {
    if (mediaData) {
      // 데이터 요청 양식
      console.log(mediaData);
    }
  }, [mediaData]);

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
