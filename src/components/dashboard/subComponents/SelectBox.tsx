import React from 'react';
import styled from 'styled-components';
import { BsChevronDown } from 'react-icons/bs';
import { WeekContext, LoadContext } from 'libs/context';
import { formatize } from 'components/dashboard/util';
import {
  GRAPH_LOADING_TYPE,
  INITIAL_WEEK_STATE,
  WEEK_CHANGE_TYPE,
} from 'libs/utils/constants';
import WeekList from './WeekList';

// weeksList는 DashboardLayout의 totalWeeks로, 드롭다운 목록을 표시 + 컨텍스트에 업데이트하기 위함임
export default function SelectBox({ weeksList }: { weeksList: string[][] }) {
  // 현재 선택된 주
  const [selectedWeek, setSelectedWeek] =
    React.useState<string[]>(INITIAL_WEEK_STATE);
  // 드롭다운 메뉴 표시용
  const [isSelectBoxVisible, setIsSelectBoxVisible] =
    React.useState<boolean>(false);

  // 컨텍스트를 업데이트하는 dispatch 함수
  const { changeWeek, currentWeekData } = React.useContext(WeekContext);
  const { changeLoadingState, componentLoadingState } =
    React.useContext(LoadContext);

  // 서버에서 받은 데이터를 가공해 Week 리스트를 얻으면 selectedWeek를 갱신
  React.useEffect(() => {
    if (weeksList[0]) {
      setSelectedWeek(weeksList[0]);
    }
  }, [weeksList]);

  // 드롭다운 메뉴에서 선택한 주를 selectedWeek로 갱신
  React.useEffect(() => {
    changeWeek({
      type: WEEK_CHANGE_TYPE,
      payload: {
        currentWeek: selectedWeek,
        index: weeksList.indexOf(selectedWeek),
      },
    });
  }, [selectedWeek]);

  React.useEffect(() => {
    // console.log(currentWeekData);
  }, [currentWeekData]);

  const checkClickedInSelectBox = React.useCallback((event: MouseEvent) => {
    if (event.target) {
      const clickedElement = event.target as HTMLElement;
      if (clickedElement.closest('#selectbox') == null) {
        setIsSelectBoxVisible(false);
      }
    }
  }, []);

  React.useEffect(() => {
    window.addEventListener('click', checkClickedInSelectBox);
    return () => window.removeEventListener('click', checkClickedInSelectBox);
  }, [checkClickedInSelectBox]);

  // 셀렉트 박스 혹은 드롭다운 메뉴 아이템을 클릭할 경우 목록을 숨김
  const onClick = React.useCallback(handleClick, [
    isSelectBoxVisible,
    componentLoadingState,
    changeLoadingState,
  ]);

  function handleClick(event: React.MouseEvent): void {
    setIsSelectBoxVisible(!isSelectBoxVisible);
    if (!event.currentTarget) {
      Object.keys(componentLoadingState).forEach((childLoadingState: string) =>
        changeLoadingState({
          type: GRAPH_LOADING_TYPE,
          payload: { [childLoadingState]: true },
        }),
      );
    }
  }

  const setWeekFunction = (value: string[]) => {
    setSelectedWeek(value);
  };

  return (
    <SelectBoxLayout id="selectbox">
      {/* [첫째날, 마지막날] 형태의 데이터를 2022년 2월 1일 ~ 2022년 2월 5일 형태로 변환 */}
      <SelectedWeek onClick={onClick}>
        <strong>{formatize(selectedWeek[0], selectedWeek[1])}</strong>
        <button type="button">
          <BsChevronDown />
        </button>
      </SelectedWeek>
      {/* isSelectBoxVisible은 드롭다운 목록을 표시/숨기는 state, 위 버튼에서 조절함 */}
      <WeekList
        weeksList={weeksList}
        setWeek={setWeekFunction}
        isVisible={isSelectBoxVisible}
        onClick={onClick}
      />
    </SelectBoxLayout>
  );
}

const SelectBoxLayout = styled.section`
  min-width: 75px;
  width: max-content;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  strong {
    min-width: 235px;
  }
  button {
    margin-left: 10px;
    padding-top: 5px;
  }
`;
const SelectedWeek = styled.section`
  width: max-content;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
`;
