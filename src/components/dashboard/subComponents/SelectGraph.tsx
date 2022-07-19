import React, { useState } from 'react';
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

  const [firstValue, setFirstValue] = useState<string>('imp');
  const [secondValue, setSecondValue] = useState<string>('imp');

  const getfirtValue = (event: { target: { value: string } }) => {
    setFirstValue(event.target.value);
  };
  const getSecondValue = (event: { target: { value: string } }) => {
    setSecondValue(event.target.value);
  };
  return (
    <>
      <select onChange={getfirtValue}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
      <select onChange={getSecondValue}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
      <LineGraph
        firstValue={firstValue}
        secondValue={secondValue}
        currentData={currentData}
      />
      ;
    </>
  );
}
