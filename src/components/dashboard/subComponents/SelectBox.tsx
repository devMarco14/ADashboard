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

export default function SelectBox({ weeksList }: { weeksList: string[][] }) {
  const [selectedWeek, setSelectedWeek] =
    React.useState<string[]>(INITIAL_WEEK_STATE);
  const [isSelectBoxVisible, setIsSelectBoxVisible] =
    React.useState<boolean>(false);
  const { changeWeek } = React.useContext(WeekContext);
  const { changeLoadingState, componentLoadingState } =
    React.useContext(LoadContext);

  React.useEffect(() => {
    if (weeksList[0]) {
      setSelectedWeek(weeksList[0]);
    }
  }, [weeksList]);

  React.useEffect(() => {
    changeWeek({
      type: WEEK_CHANGE_TYPE,
      payload: {
        currentWeek: selectedWeek,
        index: weeksList.indexOf(selectedWeek),
      },
    });
  }, [selectedWeek]);

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
      <SelectedWeek onClick={onClick}>
        <strong>{formatize(selectedWeek[0], selectedWeek[1])}</strong>
        <button type="button">
          <BsChevronDown />
        </button>
      </SelectedWeek>
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
  svg {
    fill: ${({ theme }) => theme.colors.fontColor};
  }
`;
