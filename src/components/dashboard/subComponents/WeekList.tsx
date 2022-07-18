import React from 'react';
import styled from 'styled-components';
import { WeekListPropsType } from 'types/dashboard';
import { formatize } from 'components/dashboard/util';
import { BASIC_SCROLL_TIMER } from 'libs/utils/constants';

// 스크롤 감지에 사용되는 setTimeout 타입
type Timeout = ReturnType<typeof setTimeout>;

export default function WeekList({
  weeksList,
  setWeek,
  isVisible,
  onClick,
}: WeekListPropsType) {
  // 스크롤 발생 여부를 감지하는 state - 스크롤이 가능하다는 것을 알리기 위해 기본값을 true로 설정
  const [isScrollCaptured, setIsScrollCaptured] = React.useState<boolean>(true);

  // 스크롤이 발생할 경우 isScrollCaptured를 true로 설정
  const onScrollCapture = React.useCallback(handleScrollCapture, []);

  function handleScrollCapture(event: React.SyntheticEvent): void {
    setIsScrollCaptured(true);
  }

  // 스크롤을 마친 뒤 일정 시간 후에 스크롤 바를 숨기기 위한 핸들러
  const onScroll = React.useCallback(handleScroll, []);

  const timer = React.useRef<Timeout | null>(null);
  function handleScroll(event: React.SyntheticEvent): void {
    if (timer.current !== null) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      setIsScrollCaptured(false);
    }, BASIC_SCROLL_TIMER);
  }

  // 리스트 아이템을 클릭하면 목록을 닫음
  function handleClick(event: React.SyntheticEvent): void {
    onClick(!isVisible);
  }

  // 리스트 아이템 목록이 드러나면 일정 시간 후 스크롤 바를 숨김 - 스크롤이 가능하다는 것을 알리기 위함
  React.useEffect(() => {
    let scrollTimer: Timeout | null = null;
    if (isVisible) {
      scrollTimer = setTimeout(
        () => setIsScrollCaptured(false),
        BASIC_SCROLL_TIMER,
      );
    }
    return () => clearTimeout(scrollTimer as Timeout);
  }, [isVisible]);

  // 전체 주 목록을 li로 표시, 각 목록을 누를 경우 컨텍스트에 저장될 week state 갱신
  const formattedWeeks = weeksList.map(
    (weekList: string | string[], index: number) => {
      const [firstDate, lastDate] = weekList as string[];
      return (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <li key={`${firstDate}_${index}`} onClick={handleClick}>
          {/* 화살표 함수 외에 다른 방법이 있으면 추천좀... */}
          <button onClick={() => setWeek(weekList as string[])} type="button">
            {formatize(firstDate, lastDate)}
          </button>
        </li>
      );
    },
  );

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
