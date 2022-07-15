import React from 'react';
import styled from 'styled-components';

// active, payload | Recharts Tooltips 컴포넌트에서 자동으로 전달해 주는 데이터
// active가 true이면 tooltip이 보여지고 있다는 것을 의미
// payload은 현재 선택된 bar의 데이터를 담고있다
// active랑 payload 타입 뭐라고 해야하죠???
function CustomTooltip({ active, payload }: any) {
  if (active && payload && payload.length) {
    const { total } = payload[0].payload;
    return <Strong>{`${total}`}</Strong>;
  }

  return null;
}

export default CustomTooltip;

const Strong = styled.strong`
  display: block;
  padding: 16px 32px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.fontColor};
  color: ${({ theme }) => theme.colors.whiteColor};
  transform: translateX(-33%);
`;
