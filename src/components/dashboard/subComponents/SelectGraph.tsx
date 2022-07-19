import React, { useState } from 'react';
import styled from 'styled-components';
import { BsFillCircleFill } from 'react-icons/bs';
import LineGraph from './LineGraph';

export default function SelectGraph({ currentData }: any) {
  const options = [
    { value: 'imp', name: '노출 수' },
    { value: 'click', name: '클릭 수' },
    { value: 'cost', name: '광고비' },
    { value: 'conv', name: '전환수' },
    { value: 'convValue', name: '매출' },
    { value: 'roas', name: 'ROAS' },
  ];

  const [firstValue, setFirstValue] = useState<string>('roas');
  const [secondValue, setSecondValue] = useState<string>('click');

  const getfirtValue = (event: { target: { value: string } }): void => {
    setFirstValue(event.target.value);
  };
  const getSecondValue = (event: { target: { value: string } }): void => {
    setSecondValue(event.target.value);
  };
  return (
    <SelectGraphContainer>
      <SelectBoxContainer>
        <SelectValue onChange={getfirtValue} value={firstValue}>
          {options.map((option) => (
            <option value={option.value}>{option.name}</option>
          ))}
        </SelectValue>
        <SelectValue onChange={getSecondValue} value={secondValue}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              <BsFillCircleFill />
              {option.name}
            </option>
          ))}
        </SelectValue>
      </SelectBoxContainer>
      <LineGraph
        firstValue={firstValue}
        secondValue={secondValue}
        currentData={currentData}
      />
      ;
    </SelectGraphContainer>
  );
}

const SelectGraphContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 50%;
`;

const SelectBoxContainer = styled.section`
  margin-left: 20px;
`;

const SelectValue = styled.select`
  width: 100px;
  height: 50px;
  color: ${({ theme }) => theme.colors.fontColor};
  font-weight: bold;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrayColor};
  margin-left: 10px;

  ${({ theme }) => theme.media.small} {
    max-height: 30px;
  }
`;
