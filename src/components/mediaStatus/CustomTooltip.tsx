import React from 'react';
import styled from 'styled-components';

// active, payload | Recharts Tooltips 컴포넌트에서 자동으로 전달해 주는 데이터
// active가 true이면 tooltip이 보여지고 있다는 것을 의미
// payload은 현재 선택된 bar의 데이터를 담고있다
function CustomTooltip({ active, payload }: any) {
  if (active && payload && payload.length) {
    const { total } = payload[0].payload;
    return <ToolTip>{`${total}`}</ToolTip>;
  }

  return null;
}

export default CustomTooltip;

const ToolTip = styled.strong`
  position: relative;
  display: block;
  padding: 16px 32px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.fontColor};
  color: ${({ theme }) => theme.colors.whiteColor};
  transform: translateX(-33%);

  &:after {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 15px 15px 0;
    border-color: ${({ theme }) => theme.colors.fontColor} transparent;
    display: block;
    width: 0;
    z-index: 1;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
