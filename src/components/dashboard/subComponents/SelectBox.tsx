import React from 'react';
import { format } from 'date-fns';
import styled from 'styled-components';
import { SelectBoxPropsType } from 'types/dashboard';
import { WeekContext } from 'libs/context';
import { KOREAN_DATE_FORMAT } from 'libs/utils/constants';

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

  // 전체 주 목록을 li로 표시, 각 목록을 누를 경우 컨텍스트에 저장될 week state 갱신
  const formattedWeeks = weeksList.map(
    (weekList: string | string[], index: number) => {
      const [firstDate, lastDate] = weekList as string[];
      return (
        <li key={`${firstDate}_${index}`}>
          {/* 화살표 함수 외에 다른 방법이 있으면 추천좀... */}
          <button onClick={() => setWeek(weekList as string[])} type="button">
            {format(new Date(firstDate), KOREAN_DATE_FORMAT)} ~{' '}
            {format(new Date(lastDate), KOREAN_DATE_FORMAT)}
          </button>
        </li>
      );
    },
  );

  return (
    <SelectBoxLayout>
      {/* [첫째날, 마지막날] 형태의 데이터를 2022년 2월 1일 ~ 2022년 2월 5일 형태로 변환 */}
      <span>
        {format(new Date(week[0]), KOREAN_DATE_FORMAT)} ~{' '}
        {format(new Date(week[1]), KOREAN_DATE_FORMAT)}
      </span>
      <button type="button" onClick={handleClick}>
        ▽
      </button>
      {/* isSelectBoxVisible은 드롭다운 목록을 표시/숨기는 state, 위 버튼에서 조절함 */}
      <SelectItemsContainer isVisible={isSelectBoxVisible}>
        {formattedWeeks}
      </SelectItemsContainer>
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
const SelectItemsContainer = styled.ul<{ isVisible: boolean }>`
  width: 100%;
  position: absolute;
  top: 100%;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
`;
