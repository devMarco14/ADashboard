import React from 'react';
import styled from 'styled-components';
import { TooltipProps } from 'recharts';

function StackedBarTooltip({ active, payload }: TooltipProps<number, string>) {
  if (active && payload) {
    const { total } = payload[0].payload;
    const format = (data: number) => {
      return Math.round(data).toLocaleString();
    };

    return <ToolTip>{`${format(total)}`}</ToolTip>;
  }

  return null;
}

export default StackedBarTooltip;

const ToolTip = styled.strong`
  position: absolute;
  left: 50%;
  display: block;
  text-align: center;
  padding: 16px 32px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.fontColor};
  color: ${({ theme }) => theme.colors.whiteColor};
  transform: translateX(-50%) translateX(20px);

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
