import React from 'react';
import styled from 'styled-components';

type SelectBoxPropsType = {
  week: string;
};

export default function SelectBox({ week }: SelectBoxPropsType) {
  const [isSelectBoxVisible, setIsSelectBoxVisible] =
    React.useState<boolean>(false);

  function handleClick(event: React.MouseEvent): void {
    setIsSelectBoxVisible(!isSelectBoxVisible);
  }
  return (
    <SelectBoxLayout>
      <span>{week}</span>
      <button type="button" onClick={handleClick}>
        ▽
      </button>
      <SelectItemsContainer isVisible={isSelectBoxVisible}>
        <li>날짜 1</li>
        <li>날짜 2</li>
        <li>날짜 3</li>
        <li>날짜 4</li>
        <li>날짜 5</li>
      </SelectItemsContainer>
    </SelectBoxLayout>
  );
}

const SelectBoxLayout = styled.section`
  width: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
const SelectItemsContainer = styled.ul<{ isVisible: boolean }>`
  width: 100%;
  position: absolute;
  top: 100%;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
`;
