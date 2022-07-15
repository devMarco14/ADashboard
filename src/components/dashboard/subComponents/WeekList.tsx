import React from 'react';
import styled from 'styled-components';
import { SelectBoxPropsType } from 'types/dashboard';
import { formatize } from 'components/dashboard/util/formatize';

// Omit<원본 타입(인터페이스), 뺄 속성>: 원본 타입 혹은 인터페이스에서 특정 속성만 빼고 상속
type OmitSelectBoxPropsType = Omit<SelectBoxPropsType, 'week'>;
// &: Intersection 타입 - &으로 묶인 타입들의 속성을 동시에 보유
type WeekListPropsType = OmitSelectBoxPropsType & {
  isVisible: boolean;
};

export default function WeekList({
  weeksList,
  setWeek,
  isVisible,
}: WeekListPropsType) {
  // 전체 주 목록을 li로 표시, 각 목록을 누를 경우 컨텍스트에 저장될 week state 갱신
  const formattedWeeks = weeksList.map(
    (weekList: string | string[], index: number) => {
      const [firstDate, lastDate] = weekList as string[];
      return (
        <li key={`${firstDate}_${index}`}>
          {/* 화살표 함수 외에 다른 방법이 있으면 추천좀... */}
          <button onClick={() => setWeek(weekList as string[])} type="button">
            {formatize(firstDate, lastDate)}
          </button>
        </li>
      );
    },
  );

  return (
    <SelectItemsContainer isVisible={isVisible}>
      {formattedWeeks}
    </SelectItemsContainer>
  );
}

const SelectItemsContainer = styled.ul<{ isVisible: boolean }>`
  width: 100%;
  position: absolute;
  top: 100%;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
`;
