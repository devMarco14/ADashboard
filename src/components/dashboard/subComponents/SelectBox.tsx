import React from 'react';
import { format } from 'date-fns';
import styled from 'styled-components';
import { SelectBoxPropsType } from 'types/dashboard';
import { WeekContext } from 'libs/context';
import { KOREAN_DATE_FORMAT } from 'libs/utils/constants';
import { formatize } from 'components/dashboard/util/formatize';
import WeekList from './WeekList';

// 데이터 표시 + 컨텍스트 저장을 위해 week, setWeek 전달
// weeksList는 DashboardLayout의 totalWeeks로, 드롭다운 목록을 표시하기 위함임
export default function SelectBox({
  week,
  weeksList,
  setWeek,
}: SelectBoxPropsType) {
  const [isSelectBoxVisible, setIsSelectBoxVisible] =
    React.useState<boolean>(false);

  const { changeWeek } = React.useContext(WeekContext);

  React.useEffect(() => {
    changeWeek({ type: 'WEEK_REQUESTED', payload: week });
  }, [week]);

  function handleClick(event: React.MouseEvent): void {
    setIsSelectBoxVisible(!isSelectBoxVisible);
  }

  return (
    <SelectBoxLayout>
      {/* [첫째날, 마지막날] 형태의 데이터를 2022년 2월 1일 ~ 2022년 2월 5일 형태로 변환 */}
      <span>{formatize(week[0], week[1])}</span>
      <button type="button" onClick={handleClick}>
        ▽
      </button>
      {/* isSelectBoxVisible은 드롭다운 목록을 표시/숨기는 state, 위 버튼에서 조절함 */}
      <WeekList
        weeksList={weeksList}
        setWeek={setWeek}
        isVisible={isSelectBoxVisible}
      />
    </SelectBoxLayout>
  );
}

const SelectBoxLayout = styled.section`
  min-width: 75px;
  width: max-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  button {
    margin-left: 5px;
  }
`;
