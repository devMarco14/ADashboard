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

  const formattedWeeks = weeksList.map((weekList: string[], index: number) => {
    const [firstDate, lastDate] = weekList;
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <li
        key={`${firstDate}_${index}`}
        onClick={() => {
          onClick(!isVisible);
          setWeek(weekList);
        }}
      >
        {formatize(firstDate, lastDate)}
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
  border-radius: 15px;
  box-shadow: 1px 1px 9px 1px ${({ theme }) => theme.colors.lightGrayColor};
  width: 110%;
  height: 150px;
  position: absolute;
  top: 100%;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  background-color: ${({ theme }) => theme.colors.whiteColor};
  overflow-y: scroll;
  z-index: 1;

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.lightGrayColor};
    visibility: ${(props) => (props.isScrollCaptured ? 'visible' : 'hidden')};
  }

  li {
    padding: 15px 10px;
    display: flex;
    justify-content: center;
    cursor: pointer;

    :hover {
      background-color: ${({ theme }) => theme.colors.lightGrayColor};
      color: ${({ theme }) => theme.colors.whiteColor};
    }
  }
`;
