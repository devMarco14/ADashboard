import React from 'react';
import styled from 'styled-components';
import { WeekListPropsType } from 'types/dashboard';
import { formatize } from 'components/dashboard/util';
import useHideScroll from 'components/dashboard/hooks/useHideScroll';

export default function WeekList({
  weeksList,
  setWeek,
  isVisible,
  onClick,
}: WeekListPropsType) {
  const { isScrollCaptured, onScrollCapture, onScroll } =
    useHideScroll(isVisible);

  // 리스트 아이템을 클릭하면 목록을 닫음
  function handleClick(event: React.SyntheticEvent): void {
    onClick(!isVisible);
  }

  // 전체 주 목록을 li로 표시, 각 목록을 누를 경우 컨텍스트에 저장될 week state 갱신
  const formattedWeeks = weeksList.map((weekList: string[], index: number) => {
    const [firstDate, lastDate] = weekList;
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <li key={`${firstDate}_${index}`} onClick={handleClick}>
        {/* 화살표 함수 외에 다른 방법이 있으면 추천좀... */}
        <button onClick={() => setWeek(weekList)} type="button">
          {formatize(firstDate, lastDate)}
        </button>
      </li>
    );
  });

  return (
    <SelectItemsContainer
      isVisible={isVisible}
      isScrollCaptured={isScrollCaptured}
      onScrollCapture={onScrollCapture}
      onScroll={onScroll}
    >
      {formattedWeeks}
    </SelectItemsContainer>
  );
}

const SelectItemsContainer = styled.ul<{
  isVisible: boolean;
  isScrollCaptured: boolean;
}>`
  width: max-content;
  height: 150px;
  position: absolute;
  top: 100%;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  overflow-y: scroll;
  z-index: 1;

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.lightGrayColor};
    background-color: #c8ced8ad;
    visibility: ${(props) => (props.isScrollCaptured ? 'visible' : 'hidden')};
  }

  li {
    margin: 10px 0;
    padding: 0 10px;

    button {
      margin: 0;
    }
  }
`;
