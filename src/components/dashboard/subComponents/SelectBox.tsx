import React from 'react';
import { format } from 'date-fns';
import styled from 'styled-components';

type SelectBoxPropsType = {
  week: string[];
  weeksList: string[];
  setWeek: React.Dispatch<React.SetStateAction<string[]>>;
};

const koreanFormat = 'yyyy년 MM월 dd일';

export default function SelectBox({
  week,
  weeksList,
  setWeek,
}: SelectBoxPropsType) {
  const [isSelectBoxVisible, setIsSelectBoxVisible] =
    React.useState<boolean>(false);

  function handleClick(event: React.MouseEvent): void {
    setIsSelectBoxVisible(!isSelectBoxVisible);
  }

  // function handleListClick(event: React.MouseEvent): void {
  //   // setWeek()
  //   const HTMLEventTarget = event.target as HTMLButtonElement;
  //   setWeek(HTMLEventTarget.innerText);
  // }

  const formattedWeeks = weeksList.map(
    (weekList: string | string[], index: number) => {
      const [firstDate, lastDate] = weekList as string[];
      return (
        <li key={`${firstDate}_${index}`}>
          <button onClick={() => setWeek(weekList as string[])} type="button">
            {format(new Date(firstDate), koreanFormat)} ~{' '}
            {format(new Date(lastDate), koreanFormat)}
          </button>
        </li>
      );
    },
  );

  return (
    <SelectBoxLayout>
      <span>
        {format(new Date(week[0]), koreanFormat)} ~{' '}
        {format(new Date(week[1]), koreanFormat)}
      </span>
      <button type="button" onClick={handleClick}>
        ▽
      </button>
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
